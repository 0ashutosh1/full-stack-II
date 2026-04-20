import { Link } from 'react-router-dom'

function Projects() {
  const projectList = [
    {
      id: 1,
      name: 'E-Commerce Dashboard',
      description: 'Multi-page dashboard with product listing, user profiles, and order history',
      routes: ['/products', '/users', '/orders', '/settings'],
      technologies: ['React Router', 'State Management', 'API Integration']
    },
    {
      id: 2,
      name: 'Blog Platform',
      description: 'Dynamic blog with post listings, individual post pages, and category filtering',
      routes: ['/posts', '/posts/:id', '/categories/:name', '/about'],
      technologies: ['React Router', 'URL Parameters', 'Query Strings']
    },
    {
      id: 3,
      name: 'Social Media App',
      description: 'User profiles, feed, messaging, and notifications with nested routing',
      routes: ['/feed', '/profile/:username', '/messages', '/notifications'],
      technologies: ['Nested Routes', 'useLocation', 'useNavigate']
    },
    {
      id: 4,
      name: 'Admin Panel',
      description: 'Protected routes with authentication, data management, and analytics',
      routes: ['/dashboard', '/users', '/analytics', '/settings'],
      technologies: ['Protected Routes', 'Route Guards', 'Layout Routes']
    },
    {
      id: 5,
      name: 'Video Streaming Platform',
      description: 'Browse videos, watch pages, playlist management, and recommendations',
      routes: ['/browse', '/watch/:videoId', '/playlists', '/channel/:id'],
      technologies: ['Dynamic Routes', 'Lazy Loading', 'Route Transitions']
    },
    {
      id: 6,
      name: 'Portfolio Website',
      description: 'Showcase projects, skills, experience, and contact information',
      routes: ['/', '/about', '/projects', '/blog', '/contact'],
      technologies: ['Smooth Navigation', 'Scroll to Top', 'Link Components']
    }
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Projects</span>
      </div>

      <div className="hero">
        <h1>Projects Using Routing</h1>
        <p>Real-world examples of SPAs with React Router</p>
      </div>

      <div className="grid">
        {projectList.map((project) => (
          <div key={project.id} className="grid-item" style={{ textAlign: 'left' }}>
            <h4 style={{ marginBottom: '0.8rem' }}>{project.name}</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
              {project.description}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#667eea', marginBottom: '0.5rem' }}>
                Routes:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.routes.map((route, idx) => (
                  <span key={idx} style={{
                    background: '#444',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: '#aaa'
                  }}>
                    {route}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#764ba2', marginBottom: '0.5rem' }}>
                Technologies:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} style={{
                    background: '#667eea20',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: '#667eea',
                    border: '1px solid #667eea40'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', background: '#333', padding: '2rem', borderRadius: '8px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Advanced Routing Patterns</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#764ba2' }}>🔐 Protected Routes</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Routes that require authentication before access
            </p>
          </div>
          <div>
            <h4 style={{ color: '#764ba2' }}>📦 Lazy Loading</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Code splitting for better performance
            </p>
          </div>
          <div>
            <h4 style={{ color: '#764ba2' }}>🎯 Dynamic Routes</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Routes with parameters for dynamic content
            </p>
          </div>
          <div>
            <h4 style={{ color: '#764ba2' }}>🔄 Nested Routes</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Complex navigation hierarchies
            </p>
          </div>
          <div>
            <h4 style={{ color: '#764ba2' }}>📍 Query Strings</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Filtering and pagination via URL
            </p>
          </div>
          <div>
            <h4 style={{ color: '#764ba2' }}>🚫 404 Handling</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Fallback routes for invalid paths
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/contact" className="btn btn-secondary">
          Have Questions? Contact Us →
        </Link>
      </div>
    </div>
  )
}

export default Projects
