---
title: "anhpd Portfolio Site Implementation"
description: "Single-page neobrutalist portfolio (Hero/Projects/About/Contact) on Next.js 16 App Router, Tailwind v4, hardcoded data, Vercel deploy."
status: in-progress
priority: P2
effort: 7h
branch: master
tags: [portfolio, nextjs, tailwind, neobrutalist, frontend]
created: 2026-06-23
---

# anhpd Portfolio Site Implementation

Single-page scroll portfolio for "anhpd" (pdanh.site). Replace the default
create-next-app scaffold with Hero + Projects + About + Contact sections,
neobrutalist styling driven by `DESIGN.md` tokens, hardcoded TypeScript project
data, basic SEO metadata. No backend, no CMS, no contact form (mailto + social
links). Deploy to Vercel (zero-config).

## Critical Constraints

- **Next.js 16.2.9 is newer than training data.** Per `AGENTS.md`, before writing
  any Next.js-specific API, read the bundled doc cited in each phase from
  `node_modules/next/dist/docs/`. Do NOT assume older conventions.
  Verified-stable for this build: `next/font/google` (named import + `className`),
  static `metadata` object export from `layout.tsx`. Re-verify others per-phase.
- **Tailwind v4 = CSS config only.** No `tailwind.config.js`. Tokens go in
  `app/globals.css` via `@theme` / CSS custom properties.
- **Path alias `@/*` → repo root** (`tsconfig.json:22-23`), NOT `./src`.
  So data file imports as `@/lib/projects`.
- **DESIGN.md "documentation site" framing is stale boilerplate.** This is a
  personal portfolio. Component state rules (default/hover/focus-visible/active/
  disabled), WCAG 2.2 AA, keyboard-first still apply to nav links, buttons,
  contact links.

## Phases

| # | Phase | Status | Effort | Blocks |
|---|-------|--------|--------|--------|
| 01 | [Token setup + global styles](phase-01-token-setup-and-global-styles.md) | completed | 1.5h | 02,03 |
| 02 | [Project data file + types](phase-02-project-data-file-and-types.md) | completed | 0.5h | 03 |
| 03 | [Section components](phase-03-section-components.md) | completed | 2.5h | 04 |
| 04 | [Page + layout assembly](phase-04-page-and-layout-assembly.md) | completed | 1h | 05 |
| 05 | [SEO metadata + Vercel readiness](phase-05-seo-metadata-and-vercel-readiness.md) | pending | 1h | — |

## Dependency Graph

```
01 (tokens) ──┬─> 03 (components) ──> 04 (assembly) ──> 05 (SEO/deploy)
02 (data)  ───┘
```

- 01 and 02 are independent — can run in parallel (different files).
- 03 needs both tokens (01) and data types (02).
- 04 wires components into `app/page.tsx` + `app/layout.tsx` (font swap).
- 05 finalizes metadata + verifies `npm run build` for Vercel.

## File Ownership (no overlap across parallel phases)

| File | Owning phase |
|------|--------------|
| `app/globals.css` | 01 |
| `lib/projects.ts` | 02 |
| `components/sections/*`, `components/ui/*` | 03 |
| `app/page.tsx` | 04 |
| `app/layout.tsx` | 04 (metadata title/desc), 05 (full metadata) — sequential, no parallel |

## Success Criteria (measurable)

- `npm run build` succeeds with no type errors and no ESLint errors.
- `npm run dev` renders all four sections in scroll order, no default scaffold remains.
- All four DESIGN.md accent colors + Space Grotesk visibly applied.
- Keyboard: Tab reaches every nav link / button / contact link with visible focus ring.
- Lighthouse SEO ≥ 95 (title, description, OG tags present); no console errors.

## Out of Scope (YAGNI)

- Contact form backend (use mailto + social links). See phase-05 risk note.
- CMS / MDX / dynamic project pages.
- Dark/light theme toggle (DESIGN.md base surface is black — single theme).
- Animations beyond DESIGN.md motion tokens / simple hover transitions.
- Tests (no runner configured; out of scope per task).

## Unresolved Questions

1. ~~Real project content~~ — RESOLVED: real content pulled from
   https://phanducanh-backend-ro4wkl7.gamma.site/ (Hangil, SatoriNihongo), saved to
   `.claude/context/profile-phan-duc-anh.md`, applied to `lib/projects.ts`,
   about/hero sections, layout metadata.
2. ~~Contact email + social handles~~ — RESOLVED: pdanh.work@gmail.com, GitHub
   (anhpd912), LinkedIn (anhpd9). No X/Twitter found in source — omitted.
3. Resume/CV download link — include slot or omit? Defaulting to omit (YAGNI).
