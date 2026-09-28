import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getAdminFirestore, getAdminStorageBucket } from "./firebase-admin.server";
import { requireAdmin, getAllowedAdminEmails } from "./admin-session.server";
import { maskAccountNumber } from "./utils";
import { siteConfig, type SiteConfig } from "@/content/site";
import { teamMembers, type TeamMember } from "@/content/team";
import { impactContent, type ImpactStory } from "@/content/impact";

// ==========================================
// DATA TYPES
// ==========================================

export type ItemStatus = "draft" | "published" | "archived";

export interface OutreachItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  body: string;
  images: Array<{ url: string; alt: string; caption?: string }>;
  program: string; // e.g. "outreach", "education", "healthcare", "youth", "community", "general"
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface TeamItem {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  photo?: { url: string; alt: string };
  order: number;
  status: ItemStatus;
  isFounder?: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface DonationSettings {
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  accountType?: string;
  extraNote?: string;
  suggestedAmounts: number[];
  updatedAt?: string;
  updatedBy?: string;
}

export interface SiteSettings {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
  socials: {
    facebook?: string;
    x?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  announcement: {
    enabled: boolean;
    text: string;
    linkLabel?: string;
    linkUrl?: string;
  };
  updatedAt?: string;
  updatedBy?: string;
}

export interface HomeSettings {
  heroHeadline?: string;
  heroSubline?: string;
  headlineStats?: Array<{ value: string; label: string; asOf: string }>;
  updatedAt?: string;
  updatedBy?: string;
}

export interface StoryItem {
  id: string;
  title: string;
  beneficiary: string;
  location: string;
  program: string;
  programSlug: string;
  summary: string;
  quote: string;
  outcomes: string[];
  asOf: string;
  order: number;
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  programSlug: string; // "general" or program slug
  order: number;
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  programSlug: string;
  order: number;
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface InboxMessage {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  reason?: string;
  message: string;
  createdAt: string;
  read?: boolean;
  archived?: boolean;
}

export interface AuditLogEntry {
  id: string;
  action: string;
  target: string;
  beforeSummary?: string | null;
  afterSummary?: string | null;
  adminEmail: string;
  timestamp: string;
}

// ==========================================
// IN-MEMORY CACHE (60s TTL for public reads)
// ==========================================

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}
const publicCache = new Map<string, CacheEntry<unknown>>();
const PUBLIC_CACHE_TTL_MS = 60 * 1000;

function getCached<T>(key: string): T | null {
  const entry = publicCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    publicCache.delete(key);
    return null;
  }
  return entry.data as T;
}

function setCached<T>(key: string, data: T): void {
  publicCache.set(key, {
    data,
    expiresAt: Date.now() + PUBLIC_CACHE_TTL_MS,
  });
}

export function invalidatePublicCache(): void {
  publicCache.clear();
}

/**
 * Executes a Firestore promise with a 3-second timeout fallback
 */
async function withTimeout<T>(promise: Promise<T>, timeoutMs = 3000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Firestore read timeout")), timeoutMs),
    ),
  ]);
}

// ==========================================
// PUBLIC SERVER FUNCTIONS (Cached & Merged)
// ==========================================

export const getPublicSiteData = createServerFn({ method: "GET" }).handler(
  async (): Promise<{
    site: SiteConfig;
    donation: DonationSettings;
    home: HomeSettings;
    announcement: SiteSettings["announcement"];
  }> => {
    const cached = getCached<{
      site: SiteConfig;
      donation: DonationSettings;
      home: HomeSettings;
      announcement: SiteSettings["announcement"];
    }>("public_site_data");
    if (cached) return cached;

    // Default fallback values
    let mergedSite: SiteConfig = { ...siteConfig };
    let mergedDonation: DonationSettings = {
      bankName: siteConfig.bankName,
      accountName: siteConfig.bankAccountName,
      accountNumber: siteConfig.bankAccountNumber,
      suggestedAmounts: [5000, 15000, 35000, 75000, 150000],
    };
    let mergedHome: HomeSettings = {
      heroHeadline: undefined,
      heroSubline: undefined,
      headlineStats: [
        { value: "10,000+", label: "Total Lives Touched", asOf: "June 2026" },
        { value: "5,200", label: "Households Supported", asOf: "April 2026" },
        { value: "14", label: "Clean Water Points Restored", asOf: "February 2026" },
        { value: "640", label: "Children Retained in School", asOf: "January 2026" },
      ],
    };
    let announcement: SiteSettings["announcement"] = {
      enabled: false,
      text: "",
    };

    try {
      const db = await getAdminFirestore();
      const [siteDoc, donationDoc, homeDoc] = await withTimeout(
        Promise.all([
          db.doc("settings/site").get(),
          db.doc("settings/donation").get(),
          db.doc("settings/home").get(),
        ]),
      );

      if (siteDoc.exists) {
        const d = siteDoc.data() as Partial<SiteSettings>;
        if (d.phone) {
          mergedSite.phone = d.phone;
          mergedSite.phoneClean = d.phone.replace(/[^\d+]/g, "");
        }
        if (d.email) mergedSite.email = d.email;
        if (d.address) mergedSite.address = d.address;
        if (d.officeHours) mergedSite.officeHours = d.officeHours;
        if (d.socials) mergedSite.socials = { ...mergedSite.socials, ...d.socials };
        if (d.announcement) announcement = d.announcement;
      }

      if (donationDoc.exists) {
        const d = donationDoc.data() as Partial<DonationSettings>;
        mergedDonation = {
          bankName: d.bankName || undefined,
          accountName: d.accountName || undefined,
          accountNumber: d.accountNumber || undefined,
          accountType: d.accountType || undefined,
          extraNote: d.extraNote || undefined,
          suggestedAmounts:
            d.suggestedAmounts && d.suggestedAmounts.length > 0
              ? d.suggestedAmounts
              : [5000, 15000, 35000, 75000, 150000],
          updatedAt: d.updatedAt,
        };
        // Also update siteConfig bank fields if set
        if (mergedDonation.bankName) mergedSite.bankName = mergedDonation.bankName;
        if (mergedDonation.accountName) mergedSite.bankAccountName = mergedDonation.accountName;
        if (mergedDonation.accountNumber) mergedSite.bankAccountNumber = mergedDonation.accountNumber;
      }

      if (homeDoc.exists) {
        const d = homeDoc.data() as Partial<HomeSettings>;
        if (d.heroHeadline) mergedHome.heroHeadline = d.heroHeadline;
        if (d.heroSubline) mergedHome.heroSubline = d.heroSubline;
        if (d.headlineStats && d.headlineStats.length > 0) mergedHome.headlineStats = d.headlineStats;
      }
    } catch (err) {
      console.warn("Public site data Firestore load skipped (using built-in defaults):", err instanceof Error ? err.message : String(err));
    }

    const result = {
      site: mergedSite,
      donation: mergedDonation,
      home: mergedHome,
      announcement,
    };
    setCached("public_site_data", result);
    return result;
  },
);

export const getPublicOutreachList = createServerFn({ method: "GET" }).handler(
  async (): Promise<OutreachItem[]> => {
    const cached = getCached<OutreachItem[]>("public_outreach_list");
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      const snapshot = await withTimeout(
        db.collection("outreach")
          .where("status", "==", "published")
          .orderBy("date", "desc")
          .get(),
      );

      const items: OutreachItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as OutreachItem;
        items.push({ ...data, id: doc.id });
      });

      setCached("public_outreach_list", items);
      return items;
    } catch (err) {
      console.warn("Public outreach Firestore load failed (returning empty fallback):", err instanceof Error ? err.message : String(err));
      return [];
    }
  },
);

export const getPublicOutreachBySlug = createServerFn({ method: "GET" })
  .validator((data: unknown) => z.object({ slug: z.string() }).parse(data))
  .handler(async ({ data }): Promise<OutreachItem | null> => {
    const cacheKey = `public_outreach_${data.slug}`;
    const cached = getCached<OutreachItem>(cacheKey);
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      const snapshot = await withTimeout(
        db.collection("outreach")
          .where("slug", "==", data.slug)
          .where("status", "==", "published")
          .limit(1)
          .get(),
      );

      if (snapshot.empty) return null;
      const doc = snapshot.docs[0];
      const item = { ...(doc.data() as OutreachItem), id: doc.id };
      setCached(cacheKey, item);
      return item;
    } catch (err) {
      console.warn(`Public outreach item (${data.slug}) load failed:`, err instanceof Error ? err.message : String(err));
      return null;
    }
  });

export const getPublicTeamList = createServerFn({ method: "GET" }).handler(
  async (): Promise<TeamMember[]> => {
    const cached = getCached<TeamMember[]>("public_team_list");
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      const snapshot = await withTimeout(
        db.collection("team")
          .where("status", "==", "published")
          .orderBy("order", "asc")
          .get(),
      );

      if (!snapshot.empty) {
        const items: TeamMember[] = [];
        snapshot.forEach((doc) => {
          const d = doc.data() as TeamItem;
          items.push({
            id: doc.id,
            name: d.name,
            role: d.role,
            department: d.department,
            bio: d.bio,
            initials: d.name
              .split(" ")
              .map((n) => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("")
              .toUpperCase(),
            photo: d.photo?.url,
            isFounder: d.isFounder,
          });
        });

        if (items.length > 0) {
          setCached("public_team_list", items);
          return items;
        }
      }
    } catch (err) {
      console.warn("Public team Firestore load fallback to built-ins:", err instanceof Error ? err.message : String(err));
    }

    setCached("public_team_list", teamMembers);
    return teamMembers;
  },
);

export const getPublicStories = createServerFn({ method: "GET" }).handler(
  async (): Promise<ImpactStory[]> => {
    const cached = getCached<ImpactStory[]>("public_stories_list");
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      const snapshot = await withTimeout(
        db.collection("stories")
          .where("status", "==", "published")
          .orderBy("order", "asc")
          .get(),
      );

      if (!snapshot.empty) {
        const items: ImpactStory[] = [];
        snapshot.forEach((doc) => {
          const d = doc.data() as StoryItem;
          items.push({
            id: doc.id,
            title: d.title,
            beneficiary: d.beneficiary,
            location: d.location,
            program: d.program,
            programSlug: d.programSlug,
            summary: d.summary,
            quote: d.quote,
            outcomes: d.outcomes || [],
            asOf: d.asOf,
          });
        });
        if (items.length > 0) {
          setCached("public_stories_list", items);
          return items;
        }
      }
    } catch (err) {
      console.warn("Public stories fallback:", err instanceof Error ? err.message : String(err));
    }

    setCached("public_stories_list", impactContent.stories);
    return impactContent.stories;
  },
);

export const getPublicFaqs = createServerFn({ method: "GET" })
  .validator((data: unknown) => z.object({ programSlug: z.string().optional() }).parse(data))
  .handler(async ({ data }): Promise<FaqItem[]> => {
    const cacheKey = `public_faqs_${data.programSlug || "all"}`;
    const cached = getCached<FaqItem[]>(cacheKey);
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      let query = db.collection("faqs").where("status", "==", "published");
      if (data.programSlug) {
        query = query.where("programSlug", "in", [data.programSlug, "general"]);
      }
      const snapshot = await withTimeout(query.orderBy("order", "asc").get());
      const items: FaqItem[] = [];
      snapshot.forEach((doc) => {
        items.push({ ...(doc.data() as FaqItem), id: doc.id });
      });
      setCached(cacheKey, items);
      return items;
    } catch (err) {
      console.warn("Public FAQs load error:", err instanceof Error ? err.message : String(err));
      return [];
    }
  });

export const getPublicGallery = createServerFn({ method: "GET" })
  .validator((data: unknown) => z.object({ programSlug: z.string().optional() }).parse(data))
  .handler(async ({ data }): Promise<GalleryItem[]> => {
    const cacheKey = `public_gallery_${data.programSlug || "all"}`;
    const cached = getCached<GalleryItem[]>(cacheKey);
    if (cached) return cached;

    try {
      const db = await getAdminFirestore();
      let query = db.collection("gallery").where("status", "==", "published");
      if (data.programSlug) {
        query = query.where("programSlug", "==", data.programSlug);
      }
      const snapshot = await withTimeout(query.orderBy("order", "asc").get());
      const items: GalleryItem[] = [];
      snapshot.forEach((doc) => {
        items.push({ ...(doc.data() as GalleryItem), id: doc.id });
      });
      setCached(cacheKey, items);
      return items;
    } catch (err) {
      console.warn("Public gallery load error:", err instanceof Error ? err.message : String(err));
      return [];
    }
  });

// ==========================================
// ADMIN SERVER FUNCTIONS (Protected by requireAdmin)
// ==========================================

export const getAdminOverviewData = createServerFn({ method: "GET" }).handler(
  async () => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();

    const [outreachSnap, teamSnap, messagesSnap, auditSnap] = await Promise.all([
      db.collection("outreach").get(),
      db.collection("team").get(),
      db.collection("messages").get(),
      db.collection("auditLog").orderBy("timestamp", "desc").limit(5).get(),
    ]);

    let unreadMessages = 0;
    messagesSnap.forEach((doc) => {
      const d = doc.data();
      if (!d.read && !d.archived) unreadMessages++;
    });

    let publishedOutreach = 0;
    let draftOutreach = 0;
    outreachSnap.forEach((doc) => {
      const d = doc.data();
      if (d.status === "published") publishedOutreach++;
      if (d.status === "draft") draftOutreach++;
    });

    const recentAudits: AuditLogEntry[] = [];
    auditSnap.forEach((doc) => {
      recentAudits.push({ ...(doc.data() as AuditLogEntry), id: doc.id });
    });

    return {
      adminEmail: admin.email,
      totalOutreach: outreachSnap.size,
      publishedOutreach,
      draftOutreach,
      totalTeam: teamSnap.size,
      totalMessages: messagesSnap.size,
      unreadMessages,
      recentAudits,
    };
  },
);

// ------------------------------------------
// Outreach CRUD
// ------------------------------------------

export const getAdminOutreachList = createServerFn({ method: "GET" }).handler(
  async (): Promise<OutreachItem[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("outreach").orderBy("createdAt", "desc").get();
    const list: OutreachItem[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as OutreachItem), id: doc.id }));
    return list;
  },
);

export const saveAdminOutreach = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string().optional(),
        slug: z.string().trim().min(2).max(100),
        title: z.string().trim().min(3).max(150),
        date: z.string().trim().min(4).max(50),
        location: z.string().trim().min(2).max(100),
        summary: z.string().trim().min(10).max(500),
        body: z.string().trim().min(10).max(20000),
        program: z.string().trim().min(2).max(50),
        status: z.enum(["draft", "published", "archived"]),
        images: z.array(
          z.object({
            url: z.string().url("Must be a valid URL"),
            alt: z.string().trim().min(2, "Alt text is required"),
            caption: z.string().trim().max(300).optional(),
          }),
        ),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; id: string }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    let docId = data.id;
    const isNew = !docId;
    const docRef = docId ? db.collection("outreach").doc(docId) : db.collection("outreach").doc();
    docId = docRef.id;

    const outreachPayload = {
      slug: data.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
      title: data.title,
      date: data.date,
      location: data.location,
      summary: data.summary,
      body: data.body,
      program: data.program,
      status: data.status,
      images: data.images,
      updatedAt: now,
      updatedBy: admin.email,
      ...(isNew ? { createdAt: now } : {}),
    };

    await docRef.set(outreachPayload, { merge: true });

    // Write audit
    await db.collection("auditLog").add({
      action: isNew ? "outreach_create" : "outreach_update",
      target: `outreach/${data.slug}`,
      beforeSummary: null,
      afterSummary: `${data.title} (${data.status})`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true, id: docId };
  });

export const deleteAdminOutreach = createServerFn({ method: "POST" })
  .validator((data: unknown) => z.object({ id: z.string(), confirmedTitle: z.string() }).parse(data))
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();

    const docRef = db.collection("outreach").doc(data.id);
    const doc = await docRef.get();
    if (!doc.exists) throw new Error("Item not found");

    const item = doc.data() as OutreachItem;
    if (item.status !== "archived") {
      throw new Error("Permanent deletion is only allowed for archived items.");
    }
    if (item.title.trim() !== data.confirmedTitle.trim()) {
      throw new Error("Confirmation title does not match.");
    }

    await docRef.delete();

    await db.collection("auditLog").add({
      action: "outreach_delete",
      target: `outreach/${item.slug}`,
      beforeSummary: item.title,
      afterSummary: "Permanently deleted",
      adminEmail: admin.email,
      timestamp: new Date().toISOString(),
    });

    invalidatePublicCache();
    return { success: true };
  });

// ------------------------------------------
// Team CRUD
// ------------------------------------------

export const getAdminTeamList = createServerFn({ method: "GET" }).handler(
  async (): Promise<TeamItem[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("team").orderBy("order", "asc").get();
    const list: TeamItem[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as TeamItem), id: doc.id }));
    return list;
  },
);

export const saveAdminTeamMember = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string().optional(),
        name: z.string().trim().min(2).max(100),
        role: z.string().trim().min(2).max(100),
        department: z.string().trim().min(2).max(100),
        bio: z.string().trim().min(10).max(1000),
        order: z.number().int().min(0),
        status: z.enum(["draft", "published", "archived"]),
        isFounder: z.boolean().optional(),
        photo: z
          .object({
            url: z.string().url(),
            alt: z.string().trim().min(2),
          })
          .optional(),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; id: string }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    let docId = data.id;
    const isNew = !docId;
    const docRef = docId ? db.collection("team").doc(docId) : db.collection("team").doc();
    docId = docRef.id;

    const payload = {
      name: data.name,
      role: data.role,
      department: data.department,
      bio: data.bio,
      order: data.order,
      status: data.status,
      isFounder: Boolean(data.isFounder),
      photo: data.photo || null,
      updatedAt: now,
      updatedBy: admin.email,
      ...(isNew ? { createdAt: now } : {}),
    };

    await docRef.set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: isNew ? "team_create" : "team_update",
      target: `team/${data.name}`,
      beforeSummary: null,
      afterSummary: `${data.name} - ${data.role} (${data.status})`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true, id: docId };
  });

export const reorderAdminTeam = createServerFn({ method: "POST" })
  .validator((data: unknown) => z.object({ items: z.array(z.object({ id: z.string(), order: z.number() })) }).parse(data))
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const batch = db.batch();

    data.items.forEach(({ id, order }) => {
      batch.update(db.collection("team").doc(id), { order, updatedAt: new Date().toISOString() });
    });

    await batch.commit();

    await db.collection("auditLog").add({
      action: "team_reorder",
      target: "team",
      beforeSummary: null,
      afterSummary: `Reordered ${data.items.length} team members`,
      adminEmail: admin.email,
      timestamp: new Date().toISOString(),
    });

    invalidatePublicCache();
    return { success: true };
  });

// ------------------------------------------
// Donation Settings (with Confirmation & Resend Alert)
// ------------------------------------------

export const getAdminDonationSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<DonationSettings> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const doc = await db.doc("settings/donation").get();
    if (!doc.exists) {
      return {
        bankName: siteConfig.bankName,
        accountName: siteConfig.bankAccountName,
        accountNumber: siteConfig.bankAccountNumber,
        suggestedAmounts: [5000, 15000, 35000, 75000, 150000],
      };
    }
    return doc.data() as DonationSettings;
  },
);

export const saveAdminDonationSettings = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        bankName: z.string().trim().max(100).optional().or(z.literal("")),
        accountName: z.string().trim().max(100).optional().or(z.literal("")),
        accountNumber: z
          .string()
          .trim()
          .regex(/^[\d\s]*$/, "Account number must contain digits only")
          .max(30)
          .optional()
          .or(z.literal("")),
        accountType: z.string().trim().max(100).optional().or(z.literal("")),
        extraNote: z.string().trim().max(500).optional().or(z.literal("")),
        suggestedAmounts: z.array(z.number().positive()).min(1).max(10),
        confirmedAccountNumber: z.string().trim().optional(),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    const cleanNum = data.accountNumber?.replace(/\s+/g, "") || "";
    const cleanConfirmed = data.confirmedAccountNumber?.replace(/\s+/g, "") || "";

    if (cleanNum && cleanNum !== cleanConfirmed) {
      throw new Error("Confirmation account number does not match.");
    }

    // Get previous value for audit log
    const prevDoc = await db.doc("settings/donation").get();
    const prevData = prevDoc.data() as Partial<DonationSettings> | undefined;
    const oldMasked = maskAccountNumber(prevData?.accountNumber);
    const newMasked = maskAccountNumber(cleanNum);

    const payload: DonationSettings = {
      bankName: data.bankName || "",
      accountName: data.accountName || "",
      accountNumber: cleanNum,
      accountType: data.accountType || "",
      extraNote: data.extraNote || "",
      suggestedAmounts: data.suggestedAmounts,
      updatedAt: now,
      updatedBy: admin.email,
    };

    await db.doc("settings/donation").set(payload, { merge: true });

    // Write audit log with MASKED account numbers ONLY
    await db.collection("auditLog").add({
      action: "donation_settings_update",
      target: "settings/donation",
      beforeSummary: `Account: ${oldMasked}, Bank: ${prevData?.bankName || "None"}`,
      afterSummary: `Account: ${newMasked}, Bank: ${data.bankName || "None"}`,
      adminEmail: admin.email,
      timestamp: now,
    });

    // Send security alert email to all ADMIN_EMAILS via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const adminEmails = getAllowedAdminEmails();
    if (apiKey && adminEmails.length > 0) {
      try {
        const resendPkg = "resend";
        const { Resend } = await import(/* @vite-ignore */ resendPkg);
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "Envo Peace Security <onboarding@resend.dev>",
          to: adminEmails,
          subject: "[SECURITY ALERT] Foundation Donation Bank Details Modified",
          text: [
            "ATTENTION: Envo Peace Foundation Bank Details were modified.",
            "",
            `Modified By: ${admin.email}`,
            `Timestamp: ${now}`,
            `Bank Name: ${data.bankName || "None"}`,
            `Account Name: ${data.accountName || "None"}`,
            `Account Number: ${newMasked} (Previous: ${oldMasked})`,
            "",
            "If this was not authorized by your leadership team, please sign into the dashboard immediately to investigate.",
          ].join("\n"),
        });
      } catch (mailErr) {
        console.error("Failed to dispatch bank change security alert email:", mailErr);
      }
    }

    invalidatePublicCache();
    return { success: true };
  });

// ------------------------------------------
// Site Settings CRUD
// ------------------------------------------

export const getAdminSiteSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteSettings> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const doc = await db.doc("settings/site").get();
    if (!doc.exists) {
      return {
        phone: siteConfig.phone,
        email: siteConfig.email,
        address: siteConfig.address,
        officeHours: siteConfig.officeHours,
        socials: { ...siteConfig.socials },
        announcement: { enabled: false, text: "" },
      };
    }
    return doc.data() as SiteSettings;
  },
);

export const saveAdminSiteSettings = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        phone: z.string().trim().min(5).max(40),
        email: z.string().trim().email().max(100),
        address: z.string().trim().min(5).max(200),
        officeHours: z.string().trim().max(150),
        socials: z.object({
          facebook: z.string().trim().optional().or(z.literal("")),
          x: z.string().trim().optional().or(z.literal("")),
          instagram: z.string().trim().optional().or(z.literal("")),
          linkedin: z.string().trim().optional().or(z.literal("")),
          youtube: z.string().trim().optional().or(z.literal("")),
        }),
        announcement: z.object({
          enabled: z.boolean(),
          text: z.string().trim().max(300),
          linkLabel: z.string().trim().max(60).optional().or(z.literal("")),
          linkUrl: z.string().trim().max(300).optional().or(z.literal("")),
        }),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    const payload = {
      ...data,
      updatedAt: now,
      updatedBy: admin.email,
    };

    await db.doc("settings/site").set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: "site_settings_update",
      target: "settings/site",
      beforeSummary: null,
      afterSummary: `Updated contact/socials. Announcement: ${data.announcement.enabled ? "ON" : "OFF"}`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true };
  });

// ------------------------------------------
// Home Settings CRUD
// ------------------------------------------

export const getAdminHomeSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<HomeSettings> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const doc = await db.doc("settings/home").get();
    if (!doc.exists) {
      return {
        heroHeadline: "",
        heroSubline: "",
        headlineStats: [
          { value: "10,000+", label: "Total Lives Touched", asOf: "June 2026" },
          { value: "5,200", label: "Households Supported", asOf: "April 2026" },
          { value: "14", label: "Clean Water Points Restored", asOf: "February 2026" },
          { value: "640", label: "Children Retained in School", asOf: "January 2026" },
        ],
      };
    }
    return doc.data() as HomeSettings;
  },
);

export const saveAdminHomeSettings = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        heroHeadline: z.string().trim().max(200).optional().or(z.literal("")),
        heroSubline: z.string().trim().max(400).optional().or(z.literal("")),
        headlineStats: z.array(
          z.object({
            value: z.string().trim().min(1).max(30),
            label: z.string().trim().min(1).max(60),
            asOf: z.string().trim().min(1).max(40),
          }),
        ),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    const payload = {
      ...data,
      updatedAt: now,
      updatedBy: admin.email,
    };

    await db.doc("settings/home").set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: "home_settings_update",
      target: "settings/home",
      beforeSummary: null,
      afterSummary: `Hero headline updated. ${data.headlineStats.length} stats configured.`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true };
  });

// ------------------------------------------
// Stories, FAQs, Gallery CRUD
// ------------------------------------------

export const getAdminStoriesList = createServerFn({ method: "GET" }).handler(
  async (): Promise<StoryItem[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("stories").orderBy("order", "asc").get();
    const list: StoryItem[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as StoryItem), id: doc.id }));
    return list;
  },
);

export const saveAdminStory = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string().optional(),
        title: z.string().trim().min(3).max(150),
        beneficiary: z.string().trim().min(2).max(100),
        location: z.string().trim().min(2).max(100),
        program: z.string().trim().min(2).max(100),
        programSlug: z.string().trim().min(2).max(50),
        summary: z.string().trim().min(10).max(600),
        quote: z.string().trim().min(5).max(600),
        outcomes: z.array(z.string().trim().min(1).max(200)),
        asOf: z.string().trim().min(2).max(50),
        order: z.number().int().min(0),
        status: z.enum(["draft", "published", "archived"]),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; id: string }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    let docId = data.id;
    const isNew = !docId;
    const docRef = docId ? db.collection("stories").doc(docId) : db.collection("stories").doc();
    docId = docRef.id;

    const payload = {
      ...data,
      updatedAt: now,
      updatedBy: admin.email,
      ...(isNew ? { createdAt: now } : {}),
    };

    await docRef.set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: isNew ? "story_create" : "story_update",
      target: `stories/${data.title}`,
      beforeSummary: null,
      afterSummary: `${data.title} (${data.status})`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true, id: docId };
  });

export const getAdminFaqsList = createServerFn({ method: "GET" }).handler(
  async (): Promise<FaqItem[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("faqs").orderBy("order", "asc").get();
    const list: FaqItem[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as FaqItem), id: doc.id }));
    return list;
  },
);

export const saveAdminFaq = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string().optional(),
        question: z.string().trim().min(5).max(300),
        answer: z.string().trim().min(5).max(2000),
        programSlug: z.string().trim().min(2).max(50),
        order: z.number().int().min(0),
        status: z.enum(["draft", "published", "archived"]),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; id: string }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    let docId = data.id;
    const isNew = !docId;
    const docRef = docId ? db.collection("faqs").doc(docId) : db.collection("faqs").doc();
    docId = docRef.id;

    const payload = {
      ...data,
      updatedAt: now,
      updatedBy: admin.email,
      ...(isNew ? { createdAt: now } : {}),
    };

    await docRef.set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: isNew ? "faq_create" : "faq_update",
      target: `faqs/${docId}`,
      beforeSummary: null,
      afterSummary: `${data.question.slice(0, 50)}... (${data.status})`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true, id: docId };
  });

export const getAdminGalleryList = createServerFn({ method: "GET" }).handler(
  async (): Promise<GalleryItem[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("gallery").orderBy("order", "asc").get();
    const list: GalleryItem[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as GalleryItem), id: doc.id }));
    return list;
  },
);

export const saveAdminGalleryItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string().optional(),
        src: z.string().url("Must be a valid URL"),
        alt: z.string().trim().min(2, "Alt text is required"),
        caption: z.string().trim().max(300).optional().or(z.literal("")),
        programSlug: z.string().trim().min(2).max(50),
        order: z.number().int().min(0),
        status: z.enum(["draft", "published", "archived"]),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; id: string }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();
    const now = new Date().toISOString();

    let docId = data.id;
    const isNew = !docId;
    const docRef = docId ? db.collection("gallery").doc(docId) : db.collection("gallery").doc();
    docId = docRef.id;

    const payload = {
      ...data,
      updatedAt: now,
      updatedBy: admin.email,
      ...(isNew ? { createdAt: now } : {}),
    };

    await docRef.set(payload, { merge: true });

    await db.collection("auditLog").add({
      action: isNew ? "gallery_create" : "gallery_update",
      target: `gallery/${docId}`,
      beforeSummary: null,
      afterSummary: `${data.alt} (${data.status})`,
      adminEmail: admin.email,
      timestamp: now,
    });

    invalidatePublicCache();
    return { success: true, id: docId };
  });

// ------------------------------------------
// Inbox Messages CRUD
// ------------------------------------------

export const getAdminMessages = createServerFn({ method: "GET" }).handler(
  async (): Promise<InboxMessage[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("messages").orderBy("createdAt", "desc").limit(200).get();
    const list: InboxMessage[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as InboxMessage), id: doc.id }));
    return list;
  },
);

export const updateAdminMessageStatus = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        id: z.string(),
        read: z.boolean().optional(),
        archived: z.boolean().optional(),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    const admin = await requireAdmin();
    const db = await getAdminFirestore();

    const updatePayload: Record<string, unknown> = {};
    if (data.read !== undefined) updatePayload.read = data.read;
    if (data.archived !== undefined) updatePayload.archived = data.archived;

    await db.collection("messages").doc(data.id).update(updatePayload);

    await db.collection("auditLog").add({
      action: "message_status_update",
      target: `messages/${data.id}`,
      beforeSummary: null,
      afterSummary: JSON.stringify(updatePayload),
      adminEmail: admin.email,
      timestamp: new Date().toISOString(),
    });

    return { success: true };
  });

// ------------------------------------------
// Audit Log
// ------------------------------------------

export const getAdminAuditLogs = createServerFn({ method: "GET" }).handler(
  async (): Promise<AuditLogEntry[]> => {
    await requireAdmin();
    const db = await getAdminFirestore();
    const snap = await db.collection("auditLog").orderBy("timestamp", "desc").limit(100).get();
    const list: AuditLogEntry[] = [];
    snap.forEach((doc) => list.push({ ...(doc.data() as AuditLogEntry), id: doc.id }));
    return list;
  },
);

// ------------------------------------------
// Image Uploads via Firebase Admin Storage
// ------------------------------------------

export const uploadAdminImage = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        base64Data: z.string().min(10),
        contentType: z.enum(["image/jpeg", "image/png", "image/webp"]),
        alt: z.string().trim().min(2, "Alt text is required for accessibility"),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; url: string }> => {
    const admin = await requireAdmin();

    // Check size (< 5MB)
    const buffer = Buffer.from(data.base64Data, "base64");
    if (buffer.length > 5 * 1024 * 1024) {
      throw new Error("File size exceeds 5MB limit");
    }

    const year = new Date().getFullYear();
    const fileUuid = globalThis.crypto.randomUUID();
    const filePath = `uploads/${year}/${fileUuid}.webp`;

    try {
      const bucket = await getAdminStorageBucket();
      const file = bucket.file(filePath);

      await file.save(buffer, {
        metadata: {
          contentType: data.contentType,
          metadata: {
            uploadedBy: admin.email,
            alt: data.alt,
          },
        },
        public: true,
      });

      // Try publicUrl or construct standard Firebase Storage URL
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;

      const db = await getAdminFirestore();
      await db.collection("auditLog").add({
        action: "image_upload",
        target: filePath,
        beforeSummary: null,
        afterSummary: `Uploaded ${filePath} (${(buffer.length / 1024).toFixed(1)} KB)`,
        adminEmail: admin.email,
        timestamp: new Date().toISOString(),
      });

      return { success: true, url: publicUrl };
    } catch (err: unknown) {
      console.error("Storage upload failed:", err);
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`Storage upload failed: ${msg}. You may paste an image URL instead.`);
    }
  });
