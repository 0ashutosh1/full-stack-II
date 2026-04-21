# EXP5 - Performance Optimization in React Using Lazy Loading

This experiment demonstrates performance optimization in a React SPA using lazy loading and code splitting.

## Objective

Optimize application performance by reducing initial bundle size and loading route/component code only when required.

## Implemented Techniques

- Route-level lazy loading with `React.lazy`
- Suspense fallback UI during chunk loading
- On-demand component loading for heavy UI modules
- Navigation-based chunk loading behavior
- Practical performance checklist for measurement

## Routes

| Path | Description |
|------|-------------|
| `/` | Overview of lazy loading optimization |
| `/code-splitting` | Route chunking explanation + code sample |
| `/on-demand` | Lazy-loaded chart/media components |
| `/metrics` | Performance validation checklist |
| `*` | Not Found |

## Lazy Loading Example

```jsx
const Home = lazy(() => import('./pages/Home'))

<Suspense fallback={<RouteLoader />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>
```

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Learning Outcomes

After this experiment you can:

- Apply lazy loading in React routes
- Add Suspense fallback for better user experience
- Split heavy components into on-demand chunks
- Explain initial-load vs deferred-load tradeoffs

Created for Full Stack - II Lab (23CSH-382) - EXPERIMENT 5
