export const AUTHOR_NAME = 'MRIDUL'
export const AUTHOR_UID = '23BIS70122'

export const performanceInsights = [
  {
    id: 'memo-1',
    title: 'Render Stability',
    category: 'React.memo',
    score: 98,
    details: 'Memoized cards skip renders when unrelated state changes.'
  },
  {
    id: 'memo-2',
    title: 'Prop Comparison',
    category: 'Custom Compare',
    score: 91,
    details: 'Custom equality checks stop updates when important props stay the same.'
  },
  {
    id: 'memo-3',
    title: 'Derived Filters',
    category: 'useMemo',
    score: 96,
    details: 'Filtered and sorted results are recalculated only when dependencies change.'
  },
  {
    id: 'memo-4',
    title: 'Callback Stability',
    category: 'useCallback',
    score: 93,
    details: 'Function references stay stable and keep memoized children quiet.'
  },
  {
    id: 'memo-5',
    title: 'Route Splitting',
    category: 'Lazy Routes',
    score: 97,
    details: 'Each route loads as a separate bundle chunk when visited.'
  },
  {
    id: 'memo-6',
    title: 'Profiler Ready',
    category: 'Tools',
    score: 89,
    details: 'React DevTools Profiler helps spot avoidable re-renders.'
  },
  {
    id: 'memo-7',
    title: 'Bundle Visibility',
    category: 'Analyzer',
    score: 87,
    details: 'Bundle analyzers reveal expensive dependencies and chunk size changes.'
  },
  {
    id: 'memo-8',
    title: 'Audit Feedback',
    category: 'Lighthouse',
    score: 94,
    details: 'Lighthouse and WebPageTest provide performance scoring and diagnostics.'
  },
]

export const performanceTools = [
  {
    name: 'DevTools',
    purpose: 'Inspect paint timing, network requests, layout shifts, and CPU activity.',
  },
  {
    name: 'Lighthouse',
    purpose: 'Audit performance, accessibility, best practices, and SEO in one report.',
  },
  {
    name: 'WebPageTest',
    purpose: 'Run deeper waterfall analysis and emulate different network conditions.',
  },
  {
    name: 'GTmetrix',
    purpose: 'Track load metrics, page weight, and practical optimization recommendations.',
  },
  {
    name: 'React DevTools Profiler',
    purpose: 'Measure component render costs and identify memoization wins.',
  },
  {
    name: 'Webpack Bundle Analyzer',
    purpose: 'Visualize bundle contents and spot duplicated or heavy dependencies.',
  },
]
