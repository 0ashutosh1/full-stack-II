import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import MemoizedInsightCard from '../components/MemoizedInsightCard'
import { AUTHOR_NAME, AUTHOR_UID, performanceInsights } from '../data/performanceData'

function Home() {
  const [query, setQuery] = useState('')
  const [minScore, setMinScore] = useState(90)
  const [activeCategory, setActiveCategory] = useState('All')
  const [highlightedIds, setHighlightedIds] = useState(['memo-1'])

  const categories = useMemo(() => {
    const uniqueCategories = new Set(['All'])
    performanceInsights.forEach((insight) => uniqueCategories.add(insight.category))
    return Array.from(uniqueCategories)
  }, [])

  const filteredInsights = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return performanceInsights
      .filter((insight) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          insight.title.toLowerCase().includes(normalizedQuery) ||
          insight.details.toLowerCase().includes(normalizedQuery) ||
          insight.category.toLowerCase().includes(normalizedQuery)

        const matchesScore = insight.score >= minScore
        const matchesCategory = activeCategory === 'All' || insight.category === activeCategory

        return matchesQuery && matchesScore && matchesCategory
      })
      .sort((first, second) => second.score - first.score)
  }, [activeCategory, minScore, query])

  const performanceSummary = useMemo(() => {
    let weightedTotal = 0
    let pressure = 0

    for (const insight of filteredInsights) {
      weightedTotal += insight.score

      for (let index = 0; index < 1500; index += 1) {
        pressure += Math.sqrt(insight.score + (index % 11))
      }
    }

    const averageScore = filteredInsights.length
      ? Math.round(weightedTotal / filteredInsights.length)
      : 0

    return {
      averageScore,
      count: filteredInsights.length,
      pressure: pressure.toFixed(0),
      bestItem: filteredInsights[0] ?? null,
    }
  }, [filteredInsights])

  const toggleHighlight = useCallback((id) => {
    setHighlightedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((existingId) => existingId !== id)
        : [...currentIds, id],
    )
  }, [])

  const resetFilters = useCallback(() => {
    setQuery('')
    setMinScore(90)
    setActiveCategory('All')
  }, [])

  return (
    <div className="page-container">
      <div className="hero-panel">
        <p className="eyebrow">Performance Optimization</p>
        <h1>React.memo, useMemo, useCallback, and Lazy Routes</h1>
        <p>
          EXP8 focuses on render control and bundle control. Memoized components skip avoidable
          work, while route-based splitting keeps the first bundle smaller.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Visible Insights</p>
          <h3>{performanceSummary.count}</h3>
        </div>
        <div className="stat-card">
          <p>Average Score</p>
          <h3>{performanceSummary.averageScore}</h3>
        </div>
        <div className="stat-card">
          <p>Render Pressure</p>
          <h3>{performanceSummary.pressure}</h3>
        </div>
        <div className="stat-card">
          <p>Best Match</p>
          <h3>{performanceSummary.bestItem ? performanceSummary.bestItem.title : 'None'}</h3>
        </div>
      </div>

      <div className="card-panel">
        <div className="row-spread">
          <h2>Memoized Insight Explorer</h2>
          <button type="button" className="btn btn-ghost" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

        <div className="controls">
          <label className="control-group">
            <span>Search</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="React.memo, Lighthouse, bundle..."
            />
          </label>

          <label className="control-group">
            <span>Minimum Score: {minScore}</span>
            <input
              type="range"
              min="70"
              max="100"
              value={minScore}
              onChange={(event) => setMinScore(Number(event.target.value))}
            />
          </label>

          <label className="control-group">
            <span>Category</span>
            <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="line-list">
          <div className="line-item">
            <p className="line-title">React.memo</p>
            <p className="muted-text">Use a memoized child component so unrelated parent state changes do not re-render it.</p>
          </div>
          <div className="line-item">
            <p className="line-title">Custom prop comparison</p>
            <p className="muted-text">The memoized card uses a custom equality function to block unnecessary updates.</p>
          </div>
          <div className="line-item">
            <p className="line-title">useMemo and useCallback</p>
            <p className="muted-text">Filtering, ranking, and event handlers stay stable across renders.</p>
          </div>
        </div>
      </div>

      <div className="insight-grid">
        {filteredInsights.map((insight, index) => (
          <MemoizedInsightCard
            key={insight.id}
            insight={insight}
            rank={index + 1}
            selected={highlightedIds.includes(insight.id)}
            onToggle={toggleHighlight}
          />
        ))}
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>Why this helps</h4>
          <p>
            The UI can update search, filters, and summary metrics without forcing every card
            to render again.
          </p>
        </div>
        <div className="mini-panel">
          <h4>Author</h4>
          <p>{AUTHOR_NAME}</p>
          <p>UID: {AUTHOR_UID}</p>
        </div>
        <div className="mini-panel">
          <h4>Next page</h4>
          <p>Open the memoization notes, route split demo, and tools pages using the navigation.</p>
          <div className="inline-actions" style={{ marginTop: '0.8rem' }}>
            <Link to="/memoization" className="btn">Memoization Notes</Link>
            <Link to="/split-demo" className="btn btn-ghost">Split Demo</Link>
          </div>
        </div>
      </div>

      <p className="footer-note">
        Built by {AUTHOR_NAME} | UID {AUTHOR_UID}
      </p>
    </div>
  )
}

export default Home
