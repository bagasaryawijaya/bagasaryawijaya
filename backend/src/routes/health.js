import { Router } from 'express';
import { firebaseConfigured, getDb } from '../firebase.js';

const router = Router();

router.get('/', async (_req, res) => {
  const started = Date.now();
  let firebase = 'not_configured';

  if (firebaseConfigured()) {
    try {
      const db = getDb();
      await db.collection('_health').doc('ping').set(
        { checkedAt: new Date().toISOString() },
        { merge: true }
      );
      firebase = 'connected';
    } catch {
      firebase = 'error';
    }
  }

  res.json({
    status: 'ok',
    service: 'bagas-portfolio-api',
    firebase,
    responseTime: Date.now() - started,
    timestamp: new Date().toISOString()
  });
});

export default router;
