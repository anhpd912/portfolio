# Phase 05 — SEO Metadata & Vercel Readiness

## Context Links
- Metadata guide (VERIFY before editing): `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`.
- `generateMetadata`/`Metadata` object API: `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`.
- OG image file convention: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`.
- Site URL: `https://pdanh.site/` (DESIGN.md:8). Layout from phase-04.

## Overview
- **Priority:** P2 (final gate)
- **Status:** pending
- **Description:** Finalize SEO metadata in `app/layout.tsx` (title, description, OpenGraph, Twitter, `metadataBase`, canonical), confirm static export builds clean for Vercel zero-config deploy, clean up scaffold assets.

## Key Insights
- Static `metadata` object export from `layout.tsx` is the verified-current pattern (confirmed in bundled metadata doc). No `generateMetadata` needed — content is static (KISS).
- `metadataBase: new URL("https://pdanh.site")` is required for OG/Twitter relative image URLs to resolve to absolute. Without it, social cards break.
- OG image: simplest path = static `app/opengraph-image.png` (file convention auto-wires `og:image`). Alternative = dynamic `opengraph-image.tsx` via `ImageResponse` — heavier; YAGNI for v1. Prefer a static PNG, or omit OG image initially and flag as follow-up.
- Site is fully static (no server data) → Vercel builds + deploys with zero config. No `next.config.ts` changes needed unless remote images used (none — no `next/image` remote domains after phase-04 cleanup).
- No env vars, no backend, no database → nothing secret to configure on Vercel.

## Requirements
**Functional**
- `metadata` in `app/layout.tsx`: `metadataBase`, `title` (with `template` optional), `description`, `openGraph` (title/description/url/siteName/type=website), `twitter` (card=summary_large_image), `alternates.canonical`.
- Favicon: `app/favicon.ico` (scaffold default exists) or `app/icon.*` — keep or replace.
- Optional: `app/opengraph-image.png` static social card (or documented follow-up).
- `npm run build` produces clean static output.

**Non-functional**
- Lighthouse SEO ≥ 95; valid OG tags (verify via build output `<head>` or local view-source).
- No console errors/warnings in `npm run build`.
- `lang="en"` already set on `<html>` (phase-04) — keep for a11y/SEO.

## Architecture
Data flow: static `metadata` export → Next renders `<head>` tags at build → served as static HTML on Vercel CDN. OG image (if static file) → auto-referenced by file-convention. No runtime metadata generation.

## Related Code Files
- **Modify:** `app/layout.tsx` (expand provisional metadata → full).
- **Create (optional):** `app/opengraph-image.png` (static social card) OR defer.
- **Create (optional):** `app/robots.ts` / `app/sitemap.ts` (single-page site — low value, YAGNI; mention only).
- **Delete (cleanup):** unused `public/next.svg`, `public/vercel.svg` if no longer referenced.

## Implementation Steps
1. Read the metadata doc to confirm `Metadata` object field names for this Next version (openGraph/twitter/metadataBase/alternates shapes).
2. Expand `metadata` in `app/layout.tsx`: add `metadataBase`, full `openGraph`, `twitter`, `alternates.canonical: "/"`, final `title`/`description` (real name + role; remove placeholders).
3. Decide OG image: add static `app/opengraph-image.png` (1200×630) if asset available; else add a `TODO` follow-up and ship without (cards degrade gracefully to text).
4. Remove unused `public/next.svg`, `public/vercel.svg`.
5. `npm run build` — confirm clean, inspect generated `<head>` (build output or `npm run start` + view-source) for title/description/OG/twitter tags.
6. Vercel readiness check: confirm no `next.config.ts` image-domain or env requirements; project is import-and-deploy. Document deploy steps in completion note (connect repo → Vercel auto-detects Next → deploy; set custom domain pdanh.site).
7. Pre-publish gate: confirm phase-02 placeholder content has been replaced with real content (or explicitly accept placeholders for first deploy).

## Todo List
- [ ] Read metadata doc (confirm field shapes)
- [ ] Full `metadata` object (metadataBase, OG, twitter, canonical, real title/desc)
- [ ] OG image: add static PNG or document follow-up
- [ ] Delete unused scaffold svgs
- [ ] `npm run build` clean; verify head tags
- [ ] Confirm zero Vercel config needed; document deploy steps
- [ ] Pre-publish content check (real vs placeholder)

## Success Criteria
- Build emits correct `<title>`, `<meta name="description">`, `og:*`, `twitter:*`, canonical tags.
- `metadataBase` set → OG image URL (if present) is absolute.
- `npm run build` clean (no warnings/errors); deployable to Vercel with no extra config.
- Lighthouse SEO ≥ 95 locally.

## Risk Assessment
| Risk | L×I | Mitigation |
|------|-----|------------|
| R1: Missing `metadataBase` → broken social card image URLs | Med×Med | Explicitly set `metadataBase: new URL("https://pdanh.site")`. |
| R2: Assuming older metadata API shape | Low×High | Read bundled metadata doc per AGENTS.md; static object export verified current. |
| R3: Placeholder content goes live | Med×Med | Pre-publish content gate (step 7); plan unresolved Qs track real content. |
| R4 (DEFERRED — contact form backend): user chose mailto/social, no form. If a real contact form is later wanted, it needs a backend (API route + email service / 3rd-party form) — out of scope now, flagged for future phase. | Low×Med | Documented as deferred; not built. Revisit only if requirement changes. |

## Security Considerations
- No env vars / secrets to leak to Vercel.
- mailto + public social links only — no PII handling, no form input → no validation/spam surface (consequence of no-backend decision).
- If OG image added, it is a static asset — no injection surface.

## Next Steps
- Final phase. On completion: swap real content (Q1/Q2), deploy to Vercel, attach pdanh.site domain.
- Future (deferred): contact form backend, dynamic OG image, sitemap/robots if content grows.
