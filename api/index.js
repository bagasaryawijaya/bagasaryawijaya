import admin from 'firebase-admin';

let db;

function getDb() {
  if (db) return db;
  if (!admin.apps.length) {
    let credential;
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      credential = admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT));
    } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
      credential = admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      });
    }
    if (!credential) return null;
    admin.initializeApp({ credential });
  }
  db = admin.firestore();
  return db;
}

function send(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  const path = String(req.url || '').split('?')[0].replace(/^\/api\/?/, '');

  if (req.method === 'GET' && (path === '' || path === 'health')) {
    const started = Date.now();
    const firestore = getDb();
    if (firestore) {
      try {
        await firestore.collection('_health').doc('ping').set({checkedAt: new Date().toISOString()}, {merge:true});
      } catch {
        return send(res, 503, {status:'error', firebase:'error'});
      }
    }
    return send(res, 200, {status:'ok', service:'bagas-portfolio-api', firebase:firestore?'connected':'not_configured', responseTime:Date.now()-started, timestamp:new Date().toISOString()});
  }

  const firestore = getDb();
  if (!firestore) return send(res, 503, {error:'Firebase belum dikonfigurasi.', hint:'Tambahkan Firebase environment variables di Vercel.'});

  if (path === 'ai/track' && req.method === 'POST') {
    try {
      const page = String(req.body?.page || '/').slice(0,300);
      const ua = String(req.body?.ua || '').slice(0,500);
      const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim().slice(0,100);
      await firestore.collection('portfolio_visits').add({page,userAgent:ua,ip,createdAt:new Date().toISOString()});
      return send(res,201,{ok:true});
    } catch (error) {
      console.error(error);
      return send(res,500,{error:'Gagal menyimpan aktivitas visitor.'});
    }
  }

  if (path === 'ai/metrics' && req.method === 'GET') {
    const started=Date.now();
    try {
      const snap=await firestore.collection('portfolio_visits').get();
      return send(res,200,{visitors:snap.size,uptime:100,responseTime:Date.now()-started,health:'healthy',tip:'Data visitor tersimpan di Firebase Firestore.'});
    } catch (error) {
      console.error(error);
      return send(res,500,{error:'Gagal mengambil metrik.'});
    }
  }

  return send(res,404,{error:'Endpoint tidak ditemukan.'});
}
