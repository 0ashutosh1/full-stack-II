import { Link } from 'react-router-dom'

function About() {
  const notes = [
    'React.memo wraps a component and skips rendering when props stay the same.',
    'A custom comparison function lets you define exactly which props matter.',
    'useMemo caches expensive calculations between renders.',
    'useCallback stabilizes function references passed to memoized children.',
    'Memoization works best when props are stable and immutable.',
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Memoization</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Architecture</p>
        <h1>React.memo and Custom Prop Comparison</h1>
        <p>
          This page explains why memoization matters and how a custom comparison function can
          prevent a noisy parent from re-rendering a stable child component.
        </p>
      </div>

      <div className="card-panel">
        <h3>React.memo Pattern</h3>
        <p>
          Memoized children are ideal for item cards, tooltips, charts, and dashboards that
          receive the same props most of the time.
        </p>
        <pre className="code-block">
{`import { memo } from 'react'

function InsightCard({ insight, selected, onToggle }) {
  return <article>...</article>
}

function areEqual(prevProps, nextProps) {
  return prevProps.selected === nextProps.selected && prevProps.insight.id === nextProps.insight.id
}

export default memo(InsightCard, areEqual)`}
        </pre>
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>When to use it</h4>
          <ul className="clean-list">
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mini-panel">
          <h4>Common wins</h4>
          <p>Large lists, dashboards, charts, and controls that re-render often because of nearby state updates.</p>
        </div>
      </div>

      <div className="card-panel">
        <h3>Custom Prop Comparison</h3>
        <p>
          Use a comparator only when the default shallow comparison is not enough. In this lab,
          the card ignores the stable callback and checks the identity and score of each insight.
        </p>
      </div>

      <div className="centered-row">
        <Link to="/split-demo" className="btn">
          See Route Split Demo
        </Link>
      </div>
    </div>
  )
}

export default About
