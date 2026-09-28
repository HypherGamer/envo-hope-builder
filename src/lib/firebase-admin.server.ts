// Dynamic import of firebase-admin to prevent Vite client bundle from bundling Node.js modules

let _cachedAdmin: any = null;

export async function getFirebaseAdmin() {
  if (_cachedAdmin) {
    return _cachedAdmin;
  }

  const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccountRaw || !serviceAccountRaw.trim()) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not configured");
  }

  const moduleName = "firebase-admin";
  const adminModule = await import(/* @vite-ignore */ moduleName);
  const admin = adminModule.default || adminModule;

  if (admin.apps.length === 0) {
    let serviceAccount: any;
    try {
      serviceAccount = JSON.parse(serviceAccountRaw);
    } catch (parseError: unknown) {
      const msg = parseError instanceof Error ? parseError.message : String(parseError);
      throw new Error(`FIREBASE_SERVICE_ACCOUNT is not valid JSON: ${msg}`);
    }

    const bucketName =
      process.env.FIREBASE_STORAGE_BUCKET ||
      process.env.VITE_FIREBASE_STORAGE_BUCKET ||
      (serviceAccount as { project_id?: string }).project_id
        ? `${(serviceAccount as { project_id?: string }).project_id}.appspot.com`
        : undefined;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: bucketName,
    });
  }

  _cachedAdmin = admin;
  return admin;
}

export async function getAdminFirestore() {
  const app = await getFirebaseAdmin();
  return app.firestore();
}

export async function getAdminAuth() {
  const app = await getFirebaseAdmin();
  return app.auth();
}

export async function getAdminStorageBucket() {
  const app = await getFirebaseAdmin();
  const bucketName =
    process.env.FIREBASE_STORAGE_BUCKET ||
    process.env.VITE_FIREBASE_STORAGE_BUCKET;
  return bucketName ? app.storage().bucket(bucketName) : app.storage().bucket();
}

