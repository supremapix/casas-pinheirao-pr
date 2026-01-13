# Casas Pinheirão - Institutional Website

## Overview

Casas Pinheirão is a React-based institutional website for a pre-fabricated house construction company based in Pinhais, Curitiba/PR, Brazil. The website showcases their portfolio of wood and masonry houses, including single-story homes, two-story homes (sobrados), and triplex designs. The site serves as a marketing and lead generation platform with project galleries, company information, testimonials, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v7 with HashRouter for client-side navigation
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Styling**: Tailwind CSS loaded via CDN with custom configuration for brand colors (pinheirao-green, pinheirao-deep, pinheirao-black, pinheirao-concrete, pinheirao-gray)
- **Icons**: Lucide React for consistent iconography
- **Typography**: Montserrat font from Google Fonts

### Application Structure
- **Entry Point**: `index.tsx` renders the App component to the root DOM element
- **Main App**: `App.tsx` sets up routing with scroll-to-top behavior on navigation
- **Pages**: Six main pages (Home, About, Projects, ProjectDetail, SubmitProject, Contact) in the `pages/` directory
- **Components**: Reusable UI components in `components/` directory including Navbar, Footer, Hero, FloatingWhatsApp, CookieConsent, and specialized sections

### Data Management
- **Static Data**: Project catalog, testimonials, and consultant information stored in `data.ts`
- **Type Definitions**: TypeScript interfaces in `types.ts` define Project, Testimonial, Consultant, and ConstructionType enum
- **No Backend**: Currently a static site with no server-side logic or database

### Key Design Patterns
- **Component Composition**: Pages composed of smaller, focused components
- **Route-based Code Organization**: Each page is a self-contained component with its own SEO metadata
- **Custom Hooks**: ScrollToTop helper component for navigation UX
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### SEO Implementation
- **EnhancedSEO Component**: Dynamically updates meta tags, Open Graph data, and structured data (JSON-LD) per page
- **Structured Data**: LocalBusiness schema for search engine visibility

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Floating contact button links to WhatsApp with pre-filled message for lead generation
- **Google Fonts**: Montserrat font family loaded externally
- **Tailwind CDN**: CSS framework loaded from CDN with custom configuration inline

### Optional API Integration
- **Google Gemini API**: Environment variable `GEMINI_API_KEY` configured but not actively used in current codebase (prepared for future AI features)

### Deployment
- **Platform**: Configured for Vercel deployment with `vercel.json`
- **Build Output**: Static files generated to `dist/` directory
- **SPA Routing**: Rewrites configured to serve `index.html` for all routes

### Asset Hosting
- **Images**: Mix of local assets in public directory and external URLs from `customer-assets.emergentagent.com`
- **Logo and Media**: Custom branding assets stored locally

### Development Dependencies
- **TypeScript**: Strict mode disabled for flexibility
- **Vite React Plugin**: Hot module replacement for development
- **Node Types**: For build configuration compatibility