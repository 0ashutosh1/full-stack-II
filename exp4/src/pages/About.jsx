import { Link } from 'react-router-dom'
import { useAppState } from '../state/appState'

function About() {
  const { favorites, cartCount, theme } = useAppState()

  const actionList = [
    'ADD_TO_CART',
    'CHANGE_QTY',
    'REMOVE_FROM_CART',
    'TOGGLE_FAVORITE',
    'SET_NAME',
    'SET_BUDGET',
    'SET_THEME',
    'CLEAR_CART',
  ]

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Insights</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Architecture</p>
        <h1>How State Flows in EXP4</h1>
        <p>
          The app keeps a single global store in Context. Every route reads from the
          same state and dispatches actions to one reducer.
        </p>
      </div>

      <div className="card-panel">
        <h3>Data Pipeline</h3>
        <p>
          UI events dispatch actions. The reducer creates the next state. Derived values
          like cart total and remaining budget are computed once and consumed everywhere.
        </p>
        <pre className="code-block">
{`Component Event -> dispatch(action)
dispatch(action) -> reducer(state, action)
reducer -> new global state
new state -> all subscribed routes re-render`}
        </pre>
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>Live State Values</h4>
          <p>Theme: {theme}</p>
          <p>Favorites: {favorites.length}</p>
          <p>Cart Items: {cartCount}</p>
        </div>
        <div className="mini-panel">
          <h4>Reducer Actions</h4>
          <ul className="clean-list">
            {actionList.map((actionName) => (
              <li key={actionName}>{actionName}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-panel">
        <h3>Why this pattern works for SPA</h3>
        <p>
          It avoids prop drilling, keeps updates predictable, and centralizes all
          state transitions in one reducer function. For larger apps, this can be
          extended to Redux or Zustand.
        </p>
      </div>

      <div className="centered-row">
        <Link to="/catalog" className="btn">
          Open Catalog
        </Link>
      </div>
    </div>
  )
}

export default About
