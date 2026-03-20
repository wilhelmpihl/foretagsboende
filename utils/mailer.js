const nodemailer = require('nodemailer');

// ─── SMTP TRANSPORTER ─────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.office365.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  },
  requireTLS: true
});

// Test on startup
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter.verify((error) => {
    if (error) {
      console.error('✗ SMTP failed:', error.message, '(' + (error.code || '') + ')');
    } else {
      console.log('✓ SMTP ready — emails send to kontakt@bostadsuthyrning.se');
    }
  });
} else {
  console.log('⚠ SMTP not configured — emails disabled');
}

// ─── MAKE.COM WEBHOOK FALLBACK ────────────────────
const WEBHOOK_URL = 'https://hook.eu2.make.com/cgpgmn98xgl03pdl6uojlgq06xg7ktgh';

async function sendWebhook(type, data) {
  try {
    const fetch = require('node-fetch');
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'foretagsboende.se', type, timestamp: new Date().toISOString(), ...data })
    });
    console.log('✓ Webhook sent:', type);
  } catch (e) {
    console.error('✗ Webhook failed:', e.message);
  }
}

// ─── SEND LEAD NOTIFICATION ───────────────────────
async function sendLeadNotification(type, data) {
  const subjects = {
    registration: 'Ny registrering — ' + (data.companyName || data.company || data.email),
    enquiry: 'Ny förfrågan — ' + (data.listingTitle || 'Bostad') + ' — ' + (data.companyName || ''),
    contact: 'Nytt meddelande — ' + (data.name || data.email)
  };

  await transporter.sendMail({
    from: '"Företagsboende" <' + process.env.SMTP_USER + '>',
    to: process.env.LEAD_EMAIL || 'kontakt@bostadsuthyrning.se',
    replyTo: data.email || process.env.SMTP_USER,
    subject: subjects[type] || 'Ny lead — Företagsboende',
    html: buildLeadHTML(type, data)
  });

  console.log('✓ Lead notification sent:', type);
}

// ─── SEND CONFIRMATION TO CUSTOMER ────────────────
async function sendConfirmation(type, data) {
  if (!data.email) return;

  const subjects = {
    registration: 'Välkommen till Företagsboende — ert konto är aktiverat',
    enquiry: 'Vi har tagit emot er förfrågan — återkommer inom 24h',
    contact: 'Tack för ert meddelande — vi återkommer snart'
  };

  await transporter.sendMail({
    from: '"Företagsboende" <' + process.env.SMTP_USER + '>',
    to: data.email,
    subject: subjects[type] || 'Tack — vi återkommer inom 24 timmar',
    html: buildConfirmationHTML(type, data)
  });

  console.log('✓ Confirmation sent to:', data.email);
}

// ─── MAIN EXPORT ──────────────────────────────────
async function sendEmails(type, data) {
  const results = { lead: false, confirmation: false, webhook: false };

  // Always send webhook (reliable fallback)
  try { await sendWebhook(type, data); results.webhook = true; } catch (e) {}

  // Send SMTP emails if configured
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try { await sendLeadNotification(type, data); results.lead = true; } catch (err) {
      console.error('✗ Lead email failed:', err.message);
    }
    try { await sendConfirmation(type, data); results.confirmation = true; } catch (err) {
      console.error('✗ Confirmation failed:', err.message);
    }
  }

  return results;
}

// Backward-compatible export
async function sendLeadEmail({ type, data }) {
  return sendEmails(type, data);
}

// ─── LEAD EMAIL HTML ──────────────────────────────
function buildLeadHTML(type, data) {
  const now = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm', dateStyle: 'full', timeStyle: 'short' });
  const rows = [];
  const add = (l, v, big) => { if (!v) return; rows.push('<p class="l">' + esc(l) + '</p><p class="' + (big ? 'vb' : 'v') + '">' + esc(String(v)) + '</p>'); };

  if (type === 'registration') {
    add('Företag', data.companyName || data.company, true);
    add('E-post', data.email, true);
    add('Namn', [data.firstName, data.lastName, data.name].filter(Boolean).join(' '));
    add('Telefon', data.phone);
    add('Rabatt', '10% på första fakturan');
  }
  if (type === 'enquiry') {
    add('Bostad', data.listingTitle, true);
    add('Företag', data.companyName, true);
    add('E-post', data.email, true);
    add('Kontaktperson', data.contactName);
    add('Telefon', data.phone);
    add('Incheckning', data.checkIn);
    add('Utcheckning', data.checkOut);
    add('Nätter', data.nights);
    add('Gäster', data.guests);
    add('Meddelande', data.message);
    if (data.nights && data.pricePerNight) {
      add('Estimerat värde', Number(data.nights * data.pricePerNight).toLocaleString('sv-SE') + ' kr', true);
    }
  }
  if (type === 'contact') {
    add('Namn', data.name, true);
    add('E-post', data.email, true);
    add('Telefon', data.phone);
    add('Meddelande', data.message);
  }

  const title = type === 'registration' ? (esc(data.companyName || data.company || 'Nytt företag') + ' har registrerat sig')
    : type === 'enquiry' ? ('Förfrågan om ' + esc(data.listingTitle || 'bostad'))
    : ('Meddelande från ' + esc(data.name || data.email || ''));

  return '<!DOCTYPE html><html lang="sv"><head><meta charset="UTF-8"><style>'
    + 'body{font-family:Arial,sans-serif;background:#f5f2eb;margin:0;padding:0}'
    + '.w{max-width:600px;margin:32px auto}'
    + '.h{background:#0f1923;padding:28px 32px;border-radius:12px 12px 0 0}'
    + '.hl{color:#c9a96e;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px}'
    + '.ht{color:white;font-size:20px;margin:0;font-weight:300}'
    + '.b{background:white;padding:28px 32px}'
    + '.l{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#aaa;margin:0 0 3px}'
    + '.v{font-size:15px;color:#1a1510;margin:0 0 16px}'
    + '.vb{font-size:16px;color:#0f1923;font-weight:600;margin:0 0 16px}'
    + '.d{height:1px;background:#f0ece4;margin:20px 0;border:none}'
    + '.btn{display:inline-block;background:#0f1923;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:13px;margin-top:16px}'
    + '.f{background:#f5f2eb;padding:14px 32px;border-radius:0 0 12px 12px;text-align:center;font-size:11px;color:#aaa}'
    + '</style></head><body><div class="w">'
    + '<div class="h"><p class="hl">NY LEAD · FÖRETAGSBOENDE</p><h1 class="ht">' + title + '</h1></div>'
    + '<div class="b">' + rows.join('') + '<hr class="d"><p class="l">Tidpunkt</p><p class="v">' + esc(now) + '</p>'
    + '<a href="mailto:' + esc(data.email || '') + '" class="btn">Svara direkt →</a></div>'
    + '<div class="f">Företagsboende · Automatiskt lead-meddelande</div>'
    + '</div></body></html>';
}

// ─── CONFIRMATION EMAIL HTML ──────────────────────
function buildConfirmationHTML(type, data) {
  const firstName = esc(data.firstName || data.contactName || data.name || 'där');
  const msg = type === 'registration' ? {
    title: 'Välkommen till Företagsboende!',
    body: 'Ert konto är nu aktiverat och er 10% välkomstrabatt är registrerad. En av våra kontaktpersoner hör av sig inom kort.',
    cta: 'Logga in på ert konto', url: 'https://xn--fretagsboende-imb.se/login.html'
  } : type === 'enquiry' ? {
    title: 'Vi har tagit emot er förfrågan!',
    body: 'Tack för er förfrågan om ' + esc(data.listingTitle || 'bostad') + '. Vi återkommer med ett konkret erbjudande inom 24 timmar.',
    cta: 'Se fler bostäder', url: 'https://xn--fretagsboende-imb.se'
  } : {
    title: 'Tack för ert meddelande!',
    body: 'Vi har tagit emot ert meddelande och återkommer inom 24 timmar.',
    cta: 'Besök vår hemsida', url: 'https://xn--fretagsboende-imb.se'
  };

  return '<!DOCTYPE html><html lang="sv"><head><meta charset="UTF-8"><style>'
    + 'body{font-family:Arial,sans-serif;background:#f5f2eb;margin:0;padding:0}'
    + '.w{max-width:600px;margin:32px auto}'
    + '.h{background:#0f1923;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center}'
    + '.ck{width:56px;height:56px;background:rgba(201,169,110,0.15);border:1px solid rgba(201,169,110,0.3);border-radius:50%;margin:0 auto 16px;line-height:56px;font-size:24px;color:#c9a96e}'
    + '.ht{color:white;font-size:22px;margin:0;font-weight:300}'
    + '.b{background:white;padding:32px;text-align:center}'
    + '.gr{font-size:17px;color:#1a1510;margin:0 0 12px}'
    + '.mg{font-size:14px;color:#666;line-height:1.7;margin:0 0 24px;max-width:400px;margin-left:auto;margin-right:auto}'
    + '.btn{display:inline-block;background:#0f1923;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:500}'
    + '.d{height:1px;background:#f0ece4;margin:24px 0;border:none}'
    + '.tr{font-size:12px;color:#aaa;margin:0}'
    + '.gd{color:#c9a96e;font-weight:500}'
    + '.f{background:#f5f2eb;padding:14px 32px;border-radius:0 0 12px 12px;text-align:center;font-size:11px;color:#aaa}'
    + '</style></head><body><div class="w">'
    + '<div class="h"><div class="ck">✓</div><h1 class="ht">' + msg.title + '</h1></div>'
    + '<div class="b"><p class="gr">Hej ' + firstName + '!</p>'
    + '<p class="mg">' + msg.body + '</p>'
    + '<a href="' + msg.url + '" class="btn">' + msg.cta + ' →</a>'
    + '<hr class="d"><p class="tr"><span class="gd">Ingen deposition</span> · Svar inom 24h · <span class="gd">Faktura efter inflyttning</span></p></div>'
    + '<div class="f">Företagsboende · kontakt@bostadsuthyrning.se<br>Detta är ett automatiskt bekräftelsemail</div>'
    + '</div></body></html>';
}

function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

module.exports = { sendEmails, sendLeadEmail };
