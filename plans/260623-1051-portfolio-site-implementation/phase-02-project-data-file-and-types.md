# Phase 02 — Project Data File & Types

## Context Links
- Path alias: `tsconfig.json:22-23` → `@/*` maps to repo ROOT, so `lib/projects.ts` imports as `@/lib/projects`.
- Consumed by: phase-03 Projects section.

## Overview
- **Priority:** P1 (blocks 03)
- **Status:** completed
- **Description:** Single hardcoded, typed TypeScript data module holding all portfolio content data (projects list; optionally about/contact constants). No CMS, no MDX, no fetch.

## Key Insights
- `@/*` → repo root means the file at `lib/projects.ts` is `@/lib/projects` (NOT `@/src/lib/...`). Do not create a `src/` dir.
- Keeping data + types co-located in one file is DRY/KISS for ~3 cards (DESIGN.md notes "cards (3)"). No need for a `types/` dir or per-project files (YAGNI).
- Server Components by default in App Router — data file is plain TS, imported directly into a server component; zero client JS cost.

## Requirements
**Functional**
- Export a `Project` type and a typed `projects: Project[]` array.
- Each project: `id` (slug, stable key), `title`, `description`, `tech` (string[]), `href` (live URL, optional), `repo` (URL, optional), `highlight` (optional accent assignment for neobrutalist color rotation).
- Export contact/social constants (`SOCIAL_LINKS`, `CONTACT_EMAIL`) here OR in `lib/site-config.ts` — pick one, keep single source.

**Non-functional**
- Fully typed; no `any`. Compiles under `strict` (`tsconfig.json:7`).
- Placeholder content clearly marked `TODO: real content` until user supplies (see plan unresolved Q1/Q2).

## Architecture
Data flow: `lib/projects.ts` (static export) → imported by `components/sections/projects-section.tsx` (server component, phase 03) → `.map()` to `ProjectCard`. No runtime transformation. Compile-time type safety only.

## Related Code Files
- **Create:** `lib/projects.ts` (types + projects array + content constants).
- **Modify:** none.
- **Delete:** none.

## Implementation Steps
1. Create `lib/projects.ts`.
2. Define `export type Project = { id: string; title: string; description: string; tech: string[]; href?: string; repo?: string; accent?: "yellow" | "blue" | "raised" }`.
3. Export `export const projects: Project[] = [ ...3 placeholder entries... ]` with `id` slugs, varied `accent` for neobrutalist color rotation, `TODO` markers in descriptions.
4. Export `export const SOCIAL_LINKS` (array of `{ label, href }` for GitHub/LinkedIn/X — placeholder hrefs) and `export const CONTACT_EMAIL` (placeholder `hello@pdanh.site`).
5. Type-check: `npx tsc --noEmit` (or rely on phase-04 build) — confirm no errors.

## Todo List
- [x] Create `lib/projects.ts`
- [x] Define `Project` type (strict, no `any`)
- [x] Add 3 placeholder projects with varied `accent`
- [x] Add `SOCIAL_LINKS` + `CONTACT_EMAIL` constants
- [x] `tsc --noEmit` passes

## Success Criteria
- `import { projects, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/projects"` resolves and type-checks.
- Array has ≥3 entries; each conforms to `Project`.

## Risk Assessment
| Risk | L×I | Mitigation |
|------|-----|------------|
| R1: Placeholder content shipped as-is to prod | Med×Med | `TODO` markers + plan unresolved Qs; phase-05 deploy gate notes "swap real content before publish". |
| R2: Wrong alias assumption (`@/src/...`) breaks import | Low×High | Verified `@/*`→root at `tsconfig.json:22`; file lives at repo-root `lib/`. |

## Security Considerations
- No secrets in data file (links/emails are public). Do not put any API keys here.

## Next Steps
- Unblocks phase 03 Projects + Contact sections (consumes constants).
