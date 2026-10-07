# 01 Brand and design

## Brand
Sheillz Empire is a spa and salon. Feel: calm, confident, a little regal. Ocean blue leads, soft pink warms it, a touch of champagne gold gives the "Empire" feel.

## Colours (put in `app/globals.css` under `@theme`)

```css
@theme inline {
  --color-ocean: #0b4f6c;      /* primary: hero overlay, headings, footer */
  --color-lagoon: #1b7f9e;     /* hover, secondary accents */
  --color-rose: #f9d5e1;       /* soft bands, chips, cards */
  --color-blush: #fff6f9;      /* page background */
  --color-gold: #c9a45c;       /* main buttons, hairlines, small details */
  --color-midnight: #062a3a;   /* body text */
  --font-display: var(--font-fraunces), Georgia, serif;
  --font-sans: var(--font-manrope), system-ui, sans-serif;
}
```
Proportion: 60% blush/rose, 25% ocean/lagoon, 10% rose accents, 5% gold. Gold buttons use midnight text; ocean uses white text. Never put small gold or pink text on blush.

## Type
Fraunces (soft serif, use italics for emphasis) for display; Manrope for body. Both via `next/font`. Large, airy headings; body 16 to 18px.

## Logo (owner or designer supplies `logo.png` and `logo-white.png`)
Monogram: a high-contrast serif S and E interlocked, a slim gold diagonal cut through both ending in a small lotus bud. S ocean, E light pink with ocean outline. Wordmark "SHEILLZ EMPIRE" spaced serif caps, "SPA & SALON" beneath. Favicon: S, E and gold cut only.

## Design language (must differ from the other sites in this workspace)

| Element | This site |
|---|---|
| Navigation | Floating, centered glass pill with rounded-full ends, not a full-width bar |
| Hero | Full-bleed photo with ocean gradient overlay, oversized headline bottom-left, and an overlapping quick-book card |
| Services | A numbered "Empire Menu": editorial list (01, 02, ...) with dotted leaders to the price, grouped by category. No tabs, no card grid |
| Section breaks | Wave SVG dividers that drift slowly |
| Image shapes | Arches, circles and a bento grid (mixed tile sizes) |
| Mobile action bar | A floating rounded dock (Call, WhatsApp, Book) centered above the bottom edge, not a full-width bar |
| Footer | Giant "SE" monogram watermark |
| Type | Fraunces and Manrope |

## Motion (all disabled under `prefers-reduced-motion`)
- Wave dividers drift sideways, very slowly.
- Buttons: a soft ripple grows from the cursor or tap point on hover or press.
- Images reveal with a clip-path mask (arch or circle) as they scroll into view.
- A thin marquee of service names scrolls under the hero and pauses on hover.

## Components
`FloatingNav`, `MobileDock`, `Photo` (loads `/images/<name>`, neutral block when missing), `QuickBook` (service select, date, WhatsApp button), `Marquee`, `WaveDivider`, `MenuGroup` / `MenuRow`, `Bento`, `Footer`.
