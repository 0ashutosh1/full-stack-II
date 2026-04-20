import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Contact</span>
      </div>

      <div className="hero">
        <h1>Get in Touch</h1>
        <p>Have questions about React Router and SPA routing? Let's connect!</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        {submitted && (
          <div style={{
            background: '#4caf50',
            color: 'white',
            padding: '1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            ✅ Message sent successfully! Thank you for reaching out.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ background: '#333', padding: '2rem', borderRadius: '8px' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#667eea', fontWeight: 600 }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: '#444',
                border: '1px solid #555',
                borderRadius: '6px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#667eea', fontWeight: 600 }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: '#444',
                border: '1px solid #555',
                borderRadius: '6px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#667eea', fontWeight: 600 }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              style={{
                width: '100%',
                padding: '0.8rem',
                background: '#444',
                border: '1px solid #555',
                borderRadius: '6px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#667eea', fontWeight: 600 }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="6"
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                background: '#444',
                border: '1px solid #555',
                borderRadius: '6px',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: '100%', padding: '1rem' }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Other Ways to Connect</h3>
          <p style={{ color: '#aaa', marginBottom: '1rem' }}>
            📧 Email: hello@example.com<br />
            💬 Discord: Join our community<br />
            🐙 GitHub: Check out our projects
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link to="/" className="btn btn-secondary">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Contact
