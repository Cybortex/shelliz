# Sheillz Empire: build pack

| File | Purpose |
|---|---|
| `AGENTS.md` / `CLAUDE.md` | Rules the coding tool must follow (images, content, quality) |
| `docs/01-BRAND-AND-DESIGN.md` | Colours, type, logo, layout language, motion, components |
| `docs/02-PAGES-AND-CONTENT.md` | Sitemap, sections, copy, services, SEO, tracking, TODOs |
| `docs/03-IMAGES.md` | Exact image filenames and sizes |
| `docs/04-BUILD-PLAN.md` | Phases and the booking and admin spec |

## Start

```bash
npx create-next-app@latest sheillz --ts --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd sheillz
```
Copy this pack's files into the project root (AGENTS.md, CLAUDE.md, README.md, docs/). Then give the coding tool this prompt:

```
Read AGENTS.md and everything in docs/. Build Phase 1 from docs/04-BUILD-PLAN.md.
Follow the design language in docs/01-BRAND-AND-DESIGN.md exactly. Do not reuse
layouts from other projects. Do not generate or source any images. Use the
Photo component with the filenames in docs/03-IMAGES.md. Run build and lint,
commit, then report what is TODO and which images are missing.
```
