# EXP2 - Material-UI Component Library Showcase

This experiment demonstrates the use of **Material-UI (MUI)**, a comprehensive React component library implementing Material Design principles.

## 📚 What is Material-UI?

Material-UI is a popular React component library that provides pre-built, customizable components following Google's Material Design specification. It offers:

- **Pre-designed Components**: Buttons, Cards, Forms, Lists, Dialogs, and more
- **Theming System**: Easy customization with a powerful theming API
- **Responsive Design**: Mobile-first, responsive components out of the box
- **Icons Library**: Access to thousands of Material Design icons
- **Accessibility**: Built-in accessibility features (WCAG 2.1 compliance)

## 🎯 Components Demonstrated

This project showcases the following Material-UI components:

1. **AppBar & Toolbar** - Navigation and header components
2. **Cards** - Container for grouped content
3. **TextField** - Input fields (Outlined, Filled variants)
4. **Switch & FormControlLabel** - Toggle controls
5. **Rating** - Star rating component
6. **Chips** - Compact elements representing input, attributes, or actions
7. **Lists & ListItem** - Vertical list of items
8. **Buttons** - Various button styles (Contained, Outlined, Text)
9. **Dialog** - Modal dialog component
10. **Pagination** - Numbered page navigation
11. **Grid & Container** - Layout system
12. **Box** - Base layout component
13. **Typography** - Text styling components
14. **Avatar** - Profile images and initials

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
npm build
```

### Run ESLint

```bash
npm run lint
```

## 📦 Dependencies

- **React 19.2.4** - UI library
- **Material-UI 5.15.0** - Component library
- **Material Icons 5.15.0** - Icon set
- **Emotion** - CSS-in-JS styling library
- **Vite 8.0.4** - Build tool

## 🎨 Material-UI Features Used

### 1. Component Library
- Utilizes MUI's component system for consistent design
- Implements responsive layout with Grid and Container

### 2. Styling with MUI
- **sx prop** - Inline styling system
- **Responsive design** - Mobile-first approach
- **Hover effects** - Interactive component states

### 3. Icons Integration
- Uses Material Design Icons from `@mui/icons-material`
- Icons integrated with buttons and list items

### 4. Theming
- Default Material Design theme
- Colors: Primary (Blue), Secondary (Purple), and Error (Red)
- Typography: Roboto font family

## 📱 Responsive Design

The components automatically adapt to different screen sizes:
- **Mobile (xs)**: Single column layout
- **Tablet (md)**: Two-column grid
- **Desktop (lg)**: Full-width layout

## 🔧 Customization

To customize Material-UI theme:

```javascript
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## 📚 Learn More

- [Material-UI Documentation](https://mui.com)
- [Material Design](https://material.io/design)
- [Component API Reference](https://mui.com/api/alert)

## ✨ Best Practices

1. Use the `sx` prop for styling over inline CSS
2. Leverage MUI's Grid system for responsive layouts
3. Use Typography components for consistent text styling
4. Implement theme customization for brand colors
5. Use built-in spacing utilities (margin, padding)

## 🎓 Learning Outcomes

After completing this experiment, you will understand:

- How to integrate Material-UI in a React project
- How to use pre-built components effectively
- How to implement responsive designs
- How to customize component styling
- How to organize component-based architecture
- Best practices for modern UI development

---

**Created for Full Stack Development - EXP2**
