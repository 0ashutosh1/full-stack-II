import { Link } from 'react-router-dom'
import { useAppDispatch, useAppState } from '../state/appState'

function Projects() {
  const { products, favorites, cartLineItems } = useAppState()
  const dispatch = useAppDispatch()

  const getQuantity = (id) => {
    const foundItem = cartLineItems.find((item) => item.id === id)
    return foundItem ? foundItem.quantity : 0
  }

  const addItem = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: id })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id })
  }

  return (
    <div className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Catalog</span>
      </div>

      <div className="hero-panel compact">
        <p className="eyebrow">Shared State in Action</p>
        <h1>Product Catalog</h1>
        <p>
          Add or remove products here and verify totals on Dashboard. Favorites are
          global too, so they stay marked across navigation.
        </p>
      </div>

      <div className="catalog-grid">
        {products.map((product) => {
          const quantity = getQuantity(product.id)
          const isFavorite = favorites.includes(product.id)

          return (
            <article key={product.id} className="product-card">
              <div className="row-spread">
                <h4>{product.name}</h4>
                <button
                  type="button"
                  className={`icon-btn ${isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="Toggle favorite"
                >
                  {isFavorite ? 'Favorite' : 'Mark Favorite'}
                </button>
              </div>

              <p className="price">Rs. {product.price.toLocaleString()}</p>
              <p className="muted-text">
                Current quantity in cart: <strong>{quantity}</strong>
              </p>

              <div className="inline-actions" style={{ marginTop: '1rem' }}>
                <button type="button" className="btn" onClick={() => addItem(product.id)}>
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  disabled={quantity === 0}
                  onClick={() => removeItem(product.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <div className="card-panel">
        <h3>State Persistence</h3>
        <p>
          Refresh the page and your cart, favorites, theme, and user profile remain.
          This is persisted in localStorage by the global provider.
        </p>
        <div className="centered-row">
          <Link to="/" className="btn btn-ghost">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
