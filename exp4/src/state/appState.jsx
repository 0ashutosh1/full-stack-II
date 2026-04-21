import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

const STORAGE_KEY = 'exp4_state'

const defaultState = {
  userName: 'Guest',
  budget: 12000,
  theme: 'ocean',
  cart: [],
  favorites: [],
}

const sampleProducts = [
  { id: 'p1', name: 'Wireless Headphones', price: 2400 },
  { id: 'p2', name: 'Mechanical Keyboard', price: 4200 },
  { id: 'p3', name: 'Portable SSD 1TB', price: 6800 },
  { id: 'p4', name: 'Webcam 1080p', price: 3100 },
  { id: 'p5', name: 'Monitor 24-inch', price: 9500 },
  { id: 'p6', name: 'USB-C Hub', price: 2100 },
]

const productMap = new Map(sampleProducts.map((product) => [product.id, product]))

function hydrateState() {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY)
    if (!rawState) {
      return defaultState
    }

    const parsed = JSON.parse(rawState)
    return {
      ...defaultState,
      ...parsed,
      cart: Array.isArray(parsed.cart) ? parsed.cart : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
    }
  } catch {
    return defaultState
  }
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, userName: action.payload || 'Guest' }

    case 'SET_BUDGET': {
      const parsedBudget = Number(action.payload)
      return {
        ...state,
        budget: Number.isFinite(parsedBudget) && parsedBudget > 0 ? parsedBudget : state.budget,
      }
    }

    case 'SET_THEME':
      return { ...state, theme: action.payload === 'sunset' ? 'sunset' : 'ocean' }

    case 'ADD_TO_CART': {
      const itemId = action.payload
      const existingItem = state.cart.find((item) => item.id === itemId)

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }

      return {
        ...state,
        cart: [...state.cart, { id: itemId, quantity: 1 }],
      }
    }

    case 'CHANGE_QTY': {
      const { id, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== id),
        }
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }

    case 'TOGGLE_FAVORITE': {
      const id = action.payload
      const alreadyFavorite = state.favorites.includes(id)

      return {
        ...state,
        favorites: alreadyFavorite
          ? state.favorites.filter((itemId) => itemId !== id)
          : [...state.favorites, id],
      }
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] }

    default:
      return state
  }
}

const AppStateContext = createContext(null)
const AppDispatchContext = createContext(null)

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, undefined, hydrateState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  useEffect(() => {
    document.body.dataset.theme = state.theme
  }, [state.theme])

  const derivedValues = useMemo(() => {
    const cartLineItems = state.cart.map((item) => {
      const product = productMap.get(item.id)
      return {
        ...item,
        name: product?.name ?? 'Unknown Product',
        price: product?.price ?? 0,
        subtotal: (product?.price ?? 0) * item.quantity,
      }
    })

    const cartCount = cartLineItems.reduce((total, item) => total + item.quantity, 0)
    const cartTotal = cartLineItems.reduce((total, item) => total + item.subtotal, 0)
    const remainingBudget = state.budget - cartTotal

    return {
      cartLineItems,
      cartCount,
      cartTotal,
      remainingBudget,
      products: sampleProducts,
    }
  }, [state])

  return (
    <AppStateContext.Provider value={{ ...state, ...derivedValues }}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider')
  }
  return context
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (!context) {
    throw new Error('useAppDispatch must be used within AppStateProvider')
  }
  return context
}
