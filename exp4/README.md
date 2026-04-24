# EXP4 - State Management in Single Page Application

This experiment implements centralized state management in a React SPA using Context API + useReducer.

## Deployment

| Production URL | Deploy Preview URL |
|---|---|
| https://kumar-23bis70130-exp4-fs2.netlify.app | https://69e85ca27aab2c5cd9237c07--kumar-23bis70130-exp4-fs2.netlify.app |

## Objective

Build a multi-route SPA where all pages share a common global state.

## Implemented Features

- Global state provider with reducer (`src/state/appState.jsx`)
- Shared state across routes (Dashboard, Catalog, Insights, Settings)
- Action-based updates:
  - `ADD_TO_CART`
  - `REMOVE_FROM_CART`
  - `CHANGE_QTY`
  - `TOGGLE_FAVORITE`
  - `SET_NAME`
  - `SET_BUDGET`
  - `SET_THEME`
  - `CLEAR_CART`
- Derived state values:
  - Cart count
  - Cart total
  - Remaining budget
- Persistence using `localStorage`
- Theme switching (`ocean` and `sunset`)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Dashboard with global state snapshot |
| `/catalog` | Product actions (add/remove/favorite) |
| `/insights` | Architecture + reducer flow |
| `/settings` | Update user profile, budget, theme |
| `*` | 404 page |

## Project Structure

```
exp4/
├── src/
│   ├── state/
│   │   └── appState.jsx
│   ├── components/
│   │   └── Navigation.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Run the Experiment

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Learning Outcomes

After this experiment you can:

- Design a centralized store in React without external libraries
- Use reducers for predictable state transitions
- Share state across routed SPA pages
- Persist and hydrate app state
- Compute derived state efficiently with `useMemo`

Created for Full Stack Development Lab - EXP4
