import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-container">
      <div className="hero-panel">
        <p className="eyebrow">Performance Optimization</p>
        <h1>React Lazy Loading in SPA</h1>
        <p>
          This experiment demonstrates how lazy loading improves startup performance by
          splitting route bundles and loading heavy UI only when needed.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Main Bundle Goal</p>
          <h3>Smaller Initial JS</h3>
        </div>
        <div className="stat-card">
          <p>Technique</p>
          <h3>React.lazy + Suspense</h3>
        </div>
        <div className="stat-card">
          <p>Route Strategy</p>
          <h3>Code Splitting</h3>
        </div>
        <div className="stat-card">
          <p>Heavy UI Strategy</p>
          <h3>On-demand Import</h3>
        </div>
      </div>

      <div className="card-panel">
        <h2>What to Observe</h2>
        <div className="line-list">
          <div className="line-item">
            <p className="line-title">Open DevTools Network tab</p>
            <p className="muted-text">Chunk files download only when routes are visited.</p>
          </div>
          <div className="line-item">
            <p className="line-title">Navigate to On Demand UI</p>
            <p className="muted-text">Heavy demo widgets are loaded after click, not at startup.</p>
          </div>
          <div className="line-item">
            <p className="line-title">Notice Suspense fallback</p>
            <p className="muted-text">Loading placeholder keeps UX responsive while chunks load.</p>
          </div>
        </div>
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>Route-level Lazy Loading</h4>
          <p>
            Each page is imported dynamically, reducing initial parse and execution cost.
          </p>
        </div>
        <div className="mini-panel">
          <h4>Component-level Lazy Loading</h4>
          <p>
            Expensive widgets are deferred behind user intent, so first content appears faster.
          </p>
        </div>
        <div className="mini-panel">
          <h4>Continue</h4>
          <p>
            Visit Route Chunks for implementation details and On Demand UI for live behavior.
          </p>
          <div className="inline-actions" style={{ marginTop: '0.8rem' }}>
            <Link to="/code-splitting" className="btn">Route Chunks</Link>
            <Link to="/on-demand" className="btn btn-ghost">On Demand UI</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
