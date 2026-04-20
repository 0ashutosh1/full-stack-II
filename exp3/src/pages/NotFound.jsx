import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page-container">
      <div className="not-found">
        <h1>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#aaa', marginBottom: '1rem' }}>
          Oops! Page Not Found
        </h2>
        <p>
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>

        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '3rem' }}>🔍</p>
        </div>

        <p style={{ color: '#aaa', marginBottom: '2rem' }}>
          Try navigating to one of these pages:
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn">
            🏠 Home
          </Link>
          <Link to="/about" className="btn btn-secondary">
            ℹ️ About
          </Link>
          <Link to="/projects" className="btn">
            💼 Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            📧 Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
