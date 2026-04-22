# EXP3 - Routing in Single Page Applications (SPA)

This experiment demonstrates client-side routing using React Router v6, showcasing how to build modern Single Page Applications with seamless navigation.

## Deployment

| Production URL | Deploy Preview URL |
|---|---|
| https://mridul-23bis70122-exp3-fs2.netlify.app | https://69e85c8c4f3101613a99b6e6--mridul-23bis70122-exp3-fs2.netlify.app |

## 📚 What is SPA Routing?

Single Page Applications (SPAs) use client-side routing to navigate between different views without full page reloads. React Router is the industry-standard library for implementing SPA routing in React.

### Benefits of SPA Routing:
- ⚡ **Fast Navigation**: No page reloads, instant transitions
- 📱 **App-like Experience**: Smooth, responsive user interface
- 💾 **Reduced Bandwidth**: Only necessary data transfers
- 🎯 **Better UX**: State persists across navigation
- 🔗 **Bookmarkable URLs**: Each view has its own URL
- ⏱️ **Improved Performance**: Code splitting and lazy loading

## 🎯 Key Concepts

### 1. BrowserRouter
```jsx
<BrowserRouter>
  <Routes>
    {/* Routes go here */}
  </Routes>
</BrowserRouter>
```
Enables routing by wrapping your app and managing browser history.

### 2. Routes & Route
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```
`Routes` container holds all route definitions. `Route` maps a path to a component.

### 3. Link Component
```jsx
<Link to="/about">About</Link>
```
Navigation component that prevents full page reload and updates URL.

### 4. Hooks for Routing

#### useLocation
```jsx
const location = useLocation()
// Get current path: location.pathname
```

#### useParams
```jsx
const { id } = useParams()
// Access URL parameters like /posts/:id
```

#### useNavigate
```jsx
const navigate = useNavigate()
navigate('/about') // Programmatic navigation
```

## 📁 Project Structure

```
exp3/
├── src/
│   ├── components/
│   │   └── Navigation.jsx      # Navigation with active link detection
│   ├── pages/
│   │   ├── Home.jsx            # Home page with feature overview
│   │   ├── About.jsx           # About React Router
│   │   ├── Projects.jsx        # Real-world project examples
│   │   ├── Contact.jsx         # Contact form with routing
│   │   └── NotFound.jsx        # 404 page
│   ├── App.jsx                 # Main router configuration
│   ├── App.css                 # Styling
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

## 📦 Dependencies

- **React 19.2.4** - UI library
- **React Router DOM 6.22.0** - Client-side routing
- **Vite 8.0.4** - Build tool

## 🛣️ Routes Implemented

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Welcome page with SPA routing introduction |
| `/about` | About | Learn about React Router and SPA concepts |
| `/projects` | Projects | Real-world examples using routing |
| `/contact` | Contact | Contact form with form state management |
| `*` | NotFound | 404 page for invalid routes |

## 💡 Features Demonstrated

### 1. Navigation Component
- Active link highlighting using `useLocation`
- Sticky navigation bar with smooth styling
- Responsive mobile-first design

### 2. Page Components
- Breadcrumb navigation for better UX
- Cross-page linking using `Link` component
- Consistent layout and styling

### 3. Form Handling
- Form state management with `useState`
- Form submission handling
- Success message display

### 4. Advanced Routing Patterns
- **Protected Routes**: Authentication-based access
- **Lazy Loading**: Code splitting for performance
- **Dynamic Routes**: URL parameters for dynamic content
- **Nested Routes**: Complex navigation hierarchies
- **Query Strings**: Filtering and pagination
- **404 Handling**: Fallback for invalid routes

## 🎨 Styling

The app features:
- Gradient backgrounds and color scheme
- Smooth transitions and hover effects
- Responsive grid layouts
- Card-based component design
- Mobile-first approach

## 🔥 Advanced Routing Examples

### Nested Routes
```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

### Dynamic Routes
```jsx
<Route path="/posts/:id" element={<Post />} />
// Access with: const { id } = useParams()
```

### Protected Routes
```jsx
<Route 
  path="/admin" 
  element={isAuth ? <Admin /> : <Navigate to="/login" />} 
/>
```

### Lazy Loading
```jsx
const About = lazy(() => import('./pages/About'))
<Suspense fallback={<Loading />}>
  <About />
</Suspense>
```

## 📚 Learning Outcomes

After completing this experiment, you'll understand:

- ✅ How client-side routing works in SPAs
- ✅ Implementing React Router v6 in your projects
- ✅ Creating navigation components with active states
- ✅ Using routing hooks (useLocation, useParams, useNavigate)
- ✅ Building multi-page experiences without page reloads
- ✅ Handling 404 and error cases
- ✅ Best practices for SPA architecture
- ✅ Responsive navigation design

## 🔗 Resources

- [React Router Documentation](https://reactrouter.com)
- [React Router v6 Guide](https://reactrouter.com/en/main)
- [SPA Architecture Best Practices](https://www.sitepoint.com/single-page-application/)
- [Client-side Routing Deep Dive](https://medium.com/swlh/routing-in-react)


## 🎓 Next Steps

1. **Add URL Parameters**: Implement dynamic routes with `useParams`
2. **Protected Routes**: Add authentication and route guards
3. **Code Splitting**: Implement lazy loading with `React.lazy`
4. **State Management**: Integrate Context API or Redux for routing state
5. **API Integration**: Fetch data based on route changes
6. **Animations**: Add page transition animations

---

**Created for Full Stack Development - EXP3**
