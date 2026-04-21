import { Link } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'

const LargeChart = lazy(() => import('../components/LargeChart'))
const ImageWall = lazy(() => import('../components/ImageWall'))

function Projects() {
  const [showChart, setShowChart] = useState(false)
  const [showMedia, setShowMedia] = useState(false)

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>On Demand UI</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Component Split</p>
        <h1>Load Heavy Modules Only When Needed</h1>
        <p>
          These panels are intentionally lazy-loaded. Click a button and watch the related
          JS chunk load at interaction time.
        </p>
      </div>

      <div className="inline-actions">
        <button type="button" className="btn" onClick={() => setShowChart((prev) => !prev)}>
          {showChart ? 'Hide' : 'Load'} Chart Module
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setShowMedia((prev) => !prev)}>
          {showMedia ? 'Hide' : 'Load'} Media Module
        </button>
      </div>

      <div className="card-panel">
        <h3>Suspense in Components</h3>
        <p>
          Each module below is wrapped with Suspense. Until the module finishes loading,
          a tiny fallback placeholder is rendered.
        </p>

        <div className="info-grid">
          <div>
            {showChart ? (
              <Suspense fallback={<p className="muted-text">Loading chart chunk...</p>}>
                <LargeChart />
              </Suspense>
            ) : (
              <p className="muted-text">Chart module not loaded yet.</p>
            )}
          </div>
          <div>
            {showMedia ? (
              <Suspense fallback={<p className="muted-text">Loading media chunk...</p>}>
                <ImageWall />
              </Suspense>
            ) : (
              <p className="muted-text">Media module not loaded yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className="centered-row">
        <Link to="/metrics" className="btn">See Optimization Metrics</Link>
      </div>
    </div>
  )
}

export default Projects
