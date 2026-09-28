import { b as getAdminAuth, g as getAdminFirestore } from "./firebase-admin.server-DIx8P1Z3.mjs";
import { b as getCookie, d as getRequestHeader, e as getRequestIP, s as setCookie, f as deleteCookie } from "./server-D7pJ5bR7.mjs";
const SESSION_COOKIE_NAME = "__session";
const SESSION_EXPIRY_MS = 5 * 24 * 60 * 60 * 1e3;
const loginRateLimitMap = /* @__PURE__ */ new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const entry = loginRateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    loginRateLimitMap.set(ip, { count: 1, resetAt: now + 15 * 60 * 1e3 });
    return false;
  }
  entry.count++;
  return entry.count > 10;
}
function getAllowedAdminEmails() {
  const raw = process.env.ADMIN_EMAILS || "";
  return raw.split(",").map((e) => e.trim().toLowerCase()).filter((e) => e.length > 0);
}
async function requireAdmin() {
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
    const decoded = await auth.verifySessionCookie(cookie, true);
    const email = decoded.email?.toLowerCase();
    if (!email || !allowedEmails.includes(email)) {
      throw new Error("Unauthorized: Email not permitted");
    }
    if (!decoded.email_verified) {
      throw new Error("Unauthorized: Email is not verified");
    }
    return {
      email: decoded.email,
      uid: decoded.uid,
      name: decoded.name || decoded.email
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Session verification failed";
    throw new Error(`Unauthorized: ${msg}`);
  }
}
async function performAdminLogin(idToken) {
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
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRY_MS
    });
    const isProd = false;
    setCookie(SESSION_COOKIE_NAME, sessionCookie, {
      maxAge: SESSION_EXPIRY_MS / 1e3,
      httpOnly: true,
      secure: isProd,
      sameSite: "strict",
      path: "/"
    });
    try {
      const db = await getAdminFirestore();
      await db.collection("auditLog").add({
        action: "admin_login",
        target: "authentication",
        beforeSummary: null,
        afterSummary: `Admin authenticated successfully from IP ${ip}`,
        adminEmail: userEmail,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (auditErr) {
      console.error("Failed to write login audit log:", auditErr);
    }
    return { success: true, email: userEmail };
  } catch (err) {
    console.error("[Security] Google ID token verification error:", err instanceof Error ? err.message : String(err));
    return { success: false, error: "Sign-in failed" };
  }
}
async function performAdminLogout() {
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
      }
    }
  } catch {
  } finally {
    deleteCookie(SESSION_COOKIE_NAME, { path: "/" });
  }
  return { success: true };
}
export {
  performAdminLogout as a,
  getAllowedAdminEmails as g,
  performAdminLogin as p,
  requireAdmin as r
};
