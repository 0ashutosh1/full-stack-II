const bcrypt = require('bcryptjs')

const seedUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'editor', password: 'editor123', role: 'editor' },
  { id: 3, username: 'viewer', password: 'viewer123', role: 'viewer' },
]

const users = seedUsers.map((user) => ({
  id: user.id,
  username: user.username,
  role: user.role,
  passwordHash: bcrypt.hashSync(user.password, 8),
}))

module.exports = users
