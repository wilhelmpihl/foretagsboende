const express = require('express');
const { db } = require('../db/init');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', (req, res) => {
  const { contact_email, check_in, check_out } = req.body;
  if (!contact_email || !check_in || !check_out) return res.status(400).json({ error: 'E-post, in- och utcheckning krävs.' });
  const nights = Math.max(1, Math.round((new Date(check_out) - new Date(check_in)) / 86400000));
  const listing = req.body.listing_id ? db.getListingById(req.body.listing_id) : null;
  const total_price = listing ? listing.price_per_night * nights * (parseInt(req.body.persons) || 1) : null;
  const booking = db.createBooking({ ...req.body, persons: parseInt(req.body.persons) || 1, status: 'pending', total_price });
  res.status(201).json({ id: booking.id, message: 'Förfrågan mottagen. Vi återkommer inom 24 timmar.' });
});

router.get('/', requireAuth, (req, res) => {
  const bookings = req.user.role === 'admin' ? db.getBookings() : db.getBookingsByUser(req.user.id, req.user.email);
  const listings = db.getListings();
  const enriched = bookings.map(b => {
    const l = listings.find(x => x.id === b.listing_id);
    return { ...b, listing_title: l?.title, listing_area: l?.area, listing_image: l?.image_url };
  });
  res.json({ bookings: enriched });
});

router.patch('/:id/status', requireAdmin, (req, res) => {
  const valid = ['pending','confirmed','cancelled','completed'];
  if (!valid.includes(req.body.status)) return res.status(400).json({ error: 'Ogiltigt status.' });
  db.updateBookingStatus(req.params.id, req.body.status);
  res.json({ success: true });
});

module.exports = router;
