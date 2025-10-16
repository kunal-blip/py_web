# Kunal Marchande - Portfolio Website

## Overview
A modern, professional portfolio website built with Flask showcasing full-stack development skills. Features a sleek dark theme with smooth animations, responsive design, and optimal performance.

## Recent Changes (October 16, 2025)
### Major Redesign - Modern Portfolio Enhancement
- **Design System**: Implemented comprehensive CSS variable system with professional color palette (deep navy, cyan accents, gradients)
- **Typography**: Integrated Google Fonts (Inter for body, Poppins for headings) replacing cursive font
- **Animations**: Added smooth scroll, scroll-spy navigation, Intersection Observer fade-ins, and parallax effects
- **Responsive Design**: Mobile-first approach with fluid typography using clamp() and flexible layouts
- **UI Components**: Modern card-based designs for skills/projects with hover effects and gradient buttons
- **Performance**: Smart caching strategy (HTML: no-cache, static assets: 1-hour cache)
- **Accessibility**: Prefers-reduced-motion support, proper focus states, semantic HTML

### Previous Setup (October 13-14, 2025)
- Installed Python 3.11 and Flask framework
- Fixed logo path issue (moved to pictures/ subfolder)
- Added gunicorn for production deployment
- Configured app to run on 0.0.0.0:5000

## Project Architecture

### Structure
```
├── app.py                 # Flask application with smart caching
├── templates/
│   └── home.html         # Main portfolio template with meta tags
├── static/
│   ├── style.css         # Modern CSS with variables and animations
│   ├── script.js         # Interactive features and scroll effects
│   ├── pictures/
│   │   └── logo.png     # Portfolio logo
│   └── files/
│       └── Resume.pdf   # Downloadable resume
├── requirements.txt      # Python dependencies
├── pyproject.toml       # Python project configuration
└── .gitignore           # Git ignore for Python projects
```

### Tech Stack
- **Framework**: Flask 3.1.2
- **Language**: Python 3.11
- **Styling**: Modern CSS3 with custom properties, gradients, animations
- **JavaScript**: Vanilla JS with Intersection Observer API
- **Typography**: Google Fonts (Inter, Poppins)
- **Development Server**: Flask development server (debug mode)
- **Production Server**: Gunicorn 23.0.0
- **Package Manager**: uv (Replit's Python package manager)

### Design Features
- **Color Scheme**: Dark theme with blue/purple gradients and cyan accents
- **Animations**: Fade-in on scroll, parallax hero, smooth transitions
- **Components**: Glassmorphic navigation, gradient buttons, hover cards
- **Layout**: CSS Grid/Flexbox, max-width containers, consistent spacing (8px system)
- **Responsive**: Mobile-optimized navigation, fluid typography, touch-friendly targets

### Configuration
- **Development**: Runs on 0.0.0.0:5000 with debug mode enabled
- **Caching**: HTML no-cache, static assets cached for 1 hour
- **Deployment**: Autoscale deployment using gunicorn on port 5000
- **Workflow**: Flask App workflow runs `python app.py`

### Sections
1. **Hero**: Full-viewport intro with gradient text and CTA buttons
2. **About**: Personal introduction with centered content
3. **Skills**: Grid-based tech stack cards with hover effects
4. **Projects**: Portfolio showcase with project cards and links
5. **Contact**: Social links with hover animations
6. **CV/Resume**: Download section with prominent button

## Performance Optimizations
- Smart HTTP caching headers (selective by content-type)
- Google Fonts preconnect for faster loading
- CSS animations with reduced-motion support
- Optimized image loading
- Minimal JavaScript footprint with vanilla implementations

## User Preferences
- Prefers modern, professional design with smooth animations
- Dark theme with vibrant accent colors
- Clean, accessible user experience
