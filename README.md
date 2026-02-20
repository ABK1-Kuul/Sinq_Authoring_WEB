# SINQ Authoring Tool — Website

A modern, high-conversion website for the **SINQ Authoring Tool** built with Next.js, Tailwind CSS, Framer Motion, and Lucide React.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Theme](#theme)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Build for Production](#build-for-production)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Inter** — Typography (via `next/font/google`)
- **@tailwindcss/typography** — Prose styling for docs

## Theme

- **Modern Dark** aesthetic
- Deep charcoal backgrounds (`#0d0d0f`, `#141416`, `#1a1a1e`)
- Electric blue/violet accents (`#6366f1`, `#8b5cf6`, `#3b82f6`)
- Glassmorphism cards with backdrop blur

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, feature grid, and download CTA |
| `/architecture` | Interactive stack diagram and production readiness pillars |
| `/docs` | Documentation hub (redirects to Introduction) |
| `/docs/introduction` | What is SINQ, key features, architecture overview |
| `/docs/installation` | Requirements, download, first-run steps |
| `/docs/troubleshooting` | Common issues and solutions |
| `/docs/plugin-guide` | Plugin types, installation, development |
| `/contribute` | Contributor journey, GitHub stats, roadmap, developer FAQ |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | No | GitHub Personal Access Token for higher API rate limits on the contribute page. Create at [github.com/settings/tokens](https://github.com/settings/tokens). Without it, the API uses unauthenticated limits (60 req/hr). |

Copy `.env.example` to `.env.local` and add your token if desired.

## Project Structure

```
src/
├── app/
│   ├── architecture/  # System architecture page
│   ├── contribute/    # Community & contribution page
│   ├── docs/          # Documentation (layout, nav, pages)
│   └── page.tsx       # Landing page
├── components/
│   ├── Callout.tsx      # Warning, Note, Tip boxes
│   ├── CodeBlock.tsx    # Themed code block with copy
│   ├── GitHubStats.tsx  # GitHub release, issues, contributors
│   ├── OnThisPage.tsx   # Docs table of contents
│   └── Step.tsx         # Numbered tutorial steps
└── lib/
    └── github.ts        # Server-side GitHub API fetch
```

---

**SINQ Authoring Tool** — [GitHub](https://github.com/ABK1-Kuul/SinqAuthoringTool) · [Releases](https://github.com/ABK1-Kuul/SinqAuthoringTool/releases)
