# 02 Pages and content

All content lives in `lib/site.ts`. Anything marked TODO stays marked until the owner supplies it.

## Sitemap
`/` Home, `/services`, `/gallery`, `/training`, `/about`, `/contact`, `/book`, `/offers/[slug]` (future promos only, empty until the owner approves one).

## Home (order matters)
1. Floating nav and full-bleed hero. Proposed headline: "Rule your glow." (owner to approve). Subline: "Spa and salon: massage, facials, nails, waxing, body polishing and skincare." Primary button Book Now, secondary Call.
2. QuickBook card overlapping the hero: service, date, "Confirm on WhatsApp".
3. Marquee of service names.
4. The Empire Menu (home shows all groups, each row links to /book?service=...).
5. Signature feature: arch or circle image with the owner's most popular service (TODO which).
6. Training band in ocean blue with an enquiry button.
7. Reviews (hidden until real reviews exist).
8. Gallery bento, 6 tiles, link to /gallery.
9. Visit: address, hours, map, directions (TODO address and hours).
10. Footer with monogram watermark, phone, WhatsApp, Instagram.

## The Empire Menu (services)

| Group | Items |
|---|---|
| Spa & Body | Massages, Body scrub, Body polishing, Steam bath |
| Skin | Skincare, Facials, Vajacials, Waxing |
| Nails & Feet | Nails, Manicure, Pedicure |
| Training | Training (details TODO) |

Each row: number, name, short plain description (TODO owner wording), dotted leader, price ("Ask for price" until given), Book link. Keep descriptions factual with no health or medical claims. Ask the owner whether hair services are offered before adding any.

## Other pages
- `/services`: the full menu with a category image beside each group on desktop.
- `/gallery`: bento grid of real work.
- `/training`: what is taught, who it is for, duration, price, how to enrol (all TODO), enquiry via WhatsApp.
- `/about`: owner story and team (hide the team section if empty).
- `/contact`: call, WhatsApp, Instagram, address, hours, map.
- `/book`: service, date, time, name, phone. Phase 1 opens WhatsApp with the details filled in.

## SEO
Per-page titles and descriptions, LocalBusiness schema (HealthAndBeautyBusiness) with real address and hours when supplied, sitemap.ts, robots.ts, Open Graph image, descriptive alt text.

## Tracking (Phase 4)
Count taps on Call, WhatsApp and Book, by page, in Convex. No third-party scripts.

## TODO from the owner
Correct spelling of the name (Sheillz) and the logo files, city and address, hours, prices, service descriptions and durations, training details, reviews, team names, Instagram URL, WhatsApp number, whether hair services exist, and her real photos.
