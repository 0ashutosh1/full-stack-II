const express = require('express')
const { verifyToken, authorizeRoles } = require('../middleware/auth')

const router = express.Router()

router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  return res.json({
    message: 'Admin dashboard access granted',
    data: ['Deploy pipeline status: green', 'Container health: healthy'],
  })
})

router.get('/editor', verifyToken, authorizeRoles('admin', 'editor'), (req, res) => {
  return res.json({
    message: 'Editor content access granted',
    data: ['Draft release note', 'Compose environment checklist'],
  })
})

router.get('/viewer', verifyToken, authorizeRoles('admin', 'editor', 'viewer'), (req, res) => {
  return res.json({
    message: 'Viewer report access granted',
    data: ['Public performance metrics', 'Read-only deployment logs'],
  })
})

module.exports = router
