import { Link } from 'react-router-dom'

function Contact() {
  const checklist = [
    'Measure initial load with Lighthouse.',
    'Identify routes and modules that can be delayed.',
    'Add route-level lazy loading first.',
    'Add on-demand component imports.',
    'Use lightweight fallback UI.',
    'Re-run Lighthouse and compare.',
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Metrics</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Validation</p>
        <h1>Performance Measurement Checklist</h1>
        <p>
          Lazy loading is useful when verified with metrics. This checklist can be used
          as your lab evaluation flow.
        </p>
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>Checklist</h4>
          <ul className="clean-list">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mini-panel">
          <h4>Expected Outcome</h4>
          <p>Reduced initial script transfer and faster first-contentful render on fresh load.</p>
          <p style={{ marginTop: '0.8rem' }}>
            Tradeoff: first visit to a lazy route includes network delay for that chunk.
          </p>
        </div>
      </div>

      <div className="centered-row">
        <Link to="/" className="btn btn-ghost">
          Back to Overview
        </Link>
      </div>
    </div>
  )
}

export default Contact
