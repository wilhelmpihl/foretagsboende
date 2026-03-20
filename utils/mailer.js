require('dotenv').config();
const fetch = require('node-fetch');

// Use Make.com webhook — no SMTP needed
const WEBHOOK_URL = process.env.LEAD_WEBHOOK || 'https://hook.eu2.make.com/cgpgmn98xgl03pdl6uojlgq06xg7ktgh';

console.log('  \u2713 Lead-notifieringar aktiva via Make.com webhook');

async function sendLeadEmail({ type, data }) {
  const payload = {
    source: 'foretagsboende.se',
    type: type,
    timestamp: new Date().toISOString(),
    ...data
  };

  // Add readable summary for Make.com email template
  if (type === 'registration') {
    payload.summary = 'Ny registrering: ' + (data.company || data.companyName || data.email);
    payload.subject = 'Ny registrering — ' + (data.company || data.companyName || data.email);
  } else if (type === 'enquiry') {
    payload.summary = 'Ny boende\u00F6nskem\u00E5l: ' + (data.listingTitle || 'Bostad') + ' fr\u00E5n ' + (data.companyName || data.email);
    payload.subject = 'Ny f\u00F6rfr\u00E5gan — ' + (data.listingTitle || 'Bostad') + ' — ' + (data.companyName || '');
  } else if (type === 'contact') {
    payload.summary = 'Nytt meddelande fr\u00E5n ' + (data.name || data.email);
    payload.subject = 'Nytt meddelande — ' + (data.name || data.email);
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      console.error('  \u2717 Webhook error (' + res.status + '):', txt.slice(0, 200));
      return { success: false, error: 'Webhook ' + res.status };
    }

    console.log('  \u2713 Lead skickat:', payload.summary || type);
    return { success: true };
  } catch (error) {
    console.error('  \u2717 Webhook misslyckades:', error.message);
    return { success: false, error: error.message };
  }
}

module.exports = { sendLeadEmail };
