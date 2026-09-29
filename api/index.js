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

async function sendContactEmail(body) {
  const name = String(body?.name || '').trim().slice(0, 100);
  const email = String(body?.email || '').trim().slice(0, 254);
  const message = String(body?.message || '').trim().slice(0, 5000);

  if (!name || !email || !message) {
    return { ok: false, status: 400, error: 'Name, email, and message are required.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, status: 400, error: 'Please enter a valid email address.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Vercel-only configuration: the secret API key is read server-side.
  // The Resend testing sender can be used without buying a custom domain.
  const fromEmail = 'Portfolio <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('Contact email is not configured. Missing RESEND_API_KEY.');
    return {
      ok: false,
      status: 503,
      error: 'Email service is not configured. Please add RESEND_API_KEY in Vercel Environment Variables.'
    };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ['bagasaryawijaya27@gmail.com'],
      reply_to: email,
      subject: `Portfolio Contact: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message
      ].join('\n'),
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `
    })
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('Resend API error:', response.status, details);
    return { ok: false, status: 502, error: 'The email service could not send the message.' };
  }

  return { ok: true };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

  if (path === 'contact' && req.method === 'POST') {
    try {
      const result = await sendContactEmail(req.body);
      if (!result.ok) return send(res, result.status, { error: result.error });
      return send(res, 200, { ok: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Contact endpoint error:', error);
      return send(res, 500, { error: 'Gagal mengirim pesan.' });
    }
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
