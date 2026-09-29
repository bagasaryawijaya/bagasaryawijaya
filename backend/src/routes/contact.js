import { Router } from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { getDb } from '../firebase.js';

const router = Router();
const DESTINATION_EMAIL = 'bagasaryawijaya27@gmail.com';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

router.post('/', async (req, res) => {
  const name = String(req.body?.name || '').trim().slice(0, 100);
  const email = String(req.body?.email || '').trim().slice(0, 254);
  const message = String(req.body?.message || '').trim().slice(0, 5000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const db = getDb();
    if (!db) {
      return res.status(503).json({ error: 'Firebase is not configured on the server.' });
    }

    await db.collection('mail').add({
      to: [DESTINATION_EMAIL],
      replyTo: email,
      message: {
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
      },
      contact: { name, email, message },
      createdAt: FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, message: 'Message queued successfully.' });
  } catch (error) {
    console.error('Firebase email queue error:', error);
    return res.status(500).json({ error: 'Gagal memasukkan pesan ke antrean email Firebase.' });
  }
});

export default router;
