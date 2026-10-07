# AGENTS.md: Sheillz Empire website

Read this first, then `docs/`. These rules apply to every session.

## Project
Website for Sheillz Empire, a spa and salon. Goal: turn Instagram visitors into calls, WhatsApp chats and bookings. Mobile first.

## Stack
Next.js (App Router, TypeScript), Tailwind CSS v4 (tokens in `app/globals.css` via `@theme`, no tailwind.config), `next/font`, `next/image`. Later: Convex (bookings, admin) and Paystack (deposits). Deploy on Vercel.

## Images (strict)
- Use ONLY the owner's real photos in `public/images`, with the exact filenames in `docs/03-IMAGES.md`.
- NEVER generate, draw, source or hotlink images. No AI image tools, stock photos, placeholder photo services, emoji or decorative illustrations in place of photos.
- Missing images stay as the neutral placeholder block from the `Photo` component. Do not fill gaps.
- Never rename a file or add a filename without updating `docs/03-IMAGES.md`.
- The logo is supplied by the owner or a designer as `logo.png`. Do not draw one.

## Content
- Never invent business facts: prices, hours, address, city, reviews, staff, discounts, claims. Unknown items stay as `TODO` in `lib/site.ts` and are listed in `docs/02-PAGES-AND-CONTENT.md`.
- No health or medical claims in service descriptions. Keep wording factual and plain.
- Hide any section whose content is empty (reviews, team) instead of showing filler.

## Design
Follow `docs/01-BRAND-AND-DESIGN.md`. This site must look different from other sites built in this workspace: floating pill nav, full-bleed hero, numbered menu for services, wave dividers, floating mobile dock. Do not reuse layouts or components from other projects.

## Quality
- Keep code simple and typed. No unneeded libraries.
- Accessibility: contrast 4.5:1 for text, visible focus, 44px tap targets, meaningful alt text, `prefers-reduced-motion` respected for ALL motion.
- Run `npm run build` and `npm run lint` before every commit. Commit in small steps with clear messages.
- Validate input on the server. Secrets only in env vars, listed in `.env.example`.

## When done, report
What you built, what is still `TODO`, and which image files are still missing.
