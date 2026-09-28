// Dynamic import of firebase-admin to prevent Vite client bundle from bundling Node.js modules

let _cachedApp: any = null;

async function parseServiceAccount(raw: string | undefined): Promise<any> {
  if (!raw || !raw.trim()) return null;
  const trimmed = raw.trim();

  // 1. Direct JSON (standard format)
  if (trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      try {
        const unescaped = trimmed.replace(/\\n/g, "\n");
        return JSON.parse(unescaped);
      } catch {}
    }
  }

  // 2. Base64 encoded JSON
  try {
    const decoded = Buffer.from(trimmed, "base64").toString("utf-8");
    if (decoded.trim().startsWith("{")) {
      return JSON.parse(decoded);
    }
  } catch {}

  // 3. File path (e.g., if FIREBASE_SERVICE_ACCOUNT is set to "firebase-admin.json" or a path)
  try {
    const fs = await import(/* @vite-ignore */ "fs");
    const path = await import(/* @vite-ignore */ "path");
    const candidates = [
      trimmed,
      path.resolve(process.cwd(), trimmed),
      path.join("/tmp", trimmed),
    ];
    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        const fileContent = fs.readFileSync(candidate, "utf-8");
        return JSON.parse(fileContent);
      }
    }
  } catch {}

  // 4. Final attempt standard JSON parse
  try {
    return JSON.parse(trimmed);
  } catch (parseError: unknown) {
    const msg = parseError instanceof Error ? parseError.message : String(parseError);
    throw new Error(`FIREBASE_SERVICE_ACCOUNT is not valid JSON or accessible file: ${msg}`);
  }
}

export async function getFirebaseApp() {
  if (_cachedApp) {
    return _cachedApp;
  }

  const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT;
  const adminPkg = "firebase-admin";
  const adminModule = await import(/* @vite-ignore */ adminPkg);
  const getApps =
    adminModule.getApps ||
    adminModule.default?.getApps ||
    (() => []);
  const initializeApp =
    adminModule.initializeApp ||
    adminModule.default?.initializeApp;
  const cert =
    adminModule.cert ||
    adminModule.default?.cert ||
    adminModule.credential?.cert ||
    adminModule.default?.credential?.cert;
  const applicationDefault =
    adminModule.applicationDefault ||
    adminModule.default?.applicationDefault ||
    adminModule.credential?.applicationDefault ||
    adminModule.default?.credential?.applicationDefault;

  const currentApps = getApps();
  if (currentApps && currentApps.length > 0) {
    _cachedApp = currentApps[0];
    return _cachedApp;
  }

  if (!serviceAccountRaw || !serviceAccountRaw.trim()) {
    // Try applicationDefault if running in Google Cloud environment
    if (applicationDefault) {
      try {
        _cachedApp = initializeApp({
          credential: applicationDefault(),
          projectId: process.env.VITE_FIREBASE_PROJECT_ID,
        });
        return _cachedApp;
      } catch {}
    }
    throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not configured");
  }

  let serviceAccount: any;
  try {
    serviceAccount = await parseServiceAccount(serviceAccountRaw);
  } catch (err: unknown) {
    // If running in GCP environment with applicationDefault, fallback gracefully
    if (applicationDefault) {
      try {
        _cachedApp = initializeApp({
          credential: applicationDefault(),
          projectId: process.env.VITE_FIREBASE_PROJECT_ID,
        });
        return _cachedApp;
      } catch {}
    }
    throw err;
  }

  const bucketName =
    process.env.FIREBASE_STORAGE_BUCKET ||
    process.env.VITE_FIREBASE_STORAGE_BUCKET ||
    (serviceAccount as { project_id?: string })?.project_id
      ? `${(serviceAccount as { project_id?: string }).project_id}.appspot.com`
      : undefined;

  const credential = cert && serviceAccount ? cert(serviceAccount) : (applicationDefault ? applicationDefault() : undefined);

  _cachedApp = initializeApp({
    credential,
    storageBucket: bucketName,
    projectId: (serviceAccount as { project_id?: string })?.project_id || process.env.VITE_FIREBASE_PROJECT_ID,
  });

  return _cachedApp;
}

export async function getAdminFirestore() {
  const app = await getFirebaseApp();
  const fsPkg = "firebase-admin/firestore";
  const fsModule = await import(/* @vite-ignore */ fsPkg);
  const getFirestore =
    fsModule.getFirestore ||
    fsModule.default?.getFirestore ||
    (app.firestore ? app.firestore.bind(app) : undefined);

  if (!getFirestore) {
    throw new Error("Unable to resolve getFirestore from firebase-admin");
  }
  return getFirestore(app);
}

export async function getAdminAuth() {
  const app = await getFirebaseApp();
  const authPkg = "firebase-admin/auth";
  const authModule = await import(/* @vite-ignore */ authPkg);
  const getAuth =
    authModule.getAuth ||
    authModule.default?.getAuth ||
    (app.auth ? app.auth.bind(app) : undefined);

  if (!getAuth) {
    throw new Error("Unable to resolve getAuth from firebase-admin");
  }
  return getAuth(app);
}

export async function getAdminStorageBucket() {
  const app = await getFirebaseApp();
  const storagePkg = "firebase-admin/storage";
  const storageModule = await import(/* @vite-ignore */ storagePkg);
  const getStorage =
    storageModule.getStorage ||
    storageModule.default?.getStorage ||
    (app.storage ? app.storage.bind(app) : undefined);

  if (!getStorage) {
    throw new Error("Unable to resolve getStorage from firebase-admin");
  }
  const storage = getStorage(app);
  const bucketName =
    process.env.FIREBASE_STORAGE_BUCKET ||
    process.env.VITE_FIREBASE_STORAGE_BUCKET;
  return bucketName ? storage.bucket(bucketName) : storage.bucket();
}
