import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="main-nav">
      <div className="nav-inner">
        <div className="brand-block">
          <p className="brand-title">EXP5</p>
          <p className="brand-subtitle">React Performance with Lazy Loading</p>
        </div>

        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="/code-splitting" className={isActive('/code-splitting') ? 'active' : ''}>
              Route Chunks
            </Link>
          </li>
          <li>
            <Link to="/on-demand" className={isActive('/on-demand') ? 'active' : ''}>
              On Demand UI
            </Link>
          </li>
          <li>
            <Link to="/metrics" className={isActive('/metrics') ? 'active' : ''}>
              Metrics
            </Link>
          </li>
        </ul>

        <div className="nav-meta">
          <span className="chip chip-strong">Bundle Split Enabled</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
