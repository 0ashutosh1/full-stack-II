import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppState } from '../state/appState'

function Contact() {
  const { userName, budget, theme } = useAppState()
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    name: userName,
    budget,
    theme,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: 'SET_NAME', payload: formData.name.trim() })
    dispatch({ type: 'SET_BUDGET', payload: Number(formData.budget) })
    dispatch({ type: 'SET_THEME', payload: formData.theme })

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Settings</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Manage Global Store</p>
        <h1>App Settings</h1>
        <p>
          Update user profile and theme. These values are global, so Navigation,
          Dashboard, and Insights update immediately.
        </p>
      </div>

      <div className="form-wrap">
        {submitted && (
          <div className="success-banner">
            Settings saved to global state and localStorage.
          </div>
        )}

        <form onSubmit={handleSubmit} className="settings-form">
          <div className="field-block">
            <label className="field-label">Display Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="field-block">
            <label className="field-label">Budget (Rs.)</label>
            <input
              type="number"
              min="1"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Set shopping budget"
              required
            />
          </div>

          <div className="field-block">
            <label className="field-label">Theme</label>
            <select name="theme" value={formData.theme} onChange={handleChange}>
              <option value="ocean">Ocean</option>
              <option value="sunset">Sunset</option>
            </select>
          </div>

          <button type="submit" className="btn">
            Save Settings
          </button>
        </form>

        <div className="mini-panel" style={{ marginTop: '1rem' }}>
          <h4>Current Global Values</h4>
          <p>User: {userName}</p>
          <p>Budget: Rs. {budget.toLocaleString()}</p>
          <p>Theme: {theme}</p>
        </div>
      </div>

      <div className="centered-row">
        <Link to="/insights" className="btn btn-ghost">
          Read State Architecture
        </Link>
      </div>
    </div>
  )
}

export default Contact
