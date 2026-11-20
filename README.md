# ShipYard

A product-catalog storefront built with Next.js + TypeScript.

- **Live site**: https://preethesh-hub.github.io/shipyard/
- **Lighthouse Performance**: 98 (mobile)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/shipyard](http://localhost:3000/shipyard) in your browser.

## Build and Export

```bash
npm run build
```

This generates a static export in the `out/` directory, optimized for deployment on GitHub Pages.

## What it does

Browse a product grid and open a detail page for each product.
- Optimized with `next/image` (responsive sizes, aspect ratio preservation, eager `priority` loading on hero images).
- Custom font optimization with `next/font/google` (`Inter` with `display: swap`).
- Dynamic chunk splitting with `next/dynamic` for heavy client components (`Reviews`).
- Dynamic per-page metadata via `generateMetadata`.
- Resilient UI states: `loading.tsx` (skeleton/status placeholder), `error.tsx` (interactive client error boundary with reset retry), and `not-found.tsx` (custom 404).
