# Next.js Multi-Zones Demo

A micro-frontend architecture demo using **Next.js Multi-Zones** in a Turborepo monorepo. Three independent Next.js apps serve different parts of a single website, sharing UI components and global state.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | React framework (Turbopack) |
| React | 19 | UI library |
| TypeScript | 5.9 | Type safety |
| Tailwind CSS | 4 | Utility-first CSS (CSS-first config) |
| Turborepo | 2.8 | Monorepo task runner |

## Project Structure

```
nextjs-multizones-demo/
├── apps/
│   ├── home/          # Main zone — localhost:3000 (serves /, proxies /store & /mac)
│   ├── store/         # Store zone — localhost:3001 (basePath: /store)
│   └── mac/           # Mac zone — localhost:3002 (basePath: /mac)
├── packages/
│   ├── ui/            # Shared components (Navigation, Button, Card)
│   └── shared-state/  # Cross-zone state via localStorage
├── docs/
│   └── LEARNING-GUIDE.md
├── turbo.json
├── tsconfig.base.json
└── package.json
```

## How Multi-Zones Work

Each zone is an independent Next.js app that owns a URL path:

| Zone | URL Path | Dev Port | `basePath` | `assetPrefix` |
|------|----------|----------|------------|---------------|
| Home | `/` | 3000 | _(none)_ | _(none)_ |
| Store | `/store` | 3001 | `/store` | `/store-static` |
| Mac | `/mac` | 3002 | `/mac` | `/mac-static` |

The **home app** acts as the entry point and proxies requests via `rewrites`:

```
Browser → localhost:3000/store → rewrite → localhost:3001/store
Browser → localhost:3000/mac → rewrite → localhost:3002/mac
```

`assetPrefix` ensures each zone's JS/CSS assets don't collide (e.g. store assets are served from `/store-static/_next/...`).

## Getting Started

### Prerequisites

- Node.js >= 20.9.0
- npm >= 10

### Install & Run

```bash
npm install
npm run dev
```

This starts all three zones in parallel via Turborepo:

- Home: [http://localhost:3000](http://localhost:3000)
- Store: [http://localhost:3000/store](http://localhost:3000/store)
- Mac: [http://localhost:3000/mac](http://localhost:3000/mac)

### Build

```bash
npm run build
```

## Key Concepts

- **Multi-Zones** — each zone is a standalone Next.js app that can be developed, deployed, and scaled independently
- **Shared UI** — `@repo/ui` provides common components (Navigation, Button, Card) used across all zones via `transpilePackages`
- **Shared State** — `@repo/shared-state` uses localStorage so cart and user data persist across full-page navigations between zones
- **Tailwind CSS v4** — CSS-first config with `@import "tailwindcss"` and `@source` directive for monorepo package scanning
- **`<a>` not `<Link>`** — cross-zone navigation uses standard anchor tags (full page reload triggers the rewrite rules)

## Tailwind CSS Setup (Monorepo)

Each app has its own PostCSS + Tailwind setup:

```
apps/home/
├── postcss.config.mjs        # { "@tailwindcss/postcss": {} }
└── app/globals.css            # @import "tailwindcss"; @source "../../../packages/ui/src";
```

The `@source` directive tells Tailwind to scan the shared `packages/ui` for class names used in shared components.

## Learn More

- [Next.js Multi-Zones Guide](https://nextjs.org/docs/app/guides/multi-zones)
- [Tailwind CSS v4 + Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Turborepo Docs](https://turbo.build/repo/docs)
- See [`docs/LEARNING-GUIDE.md`](docs/LEARNING-GUIDE.md) for a detailed walkthrough of the architecture
