import { T as TSS_SERVER_FUNCTION } from "./server-D7pJ5bR7.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
let _cachedApp = null;
async function parseServiceAccount(raw) {
  if (!raw || !raw.trim()) return null;
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      try {
        const unescaped = trimmed.replace(/\\n/g, "\n");
        return JSON.parse(unescaped);
      } catch {
      }
    }
  }
  try {
    const decoded = Buffer.from(trimmed, "base64").toString("utf-8");
    if (decoded.trim().startsWith("{")) {
      return JSON.parse(decoded);
    }
  } catch {
  }
  try {
    const fs = await import(
      /* @vite-ignore */
      "fs"
    );
    const path = await import(
      /* @vite-ignore */
      "path"
    );
    const candidates = [
      trimmed,
      path.resolve(process.cwd(), trimmed),
      path.join("/tmp", trimmed)
    ];
    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        const fileContent = fs.readFileSync(candidate, "utf-8");
        return JSON.parse(fileContent);
      }
    }
  } catch {
  }
  try {
    return JSON.parse(trimmed);
  } catch (parseError) {
    const msg = parseError instanceof Error ? parseError.message : String(parseError);
    throw new Error(`FIREBASE_SERVICE_ACCOUNT is not valid JSON or accessible file: ${msg}`);
  }
}
async function getFirebaseApp() {
  if (_cachedApp) {
    return _cachedApp;
  }
  const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT;
  const adminPkg = "firebase-admin";
  const adminModule = await import(
    /* @vite-ignore */
    adminPkg
  );
  const getApps = adminModule.getApps || adminModule.default?.getApps || (() => []);
  const initializeApp = adminModule.initializeApp || adminModule.default?.initializeApp;
  const cert = adminModule.cert || adminModule.default?.cert || adminModule.credential?.cert || adminModule.default?.credential?.cert;
  const applicationDefault = adminModule.applicationDefault || adminModule.default?.applicationDefault || adminModule.credential?.applicationDefault || adminModule.default?.credential?.applicationDefault;
  const currentApps = getApps();
  if (currentApps && currentApps.length > 0) {
    _cachedApp = currentApps[0];
    return _cachedApp;
  }
  if (!serviceAccountRaw || !serviceAccountRaw.trim()) {
    if (applicationDefault) {
      try {
        _cachedApp = initializeApp({
          credential: applicationDefault(),
          projectId: process.env.VITE_FIREBASE_PROJECT_ID
        });
        return _cachedApp;
      } catch {
      }
    }
    throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not configured");
  }
  let serviceAccount;
  try {
    serviceAccount = await parseServiceAccount(serviceAccountRaw);
  } catch (err) {
    if (applicationDefault) {
      try {
        _cachedApp = initializeApp({
          credential: applicationDefault(),
          projectId: process.env.VITE_FIREBASE_PROJECT_ID
        });
        return _cachedApp;
      } catch {
      }
    }
    throw err;
  }
  const bucketName = process.env.FIREBASE_STORAGE_BUCKET || process.env.VITE_FIREBASE_STORAGE_BUCKET || serviceAccount?.project_id ? `${serviceAccount.project_id}.appspot.com` : void 0;
  const credential = cert && serviceAccount ? cert(serviceAccount) : applicationDefault ? applicationDefault() : void 0;
  _cachedApp = initializeApp({
    credential,
    storageBucket: bucketName,
    projectId: serviceAccount?.project_id || process.env.VITE_FIREBASE_PROJECT_ID
  });
  return _cachedApp;
}
async function getAdminFirestore() {
  const app = await getFirebaseApp();
  const fsPkg = "firebase-admin/firestore";
  const fsModule = await import(
    /* @vite-ignore */
    fsPkg
  );
  const getFirestore = fsModule.getFirestore || fsModule.default?.getFirestore || (app.firestore ? app.firestore.bind(app) : void 0);
  if (!getFirestore) {
    throw new Error("Unable to resolve getFirestore from firebase-admin");
  }
  return getFirestore(app);
}
async function getAdminAuth() {
  const app = await getFirebaseApp();
  const authPkg = "firebase-admin/auth";
  const authModule = await import(
    /* @vite-ignore */
    authPkg
  );
  const getAuth = authModule.getAuth || authModule.default?.getAuth || (app.auth ? app.auth.bind(app) : void 0);
  if (!getAuth) {
    throw new Error("Unable to resolve getAuth from firebase-admin");
  }
  return getAuth(app);
}
async function getAdminStorageBucket() {
  const app = await getFirebaseApp();
  const storagePkg = "firebase-admin/storage";
  const storageModule = await import(
    /* @vite-ignore */
    storagePkg
  );
  const getStorage = storageModule.getStorage || storageModule.default?.getStorage || (app.storage ? app.storage.bind(app) : void 0);
  if (!getStorage) {
    throw new Error("Unable to resolve getStorage from firebase-admin");
  }
  const storage = getStorage(app);
  const bucketName = process.env.FIREBASE_STORAGE_BUCKET || process.env.VITE_FIREBASE_STORAGE_BUCKET;
  return bucketName ? storage.bucket(bucketName) : storage.bucket();
}
export {
  getAdminStorageBucket as a,
  getAdminAuth as b,
  createServerRpc as c,
  getAdminFirestore as g
};
