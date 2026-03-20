const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db/init');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

const JWT_KEY = process.env.JWT_SECRET || 'residence_studio_fallback_jwt_key_2024';

function signToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name, role: user.role, company_name: user.company_name },
    JWT_KEY, { expiresIn: '7d' }
  );
}

router.post('/register', (req, res) => {
  const { email, password, name, company_name, phone } = req.body;
  if (!email || !password || !name || !company_name) return res.status(400).json({ error: 'Alla obligatoriska fält måste fyllas i.' });
  if (password.length < 6) return res.status(400).json({ error: 'Lösenordet måste vara minst 6 tecken.' });
  if (db.getUserByEmail(email)) return res.status(409).json({ error: 'E-postadressen är redan registrerad.' });
  const user = db.createUser({ email, password_hash: bcrypt.hashSync(password, 10), name, role: 'company', company_name, phone: phone || null });
  res.status(201).json({ token: signToken(user), user: { id: user.id, email: user.email, name: user.name, company_name: user.company_name, role: user.role } });

  // Fire emails in background — never blocks response
  const { sendEmails } = require('../utils/mailer');
  sendEmails('registration', {
    companyName: company_name, email, name,
    firstName: name ? name.split(' ')[0] : '',
    phone: phone || null
  }).catch(err => console.error('Email error:', err.message));
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'E-post och lösenord krävs.' });
  const user = db.getUserByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: 'Felaktig e-post eller lösenord.' });
  res.json({ token: signToken(user), user: { id: user.id, email: user.email, name: user.name, company_name: user.company_name, role: user.role } });
});

router.get('/me', requireAuth, (req, res) => {
  const user = db.getUserById(req.user.id);
  if (!user) return res.status(404).json({ error: 'Användare hittades inte.' });
  const { password_hash, ...safe } = user;
  res.json(safe);
});

module.exports = router;
