const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid bearer token' })
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'exp10_default_secret')
    req.user = decoded
    return next()
  } catch {
    return res.status(401).json({ message: 'Token expired or invalid' })
  }
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' })
    }
    return next()
  }
}

module.exports = { verifyToken, authorizeRoles }
