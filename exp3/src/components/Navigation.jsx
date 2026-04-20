import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            ℹ️ About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
            💼 Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            📧 Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
