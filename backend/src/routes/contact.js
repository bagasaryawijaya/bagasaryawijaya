import { Router } from 'express';

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

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return res.status(503).json({
      error: 'Email service is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL.'
    });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [DESTINATION_EMAIL],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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
      return res.status(502).json({ error: 'The email service could not send the message.' });
    }

    return res.status(200).json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(500).json({ error: 'Gagal mengirim pesan.' });
  }
});

export default router;
