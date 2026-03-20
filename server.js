// Load environment: .env file, then Render secret file as override
require('dotenv').config();
try {
  const secretPaths = ['/etc/secrets/.env', '/etc/secrets/env'];
  for (const sp of secretPaths) {
    if (require('fs').existsSync(sp)) {
      require('dotenv').config({ path: sp, override: true });
      console.log('✓ Loaded secrets from', sp);
      break;
    }
  }
} catch (e) { console.log('Secret file load skipped:', e.message); }
// Log env status (no values)
console.log('ENV:', {
  NODE_ENV: process.env.NODE_ENV || 'unset',
  JWT_SECRET: process.env.JWT_SECRET ? 'SET' : 'MISSING',
  GUESTY_CLIENT_ID: process.env.GUESTY_CLIENT_ID ? 'SET' : 'MISSING',
  GUESTY_CLIENT_SECRET: process.env.GUESTY_CLIENT_SECRET ? 'SET' : 'MISSING'
});
const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDb } = require('./db/init');
const guesty = require('./services/guesty');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
initDb();

// Initialize Guesty (non-blocking)
guesty.init();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/listings', require('./routes/listings'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/enquiry', require('./routes/enquiries'));
app.use('/api/enquiries', require('./routes/enquiries'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV }));

// SPA fallback — serve portal/login from public/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Residence Studio running at http://localhost:${PORT}\n`);
});
