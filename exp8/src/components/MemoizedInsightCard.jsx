import { memo } from 'react'
import PropTypes from 'prop-types'

function MemoizedInsightCard({ insight, selected, onToggle, rank }) {
  return (
    <article className={`insight-card ${selected ? 'selected' : ''}`}>
      <div className="row-spread">
        <div>
          <p className="eyebrow">{insight.category}</p>
          <h3>{insight.title}</h3>
        </div>
        <span className="score-pill">{insight.score}</span>
      </div>

      <p className="muted-text">{insight.details}</p>

      <div className="row-spread card-footer">
        <span className="rank-chip">Rank #{rank}</span>
        <button type="button" className="btn btn-ghost" onClick={() => onToggle(insight.id)}>
          {selected ? 'Remove Highlight' : 'Highlight'}
        </button>
      </div>
    </article>
  )
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.selected === nextProps.selected &&
    prevProps.rank === nextProps.rank &&
    prevProps.insight.id === nextProps.insight.id &&
    prevProps.insight.score === nextProps.insight.score &&
    prevProps.insight.title === nextProps.insight.title &&
    prevProps.insight.category === nextProps.insight.category
  )
}

export default memo(MemoizedInsightCard, areEqual)

MemoizedInsightCard.propTypes = {
  insight: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  rank: PropTypes.number.isRequired,
}
