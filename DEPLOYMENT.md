# Casas Pinheirão - Deployment Guide

## Vercel Deployment

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Manual Deployment Steps

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

### Build Configuration

The project is configured with:
- **Framework**: Vite
- **Build Command**: `yarn build`
- **Output Directory**: `dist`
- **Install Command**: `yarn install`
- **Dev Command**: `yarn dev`

### Environment Variables (Optional)

If using Google Gemini API:
```bash
GEMINI_API_KEY=your_key_here
```

### Project Settings

The following files configure Vercel deployment:
- `vercel.json` - Vercel configuration
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration

### Build Commands

```bash
# Development
yarn dev

# Build for production
yarn build

# Preview production build locally
yarn preview

# Start production server
yarn start
```

### Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript compiles: `npx tsc --noEmit`
4. Test build locally: `yarn build`

### Performance

- Bundle size: ~97 KB (gzipped)
- Build time: ~4-5 seconds
- Target: ES2015 for wide browser support

## Local Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Open http://localhost:3000
```

## Tech Stack

- React 19
- TypeScript
- Vite 6
- React Router 7
- Tailwind CSS (CDN)
- Lucide React (icons)
