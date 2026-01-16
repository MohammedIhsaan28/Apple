# Apple — 3D Product Showcase (Next.js + R3F + GSAP)

An interactive Apple-style product showcase built with Next.js 16, React 19, Tailwind CSS v4, React Three Fiber, Drei, GSAP, and Zustand. It features animated sections, 3D MacBook models with studio lighting, and responsive layouts.

## Tech Stack
- **Framework:** Next.js 16 (`app` router)
- **UI:** React 19, Tailwind CSS v4
- **3D:** three.js, React Three Fiber, @react-three/drei
- **Animation:** GSAP (`ScrollTrigger`, `SplitText`), `@gsap/react`
- **State:** Zustand
- **Tooling:** TypeScript, ESLint

## Features
- **Animated Sections:** Smooth scroll-based reveals powered by GSAP.
- **3D Models:** MacBook variants rendered with React Three Fiber.
- **Studio Lighting & Controls:** Lighting presets and model switching helpers.
- **Responsive Layout:** Tailwind CSS with modern, accessible defaults.

## Project Structure

```
app/
	globals.css
	layout.tsx
	page.tsx
components/
	Features.tsx
	Footer.tsx
	Hero.tsx
	Highlight.tsx
	Navbar.tsx
	Performance.tsx
	Product.tsx
	Showcase.tsx
	models/
		Macbook-14.jsx
		Macbook-16.jsx
		Macbook.jsx
	three/
		ModelSwitcher.tsx
		StudioLight.tsx
constants/
	index.ts
public/
	fonts/
	images/
	models/
	videos/
store/
	index.ts
types/
	css.d.ts
```

- **Entry:** [app/page.tsx](app/page.tsx) wires page sections and registers GSAP plugins.
- **Layout & Metadata:** [app/layout.tsx](app/layout.tsx) loads fonts and global styles.
- **3D Components:** [components/models](components/models) and [components/three](components/three).
- **State:** [store/index.ts](store/index.ts) handles shared UI/model state.

## Getting Started

### Prerequisites
- Node.js 18.18+ (Node 20 LTS recommended)
- npm (or your preferred package manager)

### Install
```bash
npm install
```

### Develop
```bash
npm run dev
# Open http://localhost:3000
```

### Build
```bash
npm run build
```

### Start (Production)
```bash
npm run start
```

### Lint
```bash
npm run lint
```

## Notes & Tips
- **Client Components:** GSAP is registered and used inside client components (see [app/page.tsx](app/page.tsx)).
- **Assets:** Place 3D models, images, and videos under `public/` for optimal Next.js serving.
- **Tailwind v4:** Styling is via Tailwind v4 with PostCSS; see `postcss.config.mjs`.
- **Next Config:** Minimal defaults in [next.config.ts](next.config.ts).

## Deployment
- **Vercel:** Recommended—import the repo, set framework to Next.js, and deploy. Vercel will run `next build` automatically.
- **Self-hosted:** Build with `npm run build` and serve with `npm run start` behind a reverse proxy.



