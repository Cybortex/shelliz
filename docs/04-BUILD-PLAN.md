# 04 Build plan

## Phase 1: Front end (do first)
Build every page in `02-PAGES-AND-CONTENT.md` with the design language in `01-BRAND-AND-DESIGN.md`. Content from `lib/site.ts`. Booking opens WhatsApp. Then run build and lint, check at 375, 768 and 1280 px, fix contrast and tap targets, commit.

## Phase 2: Real booking (Convex)
Tables: services, staff, bookings, availability (hours, blocked dates), settings. `/book` picks service, optional staff, date and a time slot generated from availability and service duration. Prevent double-booking in a transactional mutation. Keep WhatsApp as a fallback with the booking reference.

## Phase 3: Owner dashboard
`/admin` with Convex Auth (one owner role), not linked publicly. View, confirm, reschedule and cancel bookings; manage services, prices, hours, blocked dates and staff; mark paid or no-show. Works well on a phone. Gallery and service photos come only from the owner's own uploads (jpg, png, webp, max 5 MB, validated on the server).

## Phase 4: Deposits, tracking, SEO
Optional Paystack deposit per service (server-side init, signature-checked webhook). Click tracking dashboard. LocalBusiness schema, sitemap, robots. Lighthouse mobile 90+.

## Definition of done
Build and lint pass, no generated images anywhere, every missing image listed, every TODO listed, deploys on Vercel.
