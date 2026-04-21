import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'

const Home = lazy(() => import('./pages/Home'))
const Memoization = lazy(() => import('./pages/About'))
const SplitDemo = lazy(() => import('./pages/Projects'))
const Tools = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteLoader() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <div className="spinner" />
      <p>Loading optimized route chunk...</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memoization" element={<Memoization />} />
          <Route path="/split-demo" element={<SplitDemo />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
