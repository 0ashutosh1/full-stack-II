import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <h1>🚀 Welcome to EXP3</h1>
        <p>Routing in Single Page Applications (SPA)</p>
        <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
          Learn how to implement client-side routing using React Router
        </p>
      </div>

      <div className="grid">
        <div className="grid-item">
          <h4>📖 What is Routing?</h4>
          <p>
            Routing allows navigation between different pages without full page
            reloads. React Router enables client-side routing in SPAs.
          </p>
          <Link to="/about" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Learn More
          </Link>
        </div>
        <div className="grid-item">
          <h4>💡 SPA Benefits</h4>
          <p>
            Single Page Applications provide fast navigation, better UX, and
            smooth interactions by loading content dynamically.
          </p>
          <Link to="/projects" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
            See Examples
          </Link>
        </div>
        <div className="grid-item">
          <h4>📬 Get in Touch</h4>
          <p>
            Have questions about routing? Want to discuss SPA architecture?
            Let's connect and explore together.
          </p>
          <Link to="/contact" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Contact Us
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>Key Features</h2>
        <div className="card">
          <h3>✨ Client-Side Navigation</h3>
          <p>
            Navigate between pages without server requests. The entire application
            is loaded once, and only content changes dynamically.
          </p>
        </div>
        <div className="card">
          <h3>🎯 Dynamic Routes</h3>
          <p>
            Support for URL parameters, query strings, and nested routes. Create
            complex navigation structures easily.
          </p>
        </div>
        <div className="card">
          <h3>⚡ Performance</h3>
          <p>
            Fast page transitions, reduced server load, and improved user
            experience through instant navigation.
          </p>
        </div>
        <div className="card">
          <h3>🔗 Browser History</h3>
          <p>
            Full browser history support - back/forward buttons work seamlessly,
            and URLs are bookmarkable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
