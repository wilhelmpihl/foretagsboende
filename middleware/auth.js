const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  let token = null;

  // Try Authorization header first
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7);
  }

  // Fallback to cookie
  if (!token && req.cookies) {
    token = req.cookies.rs_token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Ingen åtkomst. Logga in först.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Ogiltig eller utgången session.' });
  }
}

function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Adminbehörighet krävs.' });
    }
    next();
  });
}

module.exports = { requireAuth, requireAdmin };
