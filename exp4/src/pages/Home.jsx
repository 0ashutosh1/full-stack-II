import { Link } from 'react-router-dom'
import { useAppDispatch, useAppState } from '../state/appState'

function Home() {
  const { userName, budget, cartCount, cartTotal, remainingBudget, cartLineItems } = useAppState()
  const dispatch = useAppDispatch()

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <div className="page-container">
      <div className="hero-panel">
        <p className="eyebrow">Single Page Application</p>
        <h1>Global State Dashboard</h1>
        <p>
          This dashboard reads shared state from Context + Reducer. Add products from Catalog,
          then come back here to see cart totals update instantly.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Current User</p>
          <h3>{userName}</h3>
        </div>
        <div className="stat-card">
          <p>Budget</p>
          <h3>Rs. {budget.toLocaleString()}</h3>
        </div>
        <div className="stat-card">
          <p>Cart Items</p>
          <h3>{cartCount}</h3>
        </div>
        <div className="stat-card">
          <p>Total Cost</p>
          <h3>Rs. {cartTotal.toLocaleString()}</h3>
        </div>
        <div className="stat-card">
          <p>Remaining</p>
          <h3 className={remainingBudget < 0 ? 'danger-text' : ''}>
            Rs. {remainingBudget.toLocaleString()}
          </h3>
        </div>
      </div>

      <div className="card-panel">
        <div className="row-spread">
          <h2>Cart Snapshot</h2>
          <div className="inline-actions">
            <Link to="/catalog" className="btn">
              Go to Catalog
            </Link>
            <button type="button" className="btn btn-ghost" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>

        {cartLineItems.length === 0 ? (
          <p className="muted-text">No items in cart. Add products from the Catalog route.</p>
        ) : (
          <div className="line-list">
            {cartLineItems.map((item) => (
              <div key={item.id} className="line-item">
                <div>
                  <p className="line-title">{item.name}</p>
                  <p className="muted-text">Qty: {item.quantity}</p>
                </div>
                <strong>Rs. {item.subtotal.toLocaleString()}</strong>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="info-grid">
        <div className="mini-panel">
          <h4>What this demonstrates</h4>
          <p>
            Shared app state across routes, reducer-based actions, and local persistence
            using one predictable data flow.
          </p>
        </div>
        <div className="mini-panel">
          <h4>Try this flow</h4>
          <p>
            Open Catalog, add products, mark favorites, then visit Settings to change
            username and theme. Changes reflect everywhere.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
