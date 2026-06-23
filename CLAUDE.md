# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Next.js 16 (App Router) portfolio site for Anh Phan ("anhpd"). React 19, TypeScript, Tailwind CSS v4. Currently the unmodified `create-next-app` scaffold — `app/page.tsx` and `app/layout.tsx` still hold default boilerplate content.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)

No test runner is configured.

## Architecture

- App Router structure under `app/`: `layout.tsx` defines the root HTML shell (Geist Sans/Mono fonts via `next/font/google`, dark-mode-aware classes), `page.tsx` is the home route.
- Path alias `@/*` maps to repo root (see `tsconfig.json`).
- Styling: Tailwind v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`), global styles in `app/globals.css`. No `tailwind.config` file — v4 uses CSS-based config.
- `next.config.ts` is currently empty (default config).

## Critical: Next.js version mismatch with training data

Per `AGENTS.md`: this project pins Next.js `16.2.9`, which is newer than most models' training data and has breaking API/convention/file-structure changes from earlier Next.js major versions. Before writing or modifying any Next.js-specific code (routing, config, data fetching, metadata, fonts, etc.), check the docs bundled in `node_modules/next/dist/docs/` rather than relying on prior Next.js knowledge, and watch for deprecation notices.
