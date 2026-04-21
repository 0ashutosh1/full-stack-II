# EXPERIMENT 8 - Performance Optimization and Advanced Patterns in React

## Author

- Name: MRIDUL
- UID: 23BIS70122

## Objective

This experiment demonstrates performance optimization techniques in React using memoization, callback stabilization, expensive computation caching, and route-based code splitting.

## Implemented Techniques

- `React.memo` for memoization
- Custom prop comparison for memoized child rendering
- `useMemo` for expensive calculations and filtered views
- `useCallback` for stable event handlers
- Route-based code splitting with `React.lazy`
- Suspense fallback for loading states
- Performance tooling overview

## Routes

| Path | Description |
|------|-------------|
| `/` | Performance dashboard and memoization explorer |
| `/memoization` | React.memo and custom comparison notes |
| `/split-demo` | Route-based code splitting explanation |
| `/tools` | Performance tools and audit workflow |
| `*` | Not Found |

## Performance Tools

- DevTools
- Lighthouse
- WebPageTest
- GTmetrix
- React DevTools Profiler
- Webpack Bundle Analyzer

## Key Learning Outcomes

- Reduced unnecessary renders using memoized components.
- Cached expensive derived data with `useMemo`.
- Stabilized function references with `useCallback`.
- Split route bundles to improve first-load performance.
- Used browser and React profiling tools to measure optimization results.

## Run the Project

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- The app is structured so `exp8` appears after `exp7` and before `exp9` in the workspace and repository series.
- The author details are updated to MRIDUL and 23BIS70122 in both code and documentation.
