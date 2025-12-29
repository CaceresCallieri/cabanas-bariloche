# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A vacation cabin rental website for "Cabañas Bariloche" - a collection of cottages in the Patagonia region of Argentina. Built with React 19, TypeScript, and Vite. Deployed on Netlify.

**Live URL**: https://cabanas-bariloche.netlify.app

## Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint check
npm run preview  # Preview production build locally
```

## Architecture

### URL-Driven Cottage Selection

The app uses React Router with URL parameters as the source of truth for cottage selection:

- Routes: `/cottage/:cottageCode` (e.g., `/cottage/mascardi`, `/cottage/otto`)
- Root `/` redirects to the default cottage (`mascardi`)
- Invalid cottage codes redirect to default

### Core Data Flow

```
URL → useCottageFromUrl → selectedCottage → Components
                ↓
       useCottageMeta (updates document title + OpenGraph)
```

### Key Files

| File | Purpose |
|------|---------|
| `src/data/cottages.ts` | Source of truth for cottage data (names, codes, descriptions) |
| `src/utils/cottageDefaults.ts` | Default cottage configuration (`DEFAULT_COTTAGE_CODE`) |
| `src/utils/getCottageImages.ts` | Vite glob-based image loading per cottage |
| `src/utils/preloadImages.ts` | Priority-based image preloading with timeout |
| `src/hooks/useCottageNavigation.ts` | Curtain animation state machine |

### Curtain Animation System

Navigation between cottages uses a phase-based state machine in `useCottageNavigation`:

```
IDLE → CLOSING → CLOSED → OPENING → IDLE
```

- Image preloading starts immediately on navigation (parallel with curtain close)
- URL change happens when curtain is fully closed
- Curtain opens only after images are ready (or 2s timeout)
- Animation duration: 750ms (`CURTAIN_ANIMATION_DURATION`)

### Image Organization

Each cottage has images in:
```
src/assets/cottages/cottage-{code}/
├── main-images/*.webp   # Full-size carousel images
└── thumbnails/*.webp    # Carousel thumbnails
```

Images are loaded via Vite's `import.meta.glob` with the `@assets` alias.

### Seasonal Features

The `useSeason` hook determines current season (Southern Hemisphere dates) and controls the snow effect display (shown in autumn/winter only).

## Vite Path Aliases

```typescript
"@src" → "./src"
"@assets" → "./src/assets"
```

## Adding a New Cottage

1. Add cottage data to `src/data/cottages.ts`
2. Create image directory: `src/assets/cottages/cottage-{code}/main-images/` and `thumbnails/`
3. Add case to switch in `src/utils/getCottageImages.ts` with matching glob imports
4. The cottage code becomes the URL slug

## Image Processing Scripts

Located in `scripts/`:

- `convert_from_heic_to_webp.sh` - Converts HEIC photos to WebP (requires ImageMagick)
- `generate_thumbnails.sh` - Creates thumbnail versions
- `zero_pad_fileimages.sh` - Normalizes image filenames

## SPA Routing

Netlify SPA routing configured in `public/_redirects` - all routes serve `index.html`.

## Animation Library

Uses `motion` (Framer Motion) for:
- Curtain transition effect
- Hero section text reveal with staggered animation
- Snow particle effect
