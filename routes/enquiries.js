const express = require('express');
const guesty = require('../services/guesty');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { listingId, listingTitle, listingThumbnail, companyName, contactName, email, phone, checkIn, checkOut, guests, message } = req.body;

    // Validate
    if (!companyName) return res.status(400).json({ error: 'Företagsnamn krävs.' });
    if (!email) return res.status(400).json({ error: 'E-postadress krävs.' });
    if (!phone) return res.status(400).json({ error: 'Telefonnummer krävs.' });
    if (!checkIn || !checkOut) return res.status(400).json({ error: 'In- och utcheckningsdatum krävs.' });

    const nights = Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000));

    // Get price from listing if available
    let pricePerNight = 0;
    if (listingId) {
      try {
        const listing = await guesty.fetchListingById(listingId);
        if (listing) pricePerNight = listing.pricePerNight;
      } catch {}
    }

    const enquiry = guesty.createEnquiry({
      listingId: listingId || null,
      listingTitle: listingTitle || 'Generell förfrågan',
      listingThumbnail: listingThumbnail || '',
      companyName,
      contactName: contactName || '',
      email,
      phone,
      checkIn,
      checkOut,
      nights,
      guests: parseInt(guests) || 1,
      message: message || '',
      totalPrice: pricePerNight > 0 ? nights * pricePerNight : null
    });

    console.log(`✓ New enquiry ${enquiry.id} from ${companyName}`);
    res.status(201).json({ success: true, enquiryId: enquiry.id });

    // Fire lead email in background — never blocks response
    const { sendLeadEmail } = require('../utils/mailer');
    sendLeadEmail({
      type: 'enquiry',
      data: { listingId, listingTitle, companyName, contactName, email, phone, checkIn, checkOut, nights, guests: parseInt(guests) || 1, message, pricePerNight }
    }).catch(err => console.error('Lead email error:', err.message));
  } catch (err) {
    console.error('Enquiry error:', err.message);
    res.status(500).json({ error: 'Kunde inte spara förfrågan. Försök igen.' });
  }
});

router.get('/', (req, res) => {
  const enquiries = guesty.readEnquiries();
  res.json({ enquiries });
});

router.patch('/:id/status', (req, res) => {
  const valid = ['pending', 'confirmed', 'completed'];
  if (!valid.includes(req.body.status)) return res.status(400).json({ error: 'Ogiltigt status.' });
  const updated = guesty.updateEnquiryStatus(req.params.id, req.body.status);
  if (!updated) return res.status(404).json({ error: 'Förfrågan hittades inte.' });
  res.json({ success: true });
});

module.exports = router;
