import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="main-nav">
      <div className="nav-inner">
        <div className="brand-block">
          <p className="brand-title">EXP8</p>
          <p className="brand-subtitle">Performance Optimization and Advanced Patterns</p>
        </div>

        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="/memoization" className={isActive('/memoization') ? 'active' : ''}>
              Memoization
            </Link>
          </li>
          <li>
            <Link to="/split-demo" className={isActive('/split-demo') ? 'active' : ''}>
              Split Demo
            </Link>
          </li>
          <li>
            <Link to="/tools" className={isActive('/tools') ? 'active' : ''}>
              Metrics
            </Link>
          </li>
        </ul>

        <div className="nav-meta">
          <span className="chip chip-strong">React.memo + useMemo + useCallback</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
