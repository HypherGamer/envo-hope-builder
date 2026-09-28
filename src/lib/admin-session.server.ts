import { getCookie, setCookie, deleteCookie, getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { getAdminAuth, getAdminFirestore } from "./firebase-admin.server";

export interface AdminUser {
  email: string;
  uid: string;
  name?: string;
}

export const SESSION_COOKIE_NAME = "__session";
export const SESSION_EXPIRY_MS = 5 * 24 * 60 * 60 * 1000; // 5 days (Firebase max)

// In-memory rate limiting for login attempts per IP: 10 attempts per 15 minutes
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const loginRateLimitMap = new Map<string, RateLimitEntry>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = loginRateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    loginRateLimitMap.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  entry.count++;
  return entry.count > 10;
}

export function getAllowedAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS || "";
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.length > 0);
}

export async function requireAdmin(): Promise<AdminUser> {
  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) {
    throw new Error("Admin area is not configured or disabled");
  }

  const cookie = getCookie(SESSION_COOKIE_NAME);
  if (!cookie || !cookie.trim()) {
    throw new Error("Unauthorized: No session cookie provided");
  }

  try {
    const auth = await getAdminAuth();
    // Check revocation (second param is true)
    const decoded = await auth.verifySessionCookie(cookie, true);

    const email = decoded.email?.toLowerCase();
    if (!email || !allowedEmails.includes(email)) {
      throw new Error("Unauthorized: Email not permitted");
    }

    if (!decoded.email_verified) {
      throw new Error("Unauthorized: Email is not verified");
    }

    return {
      email: decoded.email as string,
      uid: decoded.uid,
      name: (decoded.name as string) || (decoded.email as string),
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Session verification failed";
    throw new Error(`Unauthorized: ${msg}`);
  }
}

export async function performAdminLogin(idToken: string): Promise<{ success: boolean; email?: string; error?: string }> {
  // CSRF check: verify Origin matches site host if present
  const origin = getRequestHeader("origin");
  const host = getRequestHeader("host");
  if (origin && host) {
    const originHost = origin.replace(/^https?:\/\//, "").split("/")[0];
    if (originHost !== host && !originHost.includes(host)) {
      return { success: false, error: "Sign-in failed (origin mismatch)" };
    }
  }

  const ip = getRequestIP() || getRequestHeader("x-forwarded-for") || "unknown-ip";
  if (isRateLimited(ip)) {
    console.warn(`[Security] Admin login rate limit exceeded from IP: ${ip}`);
    return { success: false, error: "Too many sign-in attempts. Please try again in 15 minutes." };
  }

  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) {
    console.warn("[Security] Login attempted but ADMIN_EMAILS is empty or unset.");
    return { success: false, error: "Sign-in failed" };
  }

  try {
    const auth = await getAdminAuth();
    const decodedIdToken = await auth.verifyIdToken(idToken, true);

    const userEmail = decodedIdToken.email?.toLowerCase();
    const isVerified = Boolean(decodedIdToken.email_verified);

    if (!userEmail || !isVerified || !allowedEmails.includes(userEmail)) {
      console.warn(`[Security] Unauthorized admin sign-in attempt by: ${userEmail || "unknown"} (verified: ${isVerified}) from IP: ${ip}`);
      return { success: false, error: "Sign-in failed" };
    }

    // Create session cookie
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRY_MS,
    });

    const isProd = process.env.NODE_ENV === "production";
    setCookie(SESSION_COOKIE_NAME, sessionCookie, {
      maxAge: SESSION_EXPIRY_MS / 1000,
      httpOnly: true,
      secure: isProd,
      sameSite: "strict",
      path: "/",
    });

    // Write login event to auditLog
    try {
      const db = await getAdminFirestore();
      await db.collection("auditLog").add({
        action: "admin_login",
        target: "authentication",
        beforeSummary: null,
        afterSummary: `Admin authenticated successfully from IP ${ip}`,
        adminEmail: userEmail,
        timestamp: new Date().toISOString(),
      });
    } catch (auditErr) {
      console.error("Failed to write login audit log:", auditErr);
    }

    return { success: true, email: userEmail };
  } catch (err: unknown) {
    console.error("[Security] Google ID token verification error:", err instanceof Error ? err.message : String(err));
    return { success: false, error: "Sign-in failed" };
  }
}

export async function performAdminLogout(): Promise<{ success: boolean }> {
  try {
    const cookie = getCookie(SESSION_COOKIE_NAME);
    if (cookie) {
      const auth = await getAdminAuth();
      try {
        const decoded = await auth.verifySessionCookie(cookie, false);
        if (decoded.sub) {
          await auth.revokeRefreshTokens(decoded.sub);
        }
      } catch {
        // ignore error if already invalid
      }
    }
  } catch {
    // ignore
  } finally {
    deleteCookie(SESSION_COOKIE_NAME, { path: "/" });
  }

  return { success: true };
}
