import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page-container">
      <div className="not-found">
        <h1>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#576574', marginBottom: '1rem' }}>
          Route Not Found
        </h2>
        <p>
          The route does not exist in this SPA. Use one of the valid pages below.
        </p>

        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '3rem' }}>?</p>
        </div>

        <p style={{ color: '#576574', marginBottom: '2rem' }}>
          Try one of these pages:
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn">
            Dashboard
          </Link>
          <Link to="/catalog" className="btn btn-ghost">
            Catalog
          </Link>
          <Link to="/insights" className="btn">
            Insights
          </Link>
          <Link to="/settings" className="btn btn-ghost">
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
