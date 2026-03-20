const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db/init');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

function signToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name, role: user.role, company_name: user.company_name },
    process.env.JWT_SECRET, { expiresIn: '7d' }
  );
}

router.post('/register', (req, res) => {
  const { email, password, name, company_name, phone } = req.body;
  if (!email || !password || !name || !company_name) return res.status(400).json({ error: 'Alla obligatoriska fält måste fyllas i.' });
  if (password.length < 6) return res.status(400).json({ error: 'Lösenordet måste vara minst 6 tecken.' });
  if (db.getUserByEmail(email)) return res.status(409).json({ error: 'E-postadressen är redan registrerad.' });
  const user = db.createUser({ email, password_hash: bcrypt.hashSync(password, 10), name, role: 'company', company_name, phone: phone || null });
  res.status(201).json({ token: signToken(user), user: { id: user.id, email: user.email, name: user.name, company_name: user.company_name, role: user.role } });

  // Fire lead email in background — never blocks response
  const { sendLeadEmail } = require('../utils/mailer');
  sendLeadEmail({
    type: 'registration',
    data: { company: company_name, email, name, phone: phone || null }
  }).catch(err => console.error('Lead email error:', err.message));
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
