const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const users = require('../data/users')
const { verifyToken } = require('../middleware/auth')

const router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' })
  }

  const user = users.find((entry) => entry.username === username)
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const validPassword = bcrypt.compareSync(password, user.passwordHash)
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign(
    { sub: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET || 'exp10_default_secret',
    { expiresIn: '2h' },
  )

  return res.json({ token, role: user.role, username: user.username })
})

router.get('/profile', verifyToken, (req, res) => {
  return res.json({
    message: 'Authenticated profile',
    user: {
      id: req.user.sub,
      username: req.user.username,
      role: req.user.role,
    },
  })
})

module.exports = router
