import { Router } from 'express';
import { getDb } from '../firebase.js';

const router = Router();

function dbOr503(res) {
  const db = getDb();
  if (!db) {
    res.status(503).json({
      error: 'Firebase belum dikonfigurasi.',
      hint: 'Set FIREBASE_SERVICE_ACCOUNT atau FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY.'
    });
    return null;
  }
  return db;
}

router.post('/track', async (req, res) => {
  const db = dbOr503(res);
  if (!db) return;

  const page = String(req.body?.page || '/').slice(0, 300);
  const ua = String(req.body?.ua || '').slice(0, 500);
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim().slice(0, 100);

  try {
    await db.collection('portfolio_visits').add({
      page,
      userAgent: ua,
      ip,
      createdAt: new Date().toISOString()
    });
    res.status(201).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menyimpan aktivitas visitor.' });
  }
});

router.get('/metrics', async (_req, res) => {
  const db = dbOr503(res);
  if (!db) return;

  const started = Date.now();
  try {
    const snap = await db.collection('portfolio_visits').get();
    const visitors = snap.size;
    const responseTime = Date.now() - started;

    res.json({
      visitors,
      uptime: 100,
      responseTime,
      health: 'healthy',
      tip: 'Data visitor tersimpan di Firebase Firestore.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil metrik.' });
  }
});

export default router;
