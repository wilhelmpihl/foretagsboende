// Load .env from project root, then override with Render secret file if it exists
require('dotenv').config();
const secretEnv = '/etc/secrets/.env';
if (require('fs').existsSync(secretEnv)) {
  require('dotenv').config({ path: secretEnv, override: true });
  console.log('✓ Loaded secrets from /etc/secrets/.env');
}
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
