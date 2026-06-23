# Phase 04 — Page & Layout Assembly

## Context Links
- Current layout: `app/layout.tsx` (Geist fonts via `next/font/google`, `<html>`/`<body>` shell).
- Current page: `app/page.tsx` (default scaffold — to be replaced entirely).
- Components: phase-03 (`@/components/sections/*`).
- Fonts doc (VERIFY before editing — version-sensitive): `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` + `node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md`. NOTE: `next/font/google` API verified stable (named import, call with `subsets`, apply `className`/`variable`).
- Layout file convention: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/layout.md`.

## Overview
- **Priority:** P1 (blocks 05)
- **Status:** completed
- **Description:** Swap Geist → Space Grotesk in `app/layout.tsx`, wire the font variable to the `@theme --font-display` token (phase-01), and replace `app/page.tsx` scaffold with the composed single-page section stack inside `<main>`.

## Key Insights
- Layout currently sets `geistSans.variable`/`geistMono.variable` on `<html>` (`app/layout.tsx:5-13,28`). Replace with `Space_Grotesk` from `next/font/google`, exposing a CSS variable (e.g. `--font-space-grotesk`) that phase-01's `@theme --font-display` references.
- DESIGN.md base weight is **700**; Space Grotesk supports 300–700. Load needed weights (or use variable axis) per the verified fonts doc.
- `app/page.tsx` default has its own bg/font classes (`bg-zinc-50 dark:bg-black`, `font-sans`) — remove; styling now comes from globals + section components.
- `body` already has `min-h-full flex flex-col` (`app/layout.tsx:30`) — keep flex column so sections stack; page renders a single `<main>` containing sections.
- **Ordering dependency with phase-01:** the `@theme --font-display` var name MUST match the `variable` set here. Coordinate the exact var string between phase-01 and phase-04 (single name, e.g. `--font-display`).

## Requirements
**Functional**
- `app/layout.tsx`: load Space Grotesk (subset latin, weights incl. 700) with `variable`, apply variable class to `<html>`, drop Geist imports.
- `app/page.tsx`: render `<main>` with `SiteNav` (if used) + `HeroSection` + `ProjectsSection` + `AboutSection` + `ContactSection` in scroll order; remove all scaffold markup + `next/image` logo import.
- Provisional metadata title/description in layout (full SEO in phase-05).

**Non-functional**
- Single `<h1>` total (in Hero) — layout/page must not add another.
- `<main>` landmark wraps content; `SiteNav` is sibling `<nav>` or inside a header above `<main>`.
- Build clean: no unused imports (ESLint `eslint-config-next` will flag).

## Architecture
Data flow: `next/font/google` Space Grotesk → `variable` on `<html>` → CSS var consumed by `@theme --font-display` (phase-01) → `body font-family` → all text. `page.tsx` (server component) imports section components → renders static tree. No client boundary introduced.

## Related Code Files
- **Modify:** `app/layout.tsx` (font swap + variable wiring + provisional metadata), `app/page.tsx` (full replacement).
- **Create:** none.
- **Delete:** Geist/`next/image` scaffold code within those two files; `public/next.svg`/`vercel.svg` references (files can stay or be removed in phase-05 cleanup).

## Implementation Steps
1. Read the two fonts docs above to confirm option names (subsets/weights/variable) for THIS Next version — do not assume.
2. `app/layout.tsx`: replace Geist imports with `import { Space_Grotesk } from "next/font/google"`; configure `{ subsets:["latin"], weight:[...], variable:"--font-display", display:"swap" }`. Confirm whether Space_Grotesk is variable-axis (may not accept `weight`) per font doc — adjust accordingly.
3. Apply `spaceGrotesk.variable` to `<html className>`; keep `h-full antialiased`. Keep `<body className="min-h-full flex flex-col">`.
4. Set provisional `metadata = { title: "Anh Phan — ...", description: "..." }` (final in phase-05).
5. `app/page.tsx`: delete scaffold; `export default function Home()` returns `<main>` (and `<SiteNav/>` if used) composing the four sections in order. Import from `@/components/sections/*`.
6. Remove now-unused `next/image` import + svg usage.
7. Run `npm run build` — must pass (type + lint). Then `npm run dev` and visually verify scroll order, font applied, black bg, sections render with data.

## Todo List
- [x] Read fonts docs (verify weight/variable axis for Space Grotesk)
- [x] Swap Geist → Space Grotesk in layout, wire `--font-display`
- [x] Confirm phase-01 `@theme` references the same var name
- [x] Provisional metadata in layout
- [x] Replace `app/page.tsx` with `<main>` + sections in order
- [x] Remove unused scaffold imports (next/image, svgs)
- [x] `npm run build` passes; `npm run dev` visual check

## Success Criteria
- `npm run build` succeeds, no unused-import lint errors.
- Rendered page shows Space Grotesk (700) on black base, four sections in correct scroll order.
- No default "edit page.tsx" scaffold content remains anywhere.
- Anchor nav (if present) jumps to each section.

## Risk Assessment
| Risk | L×I | Mitigation |
|------|-----|------------|
| R1: Space Grotesk `weight` option misuse if it's variable-axis | Med×Med | Read font doc first; if variable, omit `weight`, rely on `font-weight` CSS. |
| R2: Font var name mismatch between phase-01 `@theme` and layout `variable` | Med×High | Lock single name `--font-display`; phase-04 verifies phase-01 used it before building. |
| R3: Assuming older Next metadata/layout conventions | Low×High | Per AGENTS.md, read bundled layout/metadata docs; static `metadata` export verified current. |
| R4: Leftover `next/image` import → build/lint failure | Med×Low | Remove unused imports; build gate catches. |

## Security Considerations
- `next/font/google` self-hosts fonts at build (no runtime third-party request) — privacy-positive, no CSP concern.

## Next Steps
- Unblocks phase 05 (finalize metadata, OG, deploy verification).
