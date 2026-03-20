const express = require('express');
const guesty = require('../services/guesty');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

router.get('/', requireAuth, async (req, res) => {
  try {
    const enquiries = guesty.readEnquiries();
    const listings = await guesty.fetchListings();
    const today = new Date().toISOString().split('T')[0];
    const weekFromNow = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];

    const active = enquiries.filter(e => e.status === 'confirmed' && e.checkOut >= today).length;
    const pending = enquiries.filter(e => e.status === 'pending').length;
    const upcoming = enquiries.filter(e => e.status === 'confirmed' && e.checkIn >= today && e.checkIn <= weekFromNow).length;
    const totalSpent = enquiries
      .filter(e => e.status === 'confirmed')
      .reduce((s, e) => s + (e.totalPrice || 0), 0);

    res.json({
      stats: {
        activeBookings: active,
        pendingBookings: pending,
        upcomingCheckIns: upcoming,
        totalSpent
      },
      enquiries: enquiries.slice(0, 20),
      listings: listings.slice(0, 6)
    });
  } catch (err) {
    console.error('Dashboard error:', err.message);
    res.json({
      stats: { activeBookings: 0, pendingBookings: 0, upcomingCheckIns: 0, totalSpent: 0 },
      enquiries: [],
      listings: []
    });
  }
});

module.exports = router;
