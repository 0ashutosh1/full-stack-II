import { Link } from 'react-router-dom'

function About() {
  const notes = [
    'Use React.lazy for route components.',
    'Wrap lazy routes with Suspense fallback.',
    'Keep fallback lightweight for better UX.',
    'Defer non-critical features until interaction.',
    'Measure with Lighthouse and Web Vitals.',
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Route Chunks</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Architecture</p>
        <h1>How Code Splitting Works</h1>
        <p>
          Route components are loaded using dynamic imports so the browser downloads only
          what is required for the current path.
        </p>
      </div>

      <div className="card-panel">
        <h3>Route-level Lazy Loading</h3>
        <p>
          Each route is split into a separate chunk by Vite. Initial load stays smaller,
          and future route chunks are fetched on navigation.
        </p>
        <pre className="code-block">
{`const Home = lazy(() => import('./pages/Home'))
const Metrics = lazy(() => import('./pages/Contact'))

<Suspense fallback={<RouteLoader />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/metrics" element={<Metrics />} />
  </Routes>
</Suspense>`}
        </pre>
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>Optimization Notes</h4>
          <ul className="clean-list">
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mini-panel">
          <h4>Benefits</h4>
          <p>Faster first paint, lower initial transfer, and better interactivity on weak devices.</p>
        </div>
      </div>

      <div className="card-panel">
        <h3>Practical Guidelines</h3>
        <p>
          Lazy-load pages, dashboards, and heavy data visualizations. Keep top-level layout,
          navigation, and critical content in the main bundle.
        </p>
      </div>

      <div className="centered-row">
        <Link to="/on-demand" className="btn">
          Open On-demand Components
        </Link>
      </div>
    </div>
  )
}

export default About
