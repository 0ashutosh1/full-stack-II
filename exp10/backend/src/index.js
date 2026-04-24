const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const authRoutes = require('./routes/authRoutes')
const protectedRoutes = require('./routes/protectedRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    experiment: 'EXP10 - Deployment and DevOps',
    author: 'kumar ashutosh',
    uid: '23bis70130',
    features: [
      'Role-based authorization',
      'Docker containerization',
      'Docker Compose setup',
      'PM2 process management',
    ],
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/access', protectedRoutes)

app.listen(PORT, () => {
  console.log(`EXP10 backend running on port ${PORT}`)
})
