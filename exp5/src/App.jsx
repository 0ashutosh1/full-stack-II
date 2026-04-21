import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteLoader() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <div className="spinner" />
      <p>Loading optimized chunk...</p>
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
          <Route path="/code-splitting" element={<About />} />
          <Route path="/on-demand" element={<Projects />} />
          <Route path="/metrics" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
