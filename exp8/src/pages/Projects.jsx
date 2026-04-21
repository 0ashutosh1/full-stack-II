import { Link } from 'react-router-dom'
import { useMemo } from 'react'

function Projects() {
  const chunkBenefits = useMemo(
    () => [
      { name: 'Initial bundle size', detail: 'Only the active route bundle is downloaded at first load.' },
      { name: 'Parse cost', detail: 'Less JavaScript to parse means the UI becomes interactive sooner.' },
      { name: 'Network waterfalls', detail: 'Late-loaded chunks appear only when navigation requires them.' },
      { name: 'Maintenance', detail: 'Feature folders stay separated and easier to reason about.' },
    ],
    [],
  )

  const routeSavings = useMemo(() => {
    const baseBundle = 320
    const splitBundle = 178
    const saved = baseBundle - splitBundle
    const savedPercent = Math.round((saved / baseBundle) * 100)

    return { baseBundle, splitBundle, saved, savedPercent }
  }, [])

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Split Demo</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Route-Based Code Splitting</p>
        <h1>Loading pages only when needed</h1>
        <p>
          The router loads each page as an independent chunk so the browser does not download
          every page component on the first visit.
        </p>
      </div>

      <div className="card-panel">
        <h3>What route splitting changes</h3>
        <p>
          The app demonstrates the difference between a single monolithic entry file and a
          route-oriented bundle strategy. The main shell stays light, while pages arrive on demand.
        </p>

        <div className="split-summary">
          <div className="stat-card">
            <p>Base bundle</p>
            <h3>{routeSavings.baseBundle} KB</h3>
          </div>
          <div className="stat-card">
            <p>Split bundle</p>
            <h3>{routeSavings.splitBundle} KB</h3>
          </div>
          <div className="stat-card">
            <p>Saved</p>
            <h3>{routeSavings.saved} KB</h3>
          </div>
          <div className="stat-card">
            <p>Approx. savings</p>
            <h3>{routeSavings.savedPercent}%</h3>
          </div>
        </div>
      </div>

      <div className="info-grid">
        {chunkBenefits.map((item) => (
          <div key={item.name} className="mini-panel">
            <h4>{item.name}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="card-panel">
        <h3>Route loading pattern</h3>
        <pre className="code-block">
{`const Home = lazy(() => import('./pages/Home'))
const Memoization = lazy(() => import('./pages/About'))

<Suspense fallback={<RouteLoader />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/memoization" element={<Memoization />} />
  </Routes>
</Suspense>`}
        </pre>
      </div>

      <div className="centered-row">
        <Link to="/tools" className="btn">Open Performance Tools</Link>
      </div>
    </div>
  )
}

export default Projects
