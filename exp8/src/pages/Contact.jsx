import { Link } from 'react-router-dom'
import { performanceTools } from '../data/performanceData'

function Contact() {
  const toolCategories = [
    'Keep DevTools open while profiling network, paint, and CPU work.',
    'Use Lighthouse for repeatable performance reports in the browser.',
    'Compare real-world loads with WebPageTest and GTmetrix.',
    'Track component re-renders with React DevTools Profiler.',
    'Inspect bundle size changes with a bundle analyzer.',
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Tools</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Essential Tools</p>
        <h1>Performance auditing toolkit</h1>
        <p>
          These tools help validate the effect of memoization, lazy routes, and expensive
          calculation optimizations.
        </p>
      </div>

      <div className="info-grid">
        {performanceTools.map((tool) => (
          <div key={tool.name} className="mini-panel">
            <h4>{tool.name}</h4>
            <p>{tool.purpose}</p>
          </div>
        ))}
      </div>

      <div className="card-panel">
        <h3>How to use them in this lab</h3>
        <ul className="clean-list">
          {toolCategories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
