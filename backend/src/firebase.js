import admin from 'firebase-admin';

let db = null;

function getCredential() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const parsed = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    return admin.credential.cert(parsed);
  }

  if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
  ) {
    return admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
  }

  return null;
}

export function getDb() {
  if (db) return db;
  if (admin.apps.length) {
    db = admin.firestore();
    return db;
  }

  const credential = getCredential();
  if (!credential) return null;

  admin.initializeApp({ credential });
  db = admin.firestore();
  return db;
}

export function firebaseConfigured() {
  return Boolean(
    process.env.FIREBASE_SERVICE_ACCOUNT ||
    (process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY)
  );
}
