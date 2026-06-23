# Phase 01 — Token Setup & Global Styles

## Context Links
- Design source of truth: `A:\Individual\Portfolio\anhpd\DESIGN.md`
- Authoring skill (future doc edits, not this build): `A:\Individual\Portfolio\anhpd\.claude\skills\design-system\SKILL.md`
- Current globals: `app/globals.css` (Tailwind v4 `@import "tailwindcss"` + `@theme inline`)
- Tailwind v4 theming: use Context7 / `/ck:docs-seeker` "tailwindcss v4 @theme" if syntax uncertain.

## Overview
- **Priority:** P1 (blocks 03)
- **Status:** completed
- **Description:** Map DESIGN.md tokens into `app/globals.css` as CSS custom properties + Tailwind v4 `@theme` entries so components consume semantic tokens (not raw hex). Set black base surface, Space Grotesk default, neobrutalist hard-offset shadows.

## Key Insights
- DESIGN.md mixes color spaces: `oklch`, `oklab`, hex. Preserve exact values — do not "normalize".
- `color.surface.base=#000000` is the page background (dark single-theme). `color.text.primary=oklch(0 0 0)` is BLACK — only legible on the cream/yellow/blue raised surfaces, NOT on black base. **This is a contrast trap** (see Risks). Define an explicit on-base text token.
- `shadow.1` = hard 4px offset black shadow (the neobrutalist signature). `shadow.2` = effectively no shadow (all transparent) — treat as "flat/pressed" state.
- DESIGN.md's existing scaffold globals.css has light-mode `--background:#fffff` + dark `@media` block — **remove**, replaced by single black-base theme.

## Requirements
**Functional**
- Expose all DESIGN.md tokens as CSS vars: fonts, type scale (xs–4xl), colors, spacing (space.1–8), shadows, motion durations.
- Provide a neobrutalist focus-visible style usable site-wide (keyboard-first requirement).
- Default body: black surface base, Space Grotesk, base size 18px / weight 700 / line-height 28px per DESIGN.md.

**Non-functional**
- No raw hex in component files later — components reference `var(--color-*)` / Tailwind token classes only (DESIGN.md "Rules: Do").
- WCAG 2.2 AA contrast on every text/background pairing actually used.

## Architecture
Data flow: `globals.css` defines `:root` CSS vars → `@theme` re-exports a curated subset as Tailwind utility tokens (e.g. `--color-accent-yellow` → `bg-accent-yellow`) → section components (phase 03) consume utilities + vars. Single source = globals.css.

Token naming (semantic, kebab):
- Surfaces: `--color-surface-base` (#000000), `--color-surface-raised` (#fffdf5), `--color-accent-yellow` (#ffd23f), `--color-accent-blue` (#74b9ff).
- Text: `--color-text-on-base` (light, AA on black — DERIVED, not in DESIGN.md; see Risk R1), `--color-text-on-raised` (oklch(0 0 0) = DESIGN primary, for cream/yellow/blue cards), `--color-text-secondary` (oklab(0 0 0 / 0.8)).
- Spacing: `--space-1..8`. Shadows: `--shadow-hard` (shadow.1), `--shadow-flat` (shadow.2).
- Motion: `--motion-instant/fast/normal`.

## Related Code Files
- **Modify:** `app/globals.css` (full rewrite of token + body sections; keep `@import "tailwindcss"` line 1).
- **Create:** none.
- **Delete:** the `prefers-color-scheme: dark` block + light `--background/--foreground` defaults in current globals.css.

## Implementation Steps
1. Keep `@import "tailwindcss";` as line 1.
2. In `:root`, declare all DESIGN.md tokens verbatim as CSS vars (copy exact oklch/oklab/hex strings from `DESIGN.md:14-18`).
3. Add derived `--color-text-on-base` (e.g. `#fffdf5` cream or `oklch(0.98 0 0)`) — must pass AA on `#000000` (cream-on-black ≈ 19:1, safe). Document why it is derived in a CSS comment (explain the why, not the DESIGN.md line per code-comment rule).
4. Add `@theme { ... }` block exporting curated Tailwind tokens: `--color-surface-base`, `--color-surface-raised`, `--color-accent-yellow`, `--color-accent-blue`, `--color-text-on-base`, `--color-text-on-raised`, `--font-display` (Space Grotesk var from layout, phase 04). Map type scale + spacing only if utilities are needed; otherwise leave as plain vars (YAGNI).
5. Set `body { background: var(--color-surface-base); color: var(--color-text-on-base); font-family: var(--font-display), "Space Grotesk", sans-serif; font-size:18px; font-weight:700; line-height:28px; }`.
6. Add global `:focus-visible` rule: visible hard outline (e.g. `outline: 3px solid var(--color-accent-blue); outline-offset: 2px;`) — satisfies keyboard-first + focus-visible AA.
7. Add a `.shadow-hard` utility (or `@utility`) producing DESIGN `shadow.1` for reuse on cards/buttons. Confirm Tailwind v4 `@utility` syntax via docs-seeker before using; fallback = plain class.
8. Verify: `npm run dev`, confirm body bg is black, font loads (font wiring lands in phase 04 — expect fallback sans until then).

## Todo List
- [x] Strip scaffold light/dark vars from globals.css
- [x] Add all DESIGN.md tokens as `:root` CSS vars (exact values)
- [x] Add derived `--color-text-on-base` with AA rationale comment
- [x] Add `@theme` curated token exports
- [x] Set body base styles (bg/color/font/size/weight/line-height)
- [x] Add global focus-visible style
- [x] Add `.shadow-hard` utility
- [x] Dev-server smoke check (black bg renders)

## Success Criteria
- `app/globals.css` contains every DESIGN.md token; no scaffold `prefers-color-scheme` block remains.
- Body renders black background in dev.
- A test element with `.shadow-hard` shows a 4px hard black offset shadow.
- `:focus-visible` produces a visible outline on a tabbed element.

## Risk Assessment
| Risk | L×I | Mitigation |
|------|-----|------------|
| R1: DESIGN primary text `oklch(0 0 0)` (black) is invisible on black base — using it on the page = unreadable | High×High | Introduce derived `--color-text-on-base` (light); reserve DESIGN primary text for cream/yellow/blue surfaces only. Document mapping in phase-03. |
| R2: Tailwind v4 `@theme`/`@utility` syntax differs from assumed | Med×Med | Verify via Context7/docs-seeker before writing; fallback to plain CSS vars + classes (no `@utility`). |
| R3: oklab/oklch unsupported on old browsers | Low×Low | Modern target only (Vercel/Next 16 default browserslist); acceptable. |

## Security Considerations
None (static CSS, no user input).

## Next Steps
- Unblocks phase 03 (components consume tokens) and is consumed by phase 04 body/font wiring.
