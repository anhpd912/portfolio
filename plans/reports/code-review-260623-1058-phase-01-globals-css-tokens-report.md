# Code Review — Phase 01 globals.css Token Setup

Scope: `app/globals.css` (80 lines) vs `plans/260623-1051-portfolio-site-implementation/phase-01-token-setup-and-global-styles.md` and `DESIGN.md`.

## Findings

- minor — globals.css:69-70 — body sets `color: var(--color-text-on-base)` and `font-family: var(--font-display)` only (no literal `"Space Grotesk", sans-serif` fallback chain as plan step 5 literally specifies); functionally equivalent since `--font-display` itself resolves to `var(--font-geist-sans), var(--font-family-primary)` and `--font-family-primary` already ends in `, sans-serif`. No fix needed, just noting the indirection differs from the plan's literal text.
- nit — globals.css:21 — `--color-text-inverse: oklch(0.373 0.034 259.733)` and globals.css:19 `--color-text-secondary` are declared but unused anywhere in this file (no `@theme` export, no body/utility consumption). Correct per plan (phase 03 consumes them) — not a defect, flagging only as expected dangling state for reviewer awareness.
- nit — globals.css:46 — `--color-text-on-base: #fffdf5` is numerically identical to `--color-surface-raised` (#fffdf5 at globals.css:23). This is a deliberate reuse of a DESIGN.md surface color repurposed as a derived text color, not a DESIGN.md token misrepresented as one — comment at globals.css:44-45 correctly frames it as derived/contrast-trap mitigation rather than citing a DESIGN.md line. Acceptable.

No critical or major issues found.

## Verbatim Token Check (Criterion 1)
Diffed every DESIGN.md token string against `:root` declarations — all match exactly, no normalization:
- Fonts/type scale: `Space Grotesk, sans-serif`, 18px/700/28px base, xs–4xl scale — all verbatim (globals.css:5-16).
- Colors: `oklch(0 0 0)`, `oklab(0 0 0 / 0.8)`, `#000000`, `oklch(0.373 0.034 259.733)`, `#ffd23f`, `#fffdf5`, `#74b9ff` — all verbatim, exact color-space strings preserved (globals.css:18-24).
- Spacing: space.1–8 (4/8/12/16/24/32/40/48px) — verbatim (globals.css:26-33).
- Shadows: shadow.1/shadow.2 multi-layer rgba+oklch strings — verbatim, byte-for-byte (globals.css:35-38).
- Motion: 150/200/500ms — verbatim (globals.css:40-42).

## Scaffold Removal (Criterion 2)
Confirmed no `prefers-color-scheme: dark` media block and no light-mode `--background`/`--foreground` vars remain anywhere in the file.

## Derived Token Validation (Criterion 3)
`--color-text-on-base: #fffdf5` (globals.css:46) on `--color-surface-base: #000000` (globals.css:20) computed contrast ratio = **20.6:1** (WCAG relative luminance formula) — passes AA (4.5:1) and AAA (7:1) with large margin. Comment at globals.css:44-45 documents the *why* (surface-base and text-primary are both black, contrast trap) without referencing plan/DESIGN.md line numbers — compliant with the no-plan-references-in-code-comments rule.

## @theme Curation (Criterion 4)
`@theme inline` block (globals.css:49-57) exports exactly 7 semantic tokens: surface-base, surface-raised, accent-yellow, accent-blue, text-on-base, text-on-raised, font-display. Type scale, spacing, shadows, motion, text-secondary, text-inverse are intentionally left as plain `:root` vars per plan step 4's YAGNI instruction (no utility classes needed yet). No over-export.

`@theme inline` (not bare `@theme`) is correct Tailwind v4 syntax here — `inline` is required when re-pointing theme keys at existing CSS custom properties (vs. literal values) to avoid Tailwind generating a redundant variable indirection.

## Body Base Styles (Criterion 5)
globals.css:67-74 sets background (surface-base/black), color (text-on-base), font-family (font-display var chain), font-size 18px, font-weight 700, line-height 28px — all match DESIGN.md base values.

## Focus-Visible (Criterion 6)
globals.css:76-79 — `:focus-visible { outline: 3px solid var(--color-surface-strong); outline-offset: 2px; }`. Uses `:focus-visible` (keyboard-first, not `:focus`), visible 3px outline with offset, color = accent-blue (#74b9ff) which has strong contrast against black base. Compliant.

## Shadow Utilities (Criterion 7)
globals.css:59-65 — `@utility shadow-hard` / `@utility shadow-flat` using Tailwind v4's native `@utility` directive (not v3 `@layer utilities` or `tailwind.config.js` `boxShadow` extension). Correct v4-native syntax.

## Raw Hex Leakage (Criterion 8)
Outside the `:root` token block, no raw hex/oklch/oklab literals appear — `@theme`, `@utility`, `body`, and `:focus-visible` blocks consume only `var(--*)` references. Clean.

## Build (Criterion 9)
Re-ran `npm run build` — compiled successfully (Turbopack, 2.3s), TypeScript check passed, static pages generated for `/` and `/_not-found`. No CSS/build errors.

## --font-display Placeholder Check
globals.css:56 — `--font-display: var(--font-geist-sans), var(--font-family-primary);`. `--font-geist-sans` is wired in `app/layout.tsx:6-8` via `next/font/google` Geist (current scaffold font, not Space Grotesk). `--font-family-primary` (globals.css:5) is the literal `"Space Grotesk", sans-serif` string fallback. This is correctly set up as an interim placeholder: today it renders Geist (since that's the only font var actually loaded), and once phase 04 swaps `layout.tsx` to load Space Grotesk under the same `--font-geist-sans` var name (or a new var prepended), the chain resolves without touching globals.css. No action needed now — matches plan step 8's expectation ("font wiring lands in phase 04 — expect fallback sans until then").

## Verdict

**PASS** — all 9 acceptance criteria satisfied. No critical/major issues. Two nits (dangling unused-for-now tokens, derived-token color reuse) are both intentional per plan and documented; no fix required.

## Unresolved Questions
None.
