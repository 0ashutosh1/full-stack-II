import { Link, useLocation } from 'react-router-dom'
import { useAppState } from '../state/appState'

function Navigation() {
  const location = useLocation()
  const { cartCount, userName } = useAppState()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="main-nav">
      <div className="nav-inner">
        <div className="brand-block">
          <p className="brand-title">EXP4</p>
          <p className="brand-subtitle">State Management in SPA</p>
        </div>

        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/catalog" className={isActive('/catalog') ? 'active' : ''}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/insights" className={isActive('/insights') ? 'active' : ''}>
              Insights
            </Link>
          </li>
          <li>
            <Link to="/settings" className={isActive('/settings') ? 'active' : ''}>
              Settings
            </Link>
          </li>
        </ul>

        <div className="nav-meta">
          <span className="chip">User: {userName}</span>
          <span className="chip chip-strong">Cart Items: {cartCount}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
