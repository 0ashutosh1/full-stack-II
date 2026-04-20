import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>About</span>
      </div>

      <div className="hero">
        <h1>About React Router</h1>
        <p>Understand the fundamentals of client-side routing</p>
      </div>

      <div className="card">
        <h3>What is React Router?</h3>
        <p>
          React Router is a library that enables navigation among different views in
          a React application without the page refreshing. It's the standard routing
          library for React and provides powerful features for building SPAs.
        </p>
      </div>

      <div className="card">
        <h3>Core Concepts</h3>
        <ul style={{ marginLeft: '1.5rem', color: '#aaa', lineHeight: 1.8 }}>
          <li><strong>BrowserRouter:</strong> Wraps your app and enables routing</li>
          <li><strong>Routes:</strong> Container for all route definitions</li>
          <li><strong>Route:</strong> Maps a path to a component</li>
          <li><strong>Link:</strong> Navigation component for internal links</li>
          <li><strong>useLocation:</strong> Hook to get current location/path</li>
          <li><strong>useParams:</strong> Hook to access URL parameters</li>
          <li><strong>useNavigate:</strong> Hook for programmatic navigation</li>
        </ul>
      </div>

      <div className="card">
        <h3>Advantages of SPA Routing</h3>
        <ul style={{ marginLeft: '1.5rem', color: '#aaa', lineHeight: 1.8 }}>
          <li>⚡ <strong>Speed:</strong> No full page reload, instant transitions</li>
          <li>📱 <strong>User Experience:</strong> Smooth, app-like feel</li>
          <li>💾 <strong>Reduced Bandwidth:</strong> Only necessary data transfers</li>
          <li>🎯 <strong>State Management:</strong> Easier to maintain app state</li>
          <li>🔍 <strong>SEO:</strong> Can implement client-side rendering strategies</li>
          <li>🚀 <strong>Performance:</strong> Lazy load components and data</li>
        </ul>
      </div>

      <div className="card">
        <h3>Common Use Cases</h3>
        <p>
          SPAs with routing are perfect for dashboards, email clients, project
          management tools, collaborative platforms, and any application requiring
          seamless navigation and real-time updates.
        </p>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/projects" className="btn btn-secondary">
          View Projects →
        </Link>
      </div>
    </div>
  )
}

export default About
