import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, type Auth } from "firebase/auth";

let firebaseApp: FirebaseApp | null = null;
let firebaseAuth: Auth | null = null;

function getClientFirebase() {
  if (typeof window === "undefined") {
    return { app: null, auth: null };
  }

  if (!firebaseApp && getApps().length === 0) {
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
    const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
    const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
    const appId = import.meta.env.VITE_FIREBASE_APP_ID;
    const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
    const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;

    if (!apiKey || !projectId) {
      console.warn("Firebase client credentials (VITE_FIREBASE_API_KEY / VITE_FIREBASE_PROJECT_ID) are not configured in environment.");
      return { app: null, auth: null };
    }

    firebaseApp = initializeApp({
      apiKey,
      authDomain,
      projectId,
      appId,
      storageBucket,
      messagingSenderId,
    });
  } else if (!firebaseApp && getApps().length > 0) {
    firebaseApp = getApps()[0];
  }

  if (firebaseApp && !firebaseAuth) {
    firebaseAuth = getAuth(firebaseApp);
  }

  return { app: firebaseApp, auth: firebaseAuth };
}

export async function signInWithGoogleClient(): Promise<string> {
  const { auth } = getClientFirebase();
  if (!auth) {
    throw new Error("Client authentication is not configured. Please set VITE_FIREBASE_* variables.");
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken(true);
  return idToken;
}

export async function signOutClient(): Promise<void> {
  const { auth } = getClientFirebase();
  if (auth) {
    await signOut(auth);
  }
}
