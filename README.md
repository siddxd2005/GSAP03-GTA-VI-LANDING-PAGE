## 🐦‍🔥GSAP03- GTAVI LANDING PAGE
This document provides a high-level introduction to the GTA VI Landing Page project, a browser-based animated landing page built with React and GSAP. This page covers the project's purpose, technology stack, and overall architecture.


https://github.com/user-attachments/assets/319d1e8d-e0c6-4b9b-af46-6d9fd4eec393


### PROJECT PURPOSE
The GTA VI Landing Page is a single-page web application that presents an animated landing experience for the GTA VI game. The application features:

- Animated loading sequence with SVG mask animations
- Parallax scrolling effects on background layers
- Full-page navigation overlay with toggle functionality
- Custom branding using the Pricedown font
- Responsive design with TailwindCSS utilities
- The project demonstrates modern front-end development practices including component-based architecture, declarative animations, and build-time optimizations.

### Technology Stack
The application is built on the following core technologies:

| Technology | Version | Purpose |
|------------|--------|---------|
| React | 19.1.0 | UI component framework |
| React DOM | 19.1.0 | DOM rendering |
| GSAP | 3.13.0 | Animation engine |
| @gsap/react | 2.1.2 | React integration for GSAP |
| Vite | 6.3.5 | Build tool and dev server |
| TailwindCSS | 3.4.17 | Utility-first CSS framework |
| PostCSS | 8.5.4 | CSS transformation |
| ESLint | 8.57.1 | Code quality enforcement |
| Remixicon | 4.6.0 | Icon library |

### NPM Scripts
The project provides the following npm commands defined in `package.json`:

| Command | Purpose |
|--------|---------|
| npm run dev | Starts Vite development server with Hot Module Replacement |
| npm run build | Builds optimized production bundle to `dist/` directory |
| npm run lint | Runs ESLint on all source files |
| npm run preview | Serves production build locally for testing |

### Key Features and Capabilities
The application implements the following technical capabilities:

🔻Animation System
- Three distinct useGSAP hooks for phased animations
- SVG mask-based loading animation
- Timeline-based navigation transitions
- Real-time parallax effects on background layers

🔻State-Driven Rendering
- showContent boolean controls visibility of main landing section
- fullPageNav boolean toggles navigation overlay
- Conditional rendering based on animation completion

🔻Asset Management
- Static assets in public/ directory served without build processing
- Custom font (pricedown.otf) loaded via CSS @font-face
- Background images (bg.png, sky.png) used in parallax layers
- Character and logo images integrated into layout

🔻Styling Architecture
- TailwindCSS utility classes for rapid styling
- Global CSS in src/index.css for base styles and font declarations
- PostCSS processing with autoprefixer for browser compatibility
