const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// ── Token Manager ──
class GuestyTokenManager {
  constructor() {
    this.token = null;
    this.expiresAt = 0;
    this.refreshPromise = null;
  }

  async getToken() {
    if (this.token && Date.now() < this.expiresAt - 5 * 60 * 1000) {
      return this.token;
    }
    if (this.refreshPromise) return this.refreshPromise;
    this.refreshPromise = this._refresh();
    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  async _refresh() {
    const clientId = process.env.GUESTY_CLIENT_ID;
    const clientSecret = process.env.GUESTY_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      console.log('✗ Guesty credentials not configured');
      return null;
    }

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const body = new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'open-api',
          client_id: clientId,
          client_secret: clientSecret
        });
        const res = await fetch('https://open-api.guesty.com/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: body.toString()
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(`Auth ${res.status}: ${text.slice(0, 200)}`);
        }

        const data = await res.json();
        this.token = data.access_token;
        this.expiresAt = Date.now() + (data.expires_in || 3600) * 1000;
        console.log('✓ Guesty token refreshed');
        return this.token;
      } catch (err) {
        console.log(`✗ Guesty token failed (attempt ${attempt}/3): ${err.message}`);
        if (attempt < 3) await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)));
      }
    }
    return null;
  }
}

const tokenManager = new GuestyTokenManager();

// ── Listings Cache ──
let listingsCache = null;
let listingsCacheTime = 0;
const LISTINGS_TTL = 60 * 60 * 1000; // 60 min

let detailCache = {};
const DETAIL_TTL = 30 * 60 * 1000; // 30 min

let calendarCache = {};
const CALENDAR_TTL = 30 * 60 * 1000;

async function guestyFetch(url, params = {}) {
  const token = await tokenManager.getToken();
  if (!token) return null;

  const qs = new URLSearchParams(params).toString();
  const fullUrl = qs ? `${url}?${qs}` : url;

  const res = await fetch(fullUrl, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Guesty API ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

function transformListing(l) {
  return {
    id: l._id,
    title: l.title || l.nickname || 'Untitled',
    neighborhood: l.address?.neighborhood || l.address?.city || '',
    city: l.address?.city || '',
    fullAddress: l.address?.full || '',
    thumbnail: l.picture?.thumbnail || (l.pictures?.[0]?.thumbnail) || '',
    photos: (l.pictures || []).map(p => p.original || p.thumbnail).filter(Boolean),
    bedrooms: l.bedrooms || 0,
    bathrooms: l.bathrooms || 0,
    maxGuests: l.accommodates || 1,
    pricePerNight: l.prices?.basePrice || 0,
    currency: 'SEK',
    amenities: l.amenities || [],
    summary: l.publicDescription?.summary || l.publicDescription?.space || '',
    active: l.active !== false
  };
}

async function fetchListings() {
  if (listingsCache && Date.now() - listingsCacheTime < LISTINGS_TTL) {
    return listingsCache;
  }

  try {
    const allResults = [];
    let skip = 0;
    const limit = 100;

    while (true) {
      const data = await guestyFetch('https://open-api.guesty.com/v1/listings', {
        limit,
        skip
      });

      if (!data || !data.results || data.results.length === 0) break;

      allResults.push(...data.results);
      console.log(`  ↳ Page ${Math.floor(skip / limit) + 1}: fetched ${data.results.length} listings (total so far: ${allResults.length})`);

      if (data.results.length < limit) break;
      skip += limit;
    }

    if (allResults.length === 0) {
      console.log('✗ No listing results from Guesty');
      return listingsCache || [];
    }

    listingsCache = allResults.map(transformListing);

    listingsCacheTime = Date.now();
    console.log(`✓ Fetched ${listingsCache.length} real listings from Guesty (all pages)`);
    return listingsCache;
  } catch (err) {
    console.error('✗ Guesty listings error:', err.message);
    return listingsCache || [];
  }
}

async function fetchListingById(id) {
  const cacheKey = id;
  if (detailCache[cacheKey] && Date.now() - detailCache[cacheKey].time < DETAIL_TTL) {
    return detailCache[cacheKey].data;
  }

  try {
    const data = await guestyFetch(`https://open-api.guesty.com/v1/listings/${id}`);

    if (!data) return null;
    const listing = transformListing(data);
    detailCache[cacheKey] = { data: listing, time: Date.now() };
    return listing;
  } catch (err) {
    console.error('✗ Guesty listing detail error:', err.message);
    return null;
  }
}

async function fetchCalendar(listingId) {
  const cacheKey = listingId;
  if (calendarCache[cacheKey] && Date.now() - calendarCache[cacheKey].time < CALENDAR_TTL) {
    return calendarCache[cacheKey].data;
  }

  try {
    const startDate = new Date().toISOString().split('T')[0];
    const end = new Date();
    end.setDate(end.getDate() + 90);
    const endDate = end.toISOString().split('T')[0];

    const data = await guestyFetch(
      `https://open-api.guesty.com/v1/availability-pricing/api/calendar/listings/${listingId}`,
      { startDate, endDate }
    );

    if (!data || !data.data || !data.data.days) return [];

    const calendar = data.data.days.map(d => ({
      date: d.date,
      available: d.status === 'available',
      price: d.price || 0
    }));

    calendarCache[cacheKey] = { data: calendar, time: Date.now() };
    return calendar;
  } catch (err) {
    console.error('✗ Guesty calendar error:', err.message);
    return [];
  }
}

// ── Enquiries (file-based) ──
const ENQUIRIES_FILE = path.join(__dirname, '..', 'data', 'enquiries.json');

function readEnquiries() {
  try {
    if (!fs.existsSync(ENQUIRIES_FILE)) return [];
    return JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf8'));
  } catch { return []; }
}

function writeEnquiries(data) {
  try {
    const dir = path.dirname(ENQUIRIES_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('✗ Write enquiries error:', err.message);
  }
}

function createEnquiry(data) {
  const enquiries = readEnquiries();
  const enquiry = {
    id: 'AWP-' + Date.now(),
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  enquiries.unshift(enquiry);
  writeEnquiries(enquiries);
  return enquiry;
}

function updateEnquiryStatus(id, status) {
  const enquiries = readEnquiries();
  const idx = enquiries.findIndex(e => e.id === id);
  if (idx >= 0) {
    enquiries[idx].status = status;
    writeEnquiries(enquiries);
    return enquiries[idx];
  }
  return null;
}

// Pre-fetch listings on startup
async function init() {
  try {
    await fetchListings();
  } catch (err) {
    console.log('✗ Initial Guesty fetch failed:', err.message);
  }
}

module.exports = {
  fetchListings,
  fetchListingById,
  fetchCalendar,
  readEnquiries,
  createEnquiry,
  updateEnquiryStatus,
  init
};
