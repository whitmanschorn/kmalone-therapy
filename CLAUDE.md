# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kathryn Malone Therapy website - a Next.js 15 static therapy practice website deployed to GitHub Pages with Contentful CMS integration. Uses App Router with static export (`output: 'export'`).

## Development Commands

- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production site and export static files to `./out` directory
- `npm run lint` - Run ESLint

## Architecture

### Static Export Configuration

This project uses Next.js static export mode for GitHub Pages deployment:
- `next.config.ts` sets `output: 'export'`
- Images are unoptimized (`images.unoptimized: true`)
- Build outputs to `./out` directory
- Trailing slashes enabled for GitHub Pages compatibility

### Content Management

**Contentful CMS Integration:**
- Content client setup: `lib/contentful.ts`
- TypeScript types: `types/contentful.ts` and `types/blog.ts`
- Required environment variables:
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ACCESS_TOKEN`
  - `CONTENTFUL_PREVIEW_ACCESS_TOKEN`

**Content Models** (defined in `types/contentful.ts`):
1. `therapistProfile` - Professional bio, credentials, photo
2. `service` - Therapy services with descriptions and pricing
3. `page` - Static page content
4. `siteSettings` - Global site configuration
5. `blogPost` - Articles with `shortTitle` field for navigation menus

See `CONTENTFUL_SETUP.md` for detailed content model field specifications.

### App Structure

**Layout Pattern:**
- Root layout: `app/layout.tsx` - Includes `<Header>` and `<Footer>` components with Inter font
- Pages use Next.js App Router convention
- All pages are statically generated at build time

**Navigation:**
- `components/Header.tsx` - Main navigation with Resources dropdown
  - Desktop and mobile responsive menus
  - Resources dropdown shows blog post `shortTitle` values
  - Currently uses hardcoded blog posts (see TODO comment at line 34-40)
  - Should fetch blog posts from Contentful for navigation menu

**Dynamic Routes:**
- `/resources/[slug]` - Blog post pages using `generateStaticParams()`
- Static params must be generated at build time for all dynamic routes

### Styling

- Tailwind CSS 4 with PostCSS
- Color scheme: Blue tones (`blue-900`, `blue-800`) with subtle gradients (`blue-50`, `indigo-50`)
- CSS variables in `app/globals.css` define primary colors
- Typography: Inter font family loaded from Google Fonts

### Current Data Integration Status

Most pages currently use placeholder data. To integrate Contentful:
1. Create content entries in Contentful (see `CONTENTFUL_SETUP.md`)
2. Fetch data in page components using `contentfulClient.getEntries()`
3. Update `components/Header.tsx` to fetch blog posts for navigation dropdown
4. For static export, all data fetching must happen at build time (no client-side data fetching)

## Deployment

### GitHub Actions Workflow

`.github/workflows/deploy.yml` handles automatic deployment:
- Triggers on push to `main` branch
- Runs `npm run build` with Contentful secrets
- Deploys `./out` directory to GitHub Pages
- Requires GitHub secrets: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`

### GitHub Pages Configuration

- Custom domain: `kmalonetherapy.com` (via `public/CNAME`)
- DNS setup documented in `PORKBUN_DNS_SETUP.md`
- Requires GitHub Pages to be enabled with GitHub Actions as source

## Important Notes

- **Static Export Only:** This site uses static export mode - no server-side rendering or dynamic routes without `generateStaticParams()`
- **Build-Time Data:** All Contentful data must be fetched at build time, not client-side
- **Image Optimization:** Images are unoptimized due to static export - use appropriately sized images from Contentful
- **Contentful Image Domains:** `images.ctfassets.net` and `downloads.ctfassets.net` are whitelisted in `next.config.ts`
- **Blog Post Display:** Blog posts use both `title` (full) and `shortTitle` (abbreviated for navigation) fields
