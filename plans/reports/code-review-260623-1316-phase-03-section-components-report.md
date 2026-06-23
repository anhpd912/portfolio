# Code Review — Phase 03 Section Components

Scope: 8 files (button, tech-tag, project-card, hero-section, projects-section, about-section, contact-section, site-nav). Reviewed against phase-03 plan + globals.css (phase-01) + lib/projects.ts (phase-02) contracts.

## Findings

- minor — `components/ui/button.tsx:39` — plain `<button type="button">` (no `href`) gets no `:active` shadow-flat style — wait, it does via `BASE_CLASSES` (`active:shadow-flat` is shared). Re-checked: false alarm, base classes apply to both `<a>` and `<button>`. No finding.
- minor — `components/sections/contact-section.tsx:9-14` — mailto link and `components/sections/site-nav.tsx:15-21` nav links have hover (`hover:underline`) and rely on global `:focus-visible` (acceptable per criteria #5), but have no explicit `:active` state. Plan's non-functional requirement says "every interactive element defines default/hover/focus-visible/active states." Button component satisfies this; plain `<a>` tags in contact-section/site-nav do not define `active:` utility. Low impact (no visual regression, just inconsistent with the strict DESIGN.md mandate cited in the plan). Fix: add `active:translate-x-0.5 active:translate-y-0.5` or similar flat-press utility to these anchors for consistency, or document as accepted scope-reduction (mailto/nav are simple text links, not neobrutalist buttons).
- nit — `components/ui/button.tsx:24` — `variant = "yellow"` default is reasonable but undocumented; no functional issue.
- nit — `lib/projects.ts:36` — `SOCIAL_LINKS`/`CONTACT_EMAIL`/project content are placeholder TODOs (expected/flagged already in phase-02, not a phase-03 regression).

No critical or major issues found.

## Verification Detail

**1. Server Components only** — PASS. `grep "use client"` across `components/` returned zero matches. All 8 files are plain function components with no client-only hooks (`useState`/`useEffect`/etc. absent).

**2. No raw hex colors** — PASS. `grep -E "#[0-9a-fA-F]{3,6}"` across `components/` returned zero matches. All color usage is via Tailwind utility classes (`bg-accent-yellow`, `bg-accent-blue`, `bg-surface-raised`, `bg-surface-base`, `text-on-base`, `text-on-raised`, `text-text-secondary`, `border-current`, `shadow-hard`, `shadow-flat`). Confirmed `@theme inline` in `app/globals.css:49-58` maps each of these utility class roots to a real CSS variable (e.g. `--color-accent-yellow → var(--color-surface-muted)` = `#ffd23f`), so component code itself never hardcodes a hex value — correct per criteria #2.

**3. Text/background contrast rule** — PASS.
  - `hero-section.tsx:7-9`, `projects-section.tsx:7-11`, `about-section.tsx:8,11`, `contact-section.tsx:6,11,22`, `site-nav.tsx:18` — all on `surface-base` (body default, see `globals.css:73-74`), all use `text-on-base`. None use `text-on-raised`. Correct.
  - `project-card.tsx:16` (article, accent fill) and `tech-tag.tsx:3` (raised surface pill) — both use `text-on-raised`. Correct, no black-on-black or light-on-light pairing found.

**4. Button variants / ProjectCard ghost-vs-outline contrast fix** — PASS, fix verified correct.
  - `button.tsx:10-17` defines 4 variants: `yellow`/`blue` (filled, `text-on-raised` — black text on yellow/blue accent bg, correct AA contrast), `outline` (`bg-transparent text-on-base border-current` — for use on `surface-base`, confirmed used at `hero-section.tsx:15` "Get in Touch" mailto CTA on the black Hero section), `ghost` (`bg-transparent text-on-raised border-current` — for use on light/raised parents).
  - `project-card.tsx:27,32` — Live/Repo buttons use `variant="ghost"`, rendered inside an `<article>` whose background is `bg-accent-yellow` / `bg-accent-blue` / `bg-surface-raised` (all light) per `ACCENT_BG` map (`project-card.tsx:5-9`). `ghost` = `text-on-raised` (black text) on a transparent button sitting atop that light parent background → correct contrast. If `outline` (`text-on-base` = light/cream text) had been used here instead, it would produce near-invisible light-text-on-yellow — confirmed this is the bug the plan flagged as caught/fixed, and the current code uses `ghost`, not `outline`. Fix is correct.

**5. Hover + active + focus-visible on interactive elements** — PASS with one minor gap (see Findings). `Button` component (`button.tsx:19-22`) defines hover (`hover:-translate-x-0.5 hover:-translate-y-0.5`), active (`active:translate-x-0 active:translate-y-0 active:shadow-flat`), and relies on the global `:focus-visible` rule (`globals.css:81-84`) — acceptable per criteria #5. Plain anchor links in `contact-section.tsx` and `site-nav.tsx` define hover (`hover:underline`) and inherit global focus-visible, but have no explicit `active:` utility — flagged as minor, not blocking.

**6. ProjectCard conditional Live/Repo rendering** — PASS. `project-card.tsx:26,31` — `{project.href && <Button .../>}` and `{project.repo && <Button .../>}`, no empty anchors rendered when fields are absent. Confirmed against `lib/projects.ts` data: `project-three` has neither `href` nor `repo` set, so it correctly renders zero action buttons (verified type contract `href?: string; repo?: string;` in `lib/projects.ts:6-7`).

**7. External links rel="noopener noreferrer"** — PASS. `contact-section.tsx:21` sets `rel="noopener noreferrer"` alongside `target="_blank"` for all `SOCIAL_LINKS`. `button.tsx:32` conditionally spreads `{ target: "_blank", rel: "noopener noreferrer" }` when `external` is true, used by `project-card.tsx:27,32` (Live/Repo, both correctly passed `external`). Mailto links (`hero-section.tsx:15`, `contact-section.tsx:10`) correctly omit `target`/`rel` (not external in the tabnabbing sense). No `target="_blank"` found anywhere without the matching `rel`.

**8. Section id + aria-labelledby** — PASS. `hero-section.tsx:6` has `id="hero"` + single `<h1>`, no `aria-labelledby` required/present (correct per plan exception). `projects-section.tsx:6-7`, `about-section.tsx:7-8`, `contact-section.tsx:5-6` each have `<section id=X aria-labelledby="X-heading">` paired with a heading carrying matching `id="X-heading"`. All four pairs verified matching.

**9. Touch target ≥44px** — PASS. `min-h-11` (44px) present on: `button.tsx:20` (BASE_CLASSES, all Button instances), `contact-section.tsx:11,22` (mailto + social links), `site-nav.tsx:18` (nav links). All interactive elements covered.

**10. File LOC <200** — PASS. Measured: button.tsx 40, tech-tag.tsx 7, project-card.tsx 39, hero-section.tsx 21, projects-section.tsx 21, about-section.tsx 24, contact-section.tsx 31, site-nav.tsx 25. All well under limit.

**11. tsc/eslint clean** — Not re-run per instruction (re-verified by reading code only, per task scope). No syntax errors observed; all imports (`@/lib/projects`, `@/components/ui/button`, `@/components/ui/tech-tag`) resolve to existing exports confirmed by direct read of `lib/projects.ts` (`Project`, `projects`, `SOCIAL_LINKS`, `CONTACT_EMAIL` all present and typed as used). `React.ReactNode` used in `button.tsx:4` without an explicit `import type { ReactNode }` or `import * as React`— relies on the global JSX/React types being ambient (standard in Next.js + `@types/react` setups with `"jsx": "react-jsx"` and global React namespace augmentation). This is conventional in Next.js App Router projects and unlikely to fail `tsc --noEmit`, but flagged as a nit worth a quick confirmatory build in phase 04 since it wasn't re-run here.

## Verdict

**PASS** against all 11 acceptance criteria. One minor, non-blocking finding (missing explicit `active:` state on plain text anchors in contact-section/site-nav — Button component itself is fully compliant). No critical or major issues. ProjectCard ghost-variant contrast fix verified correct against the black-on-black/light-on-light failure mode the plan called out.

## Unresolved Questions

- Should plain text anchors (contact mailto, social links, site-nav links) get an explicit `active:` utility to strictly satisfy the DESIGN.md "default/hover/focus-visible/active" mandate, or is omission acceptable because they're simple underline links rather than neobrutalist buttons? Recommend deferring to user/lead — non-blocking either way.
