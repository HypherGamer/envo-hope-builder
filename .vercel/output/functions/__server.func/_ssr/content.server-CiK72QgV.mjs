import { c as createServerRpc, g as getAdminFirestore, a as getAdminStorageBucket } from "./firebase-admin.server-DIx8P1Z3.mjs";
import { c as createServerFn } from "./server-D7pJ5bR7.mjs";
import { r as requireAdmin, g as getAllowedAdminEmails } from "./admin-session.server-RIfjfGk-.mjs";
import { s as siteConfig, f as founderPhoto, m as maskAccountNumber } from "./about-founder-CCLG_U39.mjs";
import { i as impactContent } from "./impact-Fu0HKVci.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, a as arrayType, e as enumType, b as booleanType, n as numberType, l as literalType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const teamMembers = [
  {
    id: "founder",
    name: "Alh Nasir Ernest Nwagwu Nwaze (PhD)",
    role: "Founder & Chairman of the Board",
    department: "Executive Leadership",
    bio: "A scholar and civic development advocate dedicated to grassroots transformation across Southeastern Nigeria. He established Envo Peace to bring practical relief, peacebuilding, and economic pathways to rural communities.",
    initials: "NN",
    photo: founderPhoto,
    isFounder: true
  },
  {
    id: "director-ops",
    name: "Chiamaka Eze",
    role: "Director of Programs & Operations",
    department: "Program Management",
    bio: "An experienced community development practitioner with over a decade of fieldwork in rural humanitarian logistics. She oversees community outreach scheduling, field safety, and inter-agency coordination across all five program pillars.",
    initials: "CE",
    dummy: true
  },
  {
    id: "head-education",
    name: "Emeka Okoro",
    role: "Head of Educational Initiatives",
    department: "Education & Youth",
    bio: "A veteran educator and former secondary school administrator passionate about literacy access in farming settlements. He leads school partnerships, scholarship disbursements, and after-school reading programs throughout Ebonyi State.",
    initials: "EO",
    dummy: true
  },
  {
    id: "health-coordinator",
    name: "Dr. Nkemdilim Chukwu",
    role: "Medical Outreach Coordinator",
    department: "Healthcare Services",
    bio: "A public health physician focused on primary healthcare access in hard-to-reach rural communities. She coordinates volunteer clinical officers, pharmaceutical distribution, and maternal health education missions.",
    initials: "NC",
    dummy: true
  },
  {
    id: "community-liaison",
    name: "Ifeanyi Nweke",
    role: "Community Liaison & Peace Officer",
    department: "Peace & Governance",
    bio: "A grassroots mediator skilled in traditional dispute resolution and communal consensus building. He works directly with council elders, youth associations, and agrarian unions to foster lasting local reconciliation.",
    initials: "IN",
    dummy: true
  },
  {
    id: "finance-officer",
    name: "Grace Ogbonna",
    role: "Finance & Compliance Officer",
    department: "Finance & Administration",
    bio: "A certified accountant managing project disbursements, supplier verifications, and financial transparency reporting. She ensures rigorous accountability across all donor contributions and vendor agreements.",
    initials: "GO",
    dummy: true
  }
];
const publicCache = /* @__PURE__ */ new Map();
const PUBLIC_CACHE_TTL_MS = 60 * 1e3;
function getCached(key) {
  const entry = publicCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    publicCache.delete(key);
    return null;
  }
  return entry.data;
}
function setCached(key, data) {
  publicCache.set(key, {
    data,
    expiresAt: Date.now() + PUBLIC_CACHE_TTL_MS
  });
}
function invalidatePublicCache() {
  publicCache.clear();
}
async function withTimeout(promise, timeoutMs = 3e3) {
  return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error("Firestore read timeout")), timeoutMs))]);
}
const getPublicSiteData_createServerFn_handler = createServerRpc({
  id: "53debb3c179e17d3d7ec355deb5600811f64f946db098a077c5579068e6878cc",
  name: "getPublicSiteData",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicSiteData.__executeServer(opts));
const getPublicSiteData = createServerFn({
  method: "GET"
}).handler(getPublicSiteData_createServerFn_handler, async () => {
  const cached = getCached("public_site_data");
  if (cached) return cached;
  let mergedSite = {
    ...siteConfig
  };
  let mergedDonation = {
    bankName: siteConfig.bankName,
    accountName: siteConfig.bankAccountName,
    accountNumber: siteConfig.bankAccountNumber,
    suggestedAmounts: [5e3, 15e3, 35e3, 75e3, 15e4]
  };
  let mergedHome = {
    heroHeadline: void 0,
    heroSubline: void 0,
    headlineStats: [{
      value: "10,000+",
      label: "Total Lives Touched",
      asOf: "June 2026"
    }, {
      value: "5,200",
      label: "Households Supported",
      asOf: "April 2026"
    }, {
      value: "14",
      label: "Clean Water Points Restored",
      asOf: "February 2026"
    }, {
      value: "640",
      label: "Children Retained in School",
      asOf: "January 2026"
    }]
  };
  let announcement = {
    enabled: false,
    text: ""
  };
  try {
    const db = await getAdminFirestore();
    const [siteDoc, donationDoc, homeDoc] = await withTimeout(Promise.all([db.doc("settings/site").get(), db.doc("settings/donation").get(), db.doc("settings/home").get()]));
    if (siteDoc.exists) {
      const d = siteDoc.data();
      if (d.phone) {
        mergedSite.phone = d.phone;
        mergedSite.phoneClean = d.phone.replace(/[^\d+]/g, "");
      }
      if (d.email) mergedSite.email = d.email;
      if (d.address) mergedSite.address = d.address;
      if (d.officeHours) mergedSite.officeHours = d.officeHours;
      if (d.socials) mergedSite.socials = {
        ...mergedSite.socials,
        ...d.socials
      };
      if (d.announcement) announcement = d.announcement;
    }
    if (donationDoc.exists) {
      const d = donationDoc.data();
      mergedDonation = {
        bankName: d.bankName || void 0,
        accountName: d.accountName || void 0,
        accountNumber: d.accountNumber || void 0,
        accountType: d.accountType || void 0,
        extraNote: d.extraNote || void 0,
        suggestedAmounts: d.suggestedAmounts && d.suggestedAmounts.length > 0 ? d.suggestedAmounts : [5e3, 15e3, 35e3, 75e3, 15e4],
        updatedAt: d.updatedAt
      };
      if (mergedDonation.bankName) mergedSite.bankName = mergedDonation.bankName;
      if (mergedDonation.accountName) mergedSite.bankAccountName = mergedDonation.accountName;
      if (mergedDonation.accountNumber) mergedSite.bankAccountNumber = mergedDonation.accountNumber;
    }
    if (homeDoc.exists) {
      const d = homeDoc.data();
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
    announcement
  };
  setCached("public_site_data", result);
  return result;
});
const getPublicOutreachList_createServerFn_handler = createServerRpc({
  id: "a7993a4f8bc9d0af5c3948678e2872c24c621cfeff1979460f5a14904e15a071",
  name: "getPublicOutreachList",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicOutreachList.__executeServer(opts));
const getPublicOutreachList = createServerFn({
  method: "GET"
}).handler(getPublicOutreachList_createServerFn_handler, async () => {
  const cached = getCached("public_outreach_list");
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    const snapshot = await withTimeout(db.collection("outreach").where("status", "==", "published").orderBy("date", "desc").get());
    const items = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      items.push({
        ...data,
        id: doc.id
      });
    });
    setCached("public_outreach_list", items);
    return items;
  } catch (err) {
    console.warn("Public outreach Firestore load failed (returning empty fallback):", err instanceof Error ? err.message : String(err));
    setCached("public_outreach_list", []);
    return [];
  }
});
const getPublicOutreachBySlug_createServerFn_handler = createServerRpc({
  id: "020a7c8b17ff81c3dd38883023a4505352fcbcd32b63163951ed4f113c92d8c4",
  name: "getPublicOutreachBySlug",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicOutreachBySlug.__executeServer(opts));
const getPublicOutreachBySlug = createServerFn({
  method: "GET"
}).validator((data) => objectType({
  slug: stringType()
}).parse(data)).handler(getPublicOutreachBySlug_createServerFn_handler, async ({
  data
}) => {
  const cacheKey = `public_outreach_${data.slug}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    const snapshot = await withTimeout(db.collection("outreach").where("slug", "==", data.slug).where("status", "==", "published").limit(1).get());
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    const item = {
      ...doc.data(),
      id: doc.id
    };
    setCached(cacheKey, item);
    return item;
  } catch (err) {
    console.warn(`Public outreach item (${data.slug}) load failed:`, err instanceof Error ? err.message : String(err));
    return null;
  }
});
const getPublicTeamList_createServerFn_handler = createServerRpc({
  id: "0d348caecff4fc2e7f64c73f884f587bb17ce77b836990ed531b3a60c9b854bf",
  name: "getPublicTeamList",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicTeamList.__executeServer(opts));
const getPublicTeamList = createServerFn({
  method: "GET"
}).handler(getPublicTeamList_createServerFn_handler, async () => {
  const cached = getCached("public_team_list");
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    const snapshot = await withTimeout(db.collection("team").where("status", "==", "published").orderBy("order", "asc").get());
    if (!snapshot.empty) {
      const items = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
        items.push({
          id: doc.id,
          name: d.name,
          role: d.role,
          department: d.department,
          bio: d.bio,
          initials: d.name.split(" ").map((n) => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase(),
          photo: d.photo?.url,
          isFounder: d.isFounder
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
});
const getPublicStories_createServerFn_handler = createServerRpc({
  id: "408cc418449c4962e12a393772bc6b41d92b6944230def480c1e33a5e3337736",
  name: "getPublicStories",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicStories.__executeServer(opts));
const getPublicStories = createServerFn({
  method: "GET"
}).handler(getPublicStories_createServerFn_handler, async () => {
  const cached = getCached("public_stories_list");
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    const snapshot = await withTimeout(db.collection("stories").where("status", "==", "published").orderBy("order", "asc").get());
    if (!snapshot.empty) {
      const items = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
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
          asOf: d.asOf
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
});
const getPublicFaqs_createServerFn_handler = createServerRpc({
  id: "2864f05aea5bd290d738a774832bbe48209546b4c46aa2c65f1e1465c2bf8ca5",
  name: "getPublicFaqs",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicFaqs.__executeServer(opts));
const getPublicFaqs = createServerFn({
  method: "GET"
}).validator((data) => objectType({
  programSlug: stringType().optional()
}).parse(data)).handler(getPublicFaqs_createServerFn_handler, async ({
  data
}) => {
  const cacheKey = `public_faqs_${data.programSlug || "all"}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    let query = db.collection("faqs").where("status", "==", "published");
    if (data.programSlug) {
      query = query.where("programSlug", "in", [data.programSlug, "general"]);
    }
    const snapshot = await withTimeout(query.orderBy("order", "asc").get());
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id
      });
    });
    setCached(cacheKey, items);
    return items;
  } catch (err) {
    console.warn("Public FAQs load error:", err instanceof Error ? err.message : String(err));
    return [];
  }
});
const getPublicGallery_createServerFn_handler = createServerRpc({
  id: "c1921a5c0bed4bcd0b1ea2af6eb7a8dde58dfeffff6079619316d13c32118245",
  name: "getPublicGallery",
  filename: "src/lib/content.server.ts"
}, (opts) => getPublicGallery.__executeServer(opts));
const getPublicGallery = createServerFn({
  method: "GET"
}).validator((data) => objectType({
  programSlug: stringType().optional()
}).parse(data)).handler(getPublicGallery_createServerFn_handler, async ({
  data
}) => {
  const cacheKey = `public_gallery_${data.programSlug || "all"}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const db = await getAdminFirestore();
    let query = db.collection("gallery").where("status", "==", "published");
    if (data.programSlug) {
      query = query.where("programSlug", "==", data.programSlug);
    }
    const snapshot = await withTimeout(query.orderBy("order", "asc").get());
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id
      });
    });
    setCached(cacheKey, items);
    return items;
  } catch (err) {
    console.warn("Public gallery load error:", err instanceof Error ? err.message : String(err));
    return [];
  }
});
const getAdminOverviewData_createServerFn_handler = createServerRpc({
  id: "e5618a8626ab1376efdcec3d76cfe0a4e7e1756b1799bbf609efc9fc91d9e091",
  name: "getAdminOverviewData",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminOverviewData.__executeServer(opts));
const getAdminOverviewData = createServerFn({
  method: "GET"
}).handler(getAdminOverviewData_createServerFn_handler, async () => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const [outreachSnap, teamSnap, messagesSnap, auditSnap] = await Promise.all([db.collection("outreach").get(), db.collection("team").get(), db.collection("messages").get(), db.collection("auditLog").orderBy("timestamp", "desc").limit(5).get()]);
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
  const recentAudits = [];
  auditSnap.forEach((doc) => {
    recentAudits.push({
      ...doc.data(),
      id: doc.id
    });
  });
  return {
    adminEmail: admin.email,
    totalOutreach: outreachSnap.size,
    publishedOutreach,
    draftOutreach,
    totalTeam: teamSnap.size,
    totalMessages: messagesSnap.size,
    unreadMessages,
    recentAudits
  };
});
const getAdminOutreachList_createServerFn_handler = createServerRpc({
  id: "54034e820206593cb2295ca2e3a71ecd53061924b005a0872cdc5b42b43c9c5e",
  name: "getAdminOutreachList",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminOutreachList.__executeServer(opts));
const getAdminOutreachList = createServerFn({
  method: "GET"
}).handler(getAdminOutreachList_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("outreach").orderBy("createdAt", "desc").get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const saveAdminOutreach_createServerFn_handler = createServerRpc({
  id: "ad15cebd11ea86292039064a8adc354ca98a26144568f6bb23fb7c6a40886fb1",
  name: "saveAdminOutreach",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminOutreach.__executeServer(opts));
const saveAdminOutreach = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    slug: stringType().trim().min(2).max(100),
    title: stringType().trim().min(3).max(150),
    date: stringType().trim().min(4).max(50),
    location: stringType().trim().min(2).max(100),
    summary: stringType().trim().min(10).max(500),
    body: stringType().trim().min(10).max(2e4),
    program: stringType().trim().min(2).max(50),
    status: enumType(["draft", "published", "archived"]),
    images: arrayType(objectType({
      url: stringType().url("Must be a valid URL"),
      alt: stringType().trim().min(2, "Alt text is required"),
      caption: stringType().trim().max(300).optional()
    }))
  }).parse(data);
}).handler(saveAdminOutreach_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
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
    ...isNew ? {
      createdAt: now
    } : {}
  };
  await docRef.set(outreachPayload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: isNew ? "outreach_create" : "outreach_update",
    target: `outreach/${data.slug}`,
    beforeSummary: null,
    afterSummary: `${data.title} (${data.status})`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true,
    id: docId
  };
});
const deleteAdminOutreach_createServerFn_handler = createServerRpc({
  id: "928437b95a4c96fd29637896f5f05e4a9c1a27207c4549e5928d528d4b6ff28a",
  name: "deleteAdminOutreach",
  filename: "src/lib/content.server.ts"
}, (opts) => deleteAdminOutreach.__executeServer(opts));
const deleteAdminOutreach = createServerFn({
  method: "POST"
}).validator((data) => objectType({
  id: stringType(),
  confirmedTitle: stringType()
}).parse(data)).handler(deleteAdminOutreach_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const docRef = db.collection("outreach").doc(data.id);
  const doc = await docRef.get();
  if (!doc.exists) throw new Error("Item not found");
  const item = doc.data();
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
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  invalidatePublicCache();
  return {
    success: true
  };
});
const getAdminTeamList_createServerFn_handler = createServerRpc({
  id: "4bf068c91eb00f9e21b1626644bdddae5e57ed32fe66d3db55dca1ad7af54f88",
  name: "getAdminTeamList",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminTeamList.__executeServer(opts));
const getAdminTeamList = createServerFn({
  method: "GET"
}).handler(getAdminTeamList_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("team").orderBy("order", "asc").get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const saveAdminTeamMember_createServerFn_handler = createServerRpc({
  id: "d47378d6a66f9a69df2f35f64fa119ec9ec245c6a9891dd1c6ec6486f8ddc16a",
  name: "saveAdminTeamMember",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminTeamMember.__executeServer(opts));
const saveAdminTeamMember = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    name: stringType().trim().min(2).max(100),
    role: stringType().trim().min(2).max(100),
    department: stringType().trim().min(2).max(100),
    bio: stringType().trim().min(10).max(1e3),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"]),
    isFounder: booleanType().optional(),
    photo: objectType({
      url: stringType().url(),
      alt: stringType().trim().min(2)
    }).optional()
  }).parse(data);
}).handler(saveAdminTeamMember_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
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
    ...isNew ? {
      createdAt: now
    } : {}
  };
  await docRef.set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: isNew ? "team_create" : "team_update",
    target: `team/${data.name}`,
    beforeSummary: null,
    afterSummary: `${data.name} - ${data.role} (${data.status})`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true,
    id: docId
  };
});
const reorderAdminTeam_createServerFn_handler = createServerRpc({
  id: "7d11c4d7c521eef5130e553fc29a9fde1573e733439ae9a34726914ed981ff39",
  name: "reorderAdminTeam",
  filename: "src/lib/content.server.ts"
}, (opts) => reorderAdminTeam.__executeServer(opts));
const reorderAdminTeam = createServerFn({
  method: "POST"
}).validator((data) => objectType({
  items: arrayType(objectType({
    id: stringType(),
    order: numberType()
  }))
}).parse(data)).handler(reorderAdminTeam_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const batch = db.batch();
  data.items.forEach(({
    id,
    order
  }) => {
    batch.update(db.collection("team").doc(id), {
      order,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  await batch.commit();
  await db.collection("auditLog").add({
    action: "team_reorder",
    target: "team",
    beforeSummary: null,
    afterSummary: `Reordered ${data.items.length} team members`,
    adminEmail: admin.email,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  invalidatePublicCache();
  return {
    success: true
  };
});
const getAdminDonationSettings_createServerFn_handler = createServerRpc({
  id: "c5f880a175fe9ed4216bea905ab98c6da2dba92c06084905aed1a89f74c3bf7f",
  name: "getAdminDonationSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminDonationSettings.__executeServer(opts));
const getAdminDonationSettings = createServerFn({
  method: "GET"
}).handler(getAdminDonationSettings_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const doc = await db.doc("settings/donation").get();
  if (!doc.exists) {
    return {
      bankName: siteConfig.bankName,
      accountName: siteConfig.bankAccountName,
      accountNumber: siteConfig.bankAccountNumber,
      suggestedAmounts: [5e3, 15e3, 35e3, 75e3, 15e4]
    };
  }
  return doc.data();
});
const saveAdminDonationSettings_createServerFn_handler = createServerRpc({
  id: "f72370414a7865042386378300d6d670285f86ea0599d69e75455c12ca56afb6",
  name: "saveAdminDonationSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminDonationSettings.__executeServer(opts));
const saveAdminDonationSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    bankName: stringType().trim().max(100).optional().or(literalType("")),
    accountName: stringType().trim().max(100).optional().or(literalType("")),
    accountNumber: stringType().trim().regex(/^[\d\s]*$/, "Account number must contain digits only").max(30).optional().or(literalType("")),
    accountType: stringType().trim().max(100).optional().or(literalType("")),
    extraNote: stringType().trim().max(500).optional().or(literalType("")),
    suggestedAmounts: arrayType(numberType().positive()).min(1).max(10),
    confirmedAccountNumber: stringType().trim().optional()
  }).parse(data);
}).handler(saveAdminDonationSettings_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const cleanNum = data.accountNumber?.replace(/\s+/g, "") || "";
  const cleanConfirmed = data.confirmedAccountNumber?.replace(/\s+/g, "") || "";
  if (cleanNum && cleanNum !== cleanConfirmed) {
    throw new Error("Confirmation account number does not match.");
  }
  const prevDoc = await db.doc("settings/donation").get();
  const prevData = prevDoc.data();
  const oldMasked = maskAccountNumber(prevData?.accountNumber);
  const newMasked = maskAccountNumber(cleanNum);
  const payload = {
    bankName: data.bankName || "",
    accountName: data.accountName || "",
    accountNumber: cleanNum,
    accountType: data.accountType || "",
    extraNote: data.extraNote || "",
    suggestedAmounts: data.suggestedAmounts,
    updatedAt: now,
    updatedBy: admin.email
  };
  await db.doc("settings/donation").set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: "donation_settings_update",
    target: "settings/donation",
    beforeSummary: `Account: ${oldMasked}, Bank: ${prevData?.bankName || "None"}`,
    afterSummary: `Account: ${newMasked}, Bank: ${data.bankName || "None"}`,
    adminEmail: admin.email,
    timestamp: now
  });
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmails = getAllowedAdminEmails();
  if (apiKey && adminEmails.length > 0) {
    try {
      const resendPkg = "resend";
      const {
        Resend
      } = await import(
        /* @vite-ignore */
        resendPkg
      );
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Envo Peace Security <onboarding@resend.dev>",
        to: adminEmails,
        subject: "[SECURITY ALERT] Foundation Donation Bank Details Modified",
        text: ["ATTENTION: Envo Peace Foundation Bank Details were modified.", "", `Modified By: ${admin.email}`, `Timestamp: ${now}`, `Bank Name: ${data.bankName || "None"}`, `Account Name: ${data.accountName || "None"}`, `Account Number: ${newMasked} (Previous: ${oldMasked})`, "", "If this was not authorized by your leadership team, please sign into the dashboard immediately to investigate."].join("\n")
      });
    } catch (mailErr) {
      console.error("Failed to dispatch bank change security alert email:", mailErr);
    }
  }
  invalidatePublicCache();
  return {
    success: true
  };
});
const getAdminSiteSettings_createServerFn_handler = createServerRpc({
  id: "735f49be6538cc885c97d29198fac71ed97d34b877995a37540a8e6d33da26f7",
  name: "getAdminSiteSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminSiteSettings.__executeServer(opts));
const getAdminSiteSettings = createServerFn({
  method: "GET"
}).handler(getAdminSiteSettings_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const doc = await db.doc("settings/site").get();
  if (!doc.exists) {
    return {
      phone: siteConfig.phone,
      email: siteConfig.email,
      address: siteConfig.address,
      officeHours: siteConfig.officeHours,
      socials: {
        ...siteConfig.socials
      },
      announcement: {
        enabled: false,
        text: ""
      }
    };
  }
  return doc.data();
});
const saveAdminSiteSettings_createServerFn_handler = createServerRpc({
  id: "b3fd795c6f8baa2517a83c1558e89053d158ef9f09becb6b64467afc21816c0c",
  name: "saveAdminSiteSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminSiteSettings.__executeServer(opts));
const saveAdminSiteSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    phone: stringType().trim().min(5).max(40),
    email: stringType().trim().email().max(100),
    address: stringType().trim().min(5).max(200),
    officeHours: stringType().trim().max(150),
    socials: objectType({
      facebook: stringType().trim().optional().or(literalType("")),
      x: stringType().trim().optional().or(literalType("")),
      instagram: stringType().trim().optional().or(literalType("")),
      linkedin: stringType().trim().optional().or(literalType("")),
      youtube: stringType().trim().optional().or(literalType(""))
    }),
    announcement: objectType({
      enabled: booleanType(),
      text: stringType().trim().max(300),
      linkLabel: stringType().trim().max(60).optional().or(literalType("")),
      linkUrl: stringType().trim().max(300).optional().or(literalType(""))
    })
  }).parse(data);
}).handler(saveAdminSiteSettings_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const payload = {
    ...data,
    updatedAt: now,
    updatedBy: admin.email
  };
  await db.doc("settings/site").set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: "site_settings_update",
    target: "settings/site",
    beforeSummary: null,
    afterSummary: `Updated contact/socials. Announcement: ${data.announcement.enabled ? "ON" : "OFF"}`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true
  };
});
const getAdminHomeSettings_createServerFn_handler = createServerRpc({
  id: "3564f2be0f5570198a58868a8eb8070f82c61bbd6ca22424429fb5ce9c2de880",
  name: "getAdminHomeSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminHomeSettings.__executeServer(opts));
const getAdminHomeSettings = createServerFn({
  method: "GET"
}).handler(getAdminHomeSettings_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const doc = await db.doc("settings/home").get();
  if (!doc.exists) {
    return {
      heroHeadline: "",
      heroSubline: "",
      headlineStats: [{
        value: "10,000+",
        label: "Total Lives Touched",
        asOf: "June 2026"
      }, {
        value: "5,200",
        label: "Households Supported",
        asOf: "April 2026"
      }, {
        value: "14",
        label: "Clean Water Points Restored",
        asOf: "February 2026"
      }, {
        value: "640",
        label: "Children Retained in School",
        asOf: "January 2026"
      }]
    };
  }
  return doc.data();
});
const saveAdminHomeSettings_createServerFn_handler = createServerRpc({
  id: "856cef79a26972b8a9ff02c67d085b6bc2b560b275e7e6ff11b68289d41220d7",
  name: "saveAdminHomeSettings",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminHomeSettings.__executeServer(opts));
const saveAdminHomeSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    heroHeadline: stringType().trim().max(200).optional().or(literalType("")),
    heroSubline: stringType().trim().max(400).optional().or(literalType("")),
    headlineStats: arrayType(objectType({
      value: stringType().trim().min(1).max(30),
      label: stringType().trim().min(1).max(60),
      asOf: stringType().trim().min(1).max(40)
    }))
  }).parse(data);
}).handler(saveAdminHomeSettings_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const payload = {
    ...data,
    updatedAt: now,
    updatedBy: admin.email
  };
  await db.doc("settings/home").set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: "home_settings_update",
    target: "settings/home",
    beforeSummary: null,
    afterSummary: `Hero headline updated. ${data.headlineStats.length} stats configured.`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true
  };
});
const getAdminStoriesList_createServerFn_handler = createServerRpc({
  id: "0dcd2806c7445a504d972d3dffddbed2a9a93bd241074d08945814b20d60c778",
  name: "getAdminStoriesList",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminStoriesList.__executeServer(opts));
const getAdminStoriesList = createServerFn({
  method: "GET"
}).handler(getAdminStoriesList_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("stories").orderBy("order", "asc").get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const saveAdminStory_createServerFn_handler = createServerRpc({
  id: "855aae838d59a98b6f31ce20df20f46f97abd301a3ecd4c58b19496b49b43ead",
  name: "saveAdminStory",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminStory.__executeServer(opts));
const saveAdminStory = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    title: stringType().trim().min(3).max(150),
    beneficiary: stringType().trim().min(2).max(100),
    location: stringType().trim().min(2).max(100),
    program: stringType().trim().min(2).max(100),
    programSlug: stringType().trim().min(2).max(50),
    summary: stringType().trim().min(10).max(600),
    quote: stringType().trim().min(5).max(600),
    outcomes: arrayType(stringType().trim().min(1).max(200)),
    asOf: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(saveAdminStory_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let docId = data.id;
  const isNew = !docId;
  const docRef = docId ? db.collection("stories").doc(docId) : db.collection("stories").doc();
  docId = docRef.id;
  const payload = {
    ...data,
    updatedAt: now,
    updatedBy: admin.email,
    ...isNew ? {
      createdAt: now
    } : {}
  };
  await docRef.set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: isNew ? "story_create" : "story_update",
    target: `stories/${data.title}`,
    beforeSummary: null,
    afterSummary: `${data.title} (${data.status})`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true,
    id: docId
  };
});
const getAdminFaqsList_createServerFn_handler = createServerRpc({
  id: "cb2fb61b06e12e915e73280def3b2870441f46f199ed29fd0cc503d0dc0b5e45",
  name: "getAdminFaqsList",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminFaqsList.__executeServer(opts));
const getAdminFaqsList = createServerFn({
  method: "GET"
}).handler(getAdminFaqsList_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("faqs").orderBy("order", "asc").get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const saveAdminFaq_createServerFn_handler = createServerRpc({
  id: "7c0e03900157702dc74fb5fc5a69bf266c0d72b3db59cca375100c413b822ae2",
  name: "saveAdminFaq",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminFaq.__executeServer(opts));
const saveAdminFaq = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    question: stringType().trim().min(5).max(300),
    answer: stringType().trim().min(5).max(2e3),
    programSlug: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(saveAdminFaq_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let docId = data.id;
  const isNew = !docId;
  const docRef = docId ? db.collection("faqs").doc(docId) : db.collection("faqs").doc();
  docId = docRef.id;
  const payload = {
    ...data,
    updatedAt: now,
    updatedBy: admin.email,
    ...isNew ? {
      createdAt: now
    } : {}
  };
  await docRef.set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: isNew ? "faq_create" : "faq_update",
    target: `faqs/${docId}`,
    beforeSummary: null,
    afterSummary: `${data.question.slice(0, 50)}... (${data.status})`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true,
    id: docId
  };
});
const getAdminGalleryList_createServerFn_handler = createServerRpc({
  id: "7938a64d9b10b3819e4c3244c739dbd6846d2aa5cecc6893fb0eade1a9cb6851",
  name: "getAdminGalleryList",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminGalleryList.__executeServer(opts));
const getAdminGalleryList = createServerFn({
  method: "GET"
}).handler(getAdminGalleryList_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("gallery").orderBy("order", "asc").get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const saveAdminGalleryItem_createServerFn_handler = createServerRpc({
  id: "58ccd830ce1aafb3a0b762aa10184d485a6b164e35df2747249043ac5bf0f31e",
  name: "saveAdminGalleryItem",
  filename: "src/lib/content.server.ts"
}, (opts) => saveAdminGalleryItem.__executeServer(opts));
const saveAdminGalleryItem = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    src: stringType().url("Must be a valid URL"),
    alt: stringType().trim().min(2, "Alt text is required"),
    caption: stringType().trim().max(300).optional().or(literalType("")),
    programSlug: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(saveAdminGalleryItem_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let docId = data.id;
  const isNew = !docId;
  const docRef = docId ? db.collection("gallery").doc(docId) : db.collection("gallery").doc();
  docId = docRef.id;
  const payload = {
    ...data,
    updatedAt: now,
    updatedBy: admin.email,
    ...isNew ? {
      createdAt: now
    } : {}
  };
  await docRef.set(payload, {
    merge: true
  });
  await db.collection("auditLog").add({
    action: isNew ? "gallery_create" : "gallery_update",
    target: `gallery/${docId}`,
    beforeSummary: null,
    afterSummary: `${data.alt} (${data.status})`,
    adminEmail: admin.email,
    timestamp: now
  });
  invalidatePublicCache();
  return {
    success: true,
    id: docId
  };
});
const getAdminMessages_createServerFn_handler = createServerRpc({
  id: "639d64f4d283389e435b894321601c7936aa2f9f8e06586894674fcbd1456755",
  name: "getAdminMessages",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminMessages.__executeServer(opts));
const getAdminMessages = createServerFn({
  method: "GET"
}).handler(getAdminMessages_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("messages").orderBy("createdAt", "desc").limit(200).get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const updateAdminMessageStatus_createServerFn_handler = createServerRpc({
  id: "c17759cee9faedadc54ec53d42b77976ee262aeadf92871357f443ae34b2d07c",
  name: "updateAdminMessageStatus",
  filename: "src/lib/content.server.ts"
}, (opts) => updateAdminMessageStatus.__executeServer(opts));
const updateAdminMessageStatus = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType(),
    read: booleanType().optional(),
    archived: booleanType().optional()
  }).parse(data);
}).handler(updateAdminMessageStatus_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const db = await getAdminFirestore();
  const updatePayload = {};
  if (data.read !== void 0) updatePayload.read = data.read;
  if (data.archived !== void 0) updatePayload.archived = data.archived;
  await db.collection("messages").doc(data.id).update(updatePayload);
  await db.collection("auditLog").add({
    action: "message_status_update",
    target: `messages/${data.id}`,
    beforeSummary: null,
    afterSummary: JSON.stringify(updatePayload),
    adminEmail: admin.email,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  return {
    success: true
  };
});
const getAdminAuditLogs_createServerFn_handler = createServerRpc({
  id: "ed7a9b2fcd974cd4052ad0228069e2af66e6b5abf564b68d3980f8362ec96389",
  name: "getAdminAuditLogs",
  filename: "src/lib/content.server.ts"
}, (opts) => getAdminAuditLogs.__executeServer(opts));
const getAdminAuditLogs = createServerFn({
  method: "GET"
}).handler(getAdminAuditLogs_createServerFn_handler, async () => {
  await requireAdmin();
  const db = await getAdminFirestore();
  const snap = await db.collection("auditLog").orderBy("timestamp", "desc").limit(100).get();
  const list = [];
  snap.forEach((doc) => list.push({
    ...doc.data(),
    id: doc.id
  }));
  return list;
});
const uploadAdminImage_createServerFn_handler = createServerRpc({
  id: "4930ad76b269cad4dad408de03a49216410542281d91f4885b4a3cceb00b11b3",
  name: "uploadAdminImage",
  filename: "src/lib/content.server.ts"
}, (opts) => uploadAdminImage.__executeServer(opts));
const uploadAdminImage = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    base64Data: stringType().min(10),
    contentType: enumType(["image/jpeg", "image/png", "image/webp"]),
    alt: stringType().trim().min(2, "Alt text is required for accessibility")
  }).parse(data);
}).handler(uploadAdminImage_createServerFn_handler, async ({
  data
}) => {
  const admin = await requireAdmin();
  const buffer = Buffer.from(data.base64Data, "base64");
  if (buffer.length > 5 * 1024 * 1024) {
    throw new Error("File size exceeds 5MB limit");
  }
  const year = (/* @__PURE__ */ new Date()).getFullYear();
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
          alt: data.alt
        }
      },
      public: true
    });
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;
    const db = await getAdminFirestore();
    await db.collection("auditLog").add({
      action: "image_upload",
      target: filePath,
      beforeSummary: null,
      afterSummary: `Uploaded ${filePath} (${(buffer.length / 1024).toFixed(1)} KB)`,
      adminEmail: admin.email,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    return {
      success: true,
      url: publicUrl
    };
  } catch (err) {
    console.error("Storage upload failed:", err);
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Storage upload failed: ${msg}. You may paste an image URL instead.`);
  }
});
export {
  deleteAdminOutreach_createServerFn_handler,
  getAdminAuditLogs_createServerFn_handler,
  getAdminDonationSettings_createServerFn_handler,
  getAdminFaqsList_createServerFn_handler,
  getAdminGalleryList_createServerFn_handler,
  getAdminHomeSettings_createServerFn_handler,
  getAdminMessages_createServerFn_handler,
  getAdminOutreachList_createServerFn_handler,
  getAdminOverviewData_createServerFn_handler,
  getAdminSiteSettings_createServerFn_handler,
  getAdminStoriesList_createServerFn_handler,
  getAdminTeamList_createServerFn_handler,
  getPublicFaqs_createServerFn_handler,
  getPublicGallery_createServerFn_handler,
  getPublicOutreachBySlug_createServerFn_handler,
  getPublicOutreachList_createServerFn_handler,
  getPublicSiteData_createServerFn_handler,
  getPublicStories_createServerFn_handler,
  getPublicTeamList_createServerFn_handler,
  reorderAdminTeam_createServerFn_handler,
  saveAdminDonationSettings_createServerFn_handler,
  saveAdminFaq_createServerFn_handler,
  saveAdminGalleryItem_createServerFn_handler,
  saveAdminHomeSettings_createServerFn_handler,
  saveAdminOutreach_createServerFn_handler,
  saveAdminSiteSettings_createServerFn_handler,
  saveAdminStory_createServerFn_handler,
  saveAdminTeamMember_createServerFn_handler,
  updateAdminMessageStatus_createServerFn_handler,
  uploadAdminImage_createServerFn_handler
};
