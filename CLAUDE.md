# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Next.js 16 (App Router) portfolio site for Anh Phan. React 19, TypeScript, Tailwind CSS v4. Neobrutalist design with custom color palette (warm peach/beige base, bright accents). Single-page layout with sections for hero, skills, projects, about, interests, and contact.

## Commands

- `npm run dev` — start dev server (http://localhost:3000), auto-reloads on file changes
- `npm run build` — production build (check `.next/` output)
- `npm run start` — run production build locally
- `npm run lint` — ESLint check (flat config via `eslint.config.mjs`)

No test runner is configured.

## Architecture

**App Router:** Single route (`/`) defined via `app/page.tsx` (home) and `app/layout.tsx` (root shell).

**Component Structure:**
- `components/sections/` — page-level containers (HeroSection, SkillStackSection, ProjectsSection, etc.). Each section is a self-contained module mapping to a visual region of the page.
- `components/ui/` — reusable button, card, tag components. Low-coupling to layout.

**Styling System:**
- Tailwind v4 (@tailwindcss/postcss) — no `tailwind.config.js` file (v4 uses CSS-based config).
- Custom design tokens in `app/globals.css`: colors (--color-surface-base, --color-accent-*), spacing (--space-1 to --space-8), typography (--font-size-xs to --font-size-4xl), motion (--motion-instant/fast/normal), shadows (--shadow-hard, --shadow-flat).
- Custom utilities: `@utility shadow-hard`, `@utility shadow-flat`, `@utility lazy-section` (content-visibility + contain-intrinsic-size for perf).
- Root path alias `@/*` maps to repo root (see `tsconfig.json`).

**Font:** Space Grotesk (700 weight, 18px base, 28px line-height) — loaded via `next/font/google` in layout.tsx and applied globally. Bold, high-contrast typeface supporting the neobrutalist aesthetic.

**Metadata:** Defined in `layout.tsx` (title, description, favicon). Update there for OG tags or per-page overrides.

## Performance Notes

- Sections use `@utility lazy-section` (content-visibility: auto) for viewport-aware rendering.
- Next.js 16: Fast Refresh enabled by default on `npm run dev`.

## Critical: Next.js 16 Breaking Changes

Per `AGENTS.md`: Next.js `16.2.9` has breaking changes vs. earlier majors — APIs, routing, and config differ from training data. Before writing Next.js-specific code (routing, data fetching, config, fonts), check `node_modules/next/dist/docs/`. Watch deprecation warnings.

## Styling Workflow

1. Tailwind first: use built-in utilities (bg-, text-, flex-, etc.).
2. Design tokens: use CSS variables (e.g., `var(--color-surface-base)`, `var(--space-4)`) for semantic consistency.
3. Custom utilities: define new `@utility` or `@theme` rules in `app/globals.css` if multiple components share a style.
4. Inline styles: avoid — only for dynamic values.

## File Size Management

Keep component files under 200 lines. Split large sections into sub-components if needed (e.g., ProjectCard as a separate file).
