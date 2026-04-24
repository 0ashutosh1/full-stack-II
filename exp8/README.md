# EXPERIMENT 8 - Performance Optimization and Advanced Patterns in React

## Author

- Name: kumar ashutosh
- UID: 23bis70130

## Deployment

| Production URL | Deploy Preview URL |
|---|---|
| https://kumar-23bis70130-exp8-fs2.netlify.app | https://69e85cdd2f83294592b53aa6--kumar-23bis70130-exp8-fs2.netlify.app |

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
- The author details are updated to kumar ashutosh and 23bis70130 in both code and documentation.
