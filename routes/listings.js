const express = require('express');
const guesty = require('../services/guesty');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let listings = await guesty.fetchListings();

    // Filters
    if (req.query.bedrooms) {
      listings = listings.filter(l => l.bedrooms >= parseInt(req.query.bedrooms));
    }
    if (req.query.minGuests) {
      listings = listings.filter(l => l.maxGuests >= parseInt(req.query.minGuests));
    }
    if (req.query.city) {
      const city = req.query.city.toLowerCase();
      listings = listings.filter(l => (l.city || '').toLowerCase().includes(city));
    }
    if (req.query.search) {
      const s = req.query.search.toLowerCase();
      listings = listings.filter(l =>
        (l.title || '').toLowerCase().includes(s) ||
        (l.neighborhood || '').toLowerCase().includes(s) ||
        (l.city || '').toLowerCase().includes(s)
      );
    }
    if (req.query.minPrice) {
      listings = listings.filter(l => l.pricePerNight >= parseInt(req.query.minPrice));
    }
    if (req.query.maxPrice) {
      listings = listings.filter(l => l.pricePerNight <= parseInt(req.query.maxPrice));
    }

    res.json({ listings });
  } catch (err) {
    console.error('Listings route error:', err.message);
    res.json({ listings: [] });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const listing = await guesty.fetchListingById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Boendet hittades inte.' });
    res.json(listing);
  } catch (err) {
    console.error('Listing detail error:', err.message);
    res.status(500).json({ error: 'Kunde inte hämta boende.' });
  }
});

router.get('/:id/calendar', async (req, res) => {
  try {
    const calendar = await guesty.fetchCalendar(req.params.id);
    res.json({ calendar });
  } catch (err) {
    console.error('Calendar error:', err.message);
    res.json({ calendar: [] });
  }
});

module.exports = router;
