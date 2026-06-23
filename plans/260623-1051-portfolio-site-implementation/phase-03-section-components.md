# Phase 03 — Section Components

## Context Links
- Tokens: phase-01 (`app/globals.css`) — consume `var(--color-*)` / Tailwind token classes, NO raw hex.
- Data: phase-02 (`@/lib/projects`).
- Component state rules: `DESIGN.md:29-40` (default/hover/focus-visible/active/disabled states; keyboard/pointer/touch; AA).
- Next.js layouts/pages doc (read before composing): `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`.

## Overview
- **Priority:** P1 (blocks 04)
- **Status:** completed
- **Description:** Build the four section components + small shared UI primitives, neobrutalist style, accessible. Pure presentational + data-driven; assembled into the page in phase 04.

## Key Insights
- All sections are **Server Components** by default. Only add `"use client"` if a component needs interactivity (none required: mailto/social are plain anchors, smooth-scroll nav can be pure CSS `scroll-behavior` + anchor `href="#id"`). Keep zero client JS unless proven needed (YAGNI).
- Neobrutalism = hard `.shadow-hard` offset + thick borders + flat accent fills + Space Grotesk bold. Reuse phase-01 `.shadow-hard`; don't reinvent per component (DRY).
- Text-on-surface contrast: use `--color-text-on-base` (light) on the black hero/about background; use `--color-text-on-raised` (DESIGN black primary) on cream/yellow/blue cards. This is the R1 mitigation from phase-01 — enforce it here.
- DESIGN.md component inventory hint: nav (2), buttons (4), cards (3), links (19). Build a reusable `Button`/`LinkButton` + `ProjectCard` rather than bespoke markup each time.

## Requirements
**Functional**
- `Hero`: name/tagline headline, primary CTA (scroll to projects or mailto), neobrutalist accent block.
- `ProjectsSection`: maps `projects` → `ProjectCard` (title, description, tech tags, live/repo links). Empty-state guard if array empty.
- `About`: short bio prose, optional skill/tech chips.
- `Contact`: `CONTACT_EMAIL` mailto + `SOCIAL_LINKS` as accessible links. No form (YAGNI; backend risk deferred to phase-05).
- `SiteNav` (optional, the "2 navigation" hint): in-page anchor links to each section, sticky, keyboard-reachable.

**Non-functional**
- Every interactive element defines default/hover/focus-visible/active states (DESIGN.md mandate). Disabled/loading/error only where applicable (none here — no async).
- Each `<section>` has stable `id` for anchor nav + an accessible heading (`<h2>`); single `<h1>` lives in Hero.
- Semantic landmarks: `<nav>`, `<main>` (in page, phase 04), `<section aria-labelledby>`.
- Touch targets ≥ 44px (AA 2.2 target size).

## Architecture
```
components/
  ui/
    button.tsx          # reusable neobrutalist button/link-button (shadow-hard, states)
    project-card.tsx    # one project, accent-driven fill
    tech-tag.tsx        # small pill for tech[] (optional, DRY for chips)
  sections/
    site-nav.tsx        # in-page anchor nav (optional)
    hero-section.tsx
    projects-section.tsx
    about-section.tsx
    contact-section.tsx
```
Data flow: `projects-section.tsx` imports `projects` → maps to `project-card.tsx`. `contact-section.tsx` imports `SOCIAL_LINKS`/`CONTACT_EMAIL`. Props are typed; cards receive a `Project`. Accent color chosen from `project.accent` → maps to token class.

## Related Code Files
- **Create:** `components/ui/button.tsx`, `components/ui/project-card.tsx`, `components/ui/tech-tag.tsx`, `components/sections/site-nav.tsx`, `components/sections/hero-section.tsx`, `components/sections/projects-section.tsx`, `components/sections/about-section.tsx`, `components/sections/contact-section.tsx`.
- **Modify:** none (page assembly is phase 04).
- **Delete:** none.
- **Constraint:** keep each file < 200 LOC (CLAUDE.md modularization rule) — splitting into ui/ + sections/ already enforces this.

## Implementation Steps
1. `ui/button.tsx`: typed props (`href?` → renders `<a>`; else `<button>`); apply neobrutalist base + hover (translate + shadow shift) + active (flat `.shadow-flat`) + focus-visible (inherits global, or explicit). Variants: `accent` (yellow/blue), `outline`.
2. `ui/tech-tag.tsx`: small bordered pill, raised surface, on-raised text.
3. `ui/project-card.tsx`: accepts `Project`; accent fill via `project.accent`; title `<h3>`, description, `tech.map(TechTag)`, live/repo `Button`s (only render if `href`/`repo` present). Card has `.shadow-hard`, thick border, hover lift.
4. `sections/hero-section.tsx`: `<section id="hero">`, `<h1>` name + tagline, CTA `Button` (mailto or `#projects` anchor). Light text on black base.
5. `sections/projects-section.tsx`: `<section id="projects" aria-labelledby>`, `<h2>`, grid of cards from `projects`; empty-state fallback text if `projects.length===0`.
6. `sections/about-section.tsx`: `<section id="about">`, `<h2>`, bio prose, optional skill chips.
7. `sections/contact-section.tsx`: `<section id="contact">`, `<h2>`, mailto link + social links list (each an accessible `<a>` with discernible text, `rel="noopener noreferrer"` + `target="_blank"` for externals).
8. `sections/site-nav.tsx` (optional): `<nav aria-label="Primary">`, anchor links `#hero/#projects/#about/#contact`, sticky, focus-visible.
9. After each file: keep ≤200 LOC; no raw hex (grep your own output for `#` hex). Do NOT compile-check here in isolation — exports are unused until phase 04; verify in phase 04 build.

## Todo List
- [x] `ui/button.tsx` (variants + all states)
- [x] `ui/tech-tag.tsx`
- [x] `ui/project-card.tsx` (accent-driven, conditional links)
- [x] `sections/hero-section.tsx` (single `<h1>`)
- [x] `sections/projects-section.tsx` (map + empty-state)
- [x] `sections/about-section.tsx`
- [x] `sections/contact-section.tsx` (mailto + socials)
- [x] `sections/site-nav.tsx` (optional sticky anchor nav)
- [x] Verify no raw hex; all files <200 LOC

## Success Criteria
- All eight components export typed, prop-driven, Server Components (no stray `"use client"`).
- Each interactive element has visible hover + focus-visible + active styling.
- ProjectCard renders only links that exist in data (no empty `<a>`).
- Text/background pairings use the on-base vs on-raised token rule (no black-on-black).

## Risk Assessment
| Risk | L×I | Mitigation |
|------|-----|------------|
| R1: Black-on-black text (DESIGN primary on base) | High×High | Enforce on-base vs on-raised token rule from phase-01; code-review grep for `text-on-raised` on black sections. |
| R2: Accidental `"use client"` bloats bundle | Med×Low | Default server; only add if interactivity truly needed (none planned). |
| R3: Smooth-scroll via JS when CSS suffices | Low×Low | Use `scroll-behavior:smooth` (globals) + anchor hrefs; no JS scroll handler. |
| R4: External links missing `rel="noopener"` (tabnabbing) | Med×Med | Mandate `rel="noopener noreferrer"` on all `target="_blank"` anchors. |
| R5: File >200 LOC | Low×Low | Pre-split into ui/ primitives + sections; reuse Button/TechTag (DRY). |

## Security Considerations
- All external anchors: `rel="noopener noreferrer"`.
- No `dangerouslySetInnerHTML`; all content is typed strings rendered as text.
- mailto exposes email publicly (acceptable for portfolio; user-confirmed no form backend).

## Next Steps
- Unblocks phase 04 (page imports + composes these).
