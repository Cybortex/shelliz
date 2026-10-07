# 03 Images

Owner's real photos only. Put them in `public/images/` with these exact names (case-sensitive). Never generate or source images. Missing files show the neutral placeholder. Use jpg, png or webp, each under 500 KB after export.

| Filename | Size | Where |
|---|---|---|
| `logo.png` | 512x512, transparent | Nav, footer |
| `logo-white.png` | 512x512, transparent | On dark backgrounds |
| `hero-main.jpg` | 2400x1600 (3:2), subject on the left or centre | Home hero |
| `signature.jpg` | 1200x1200 | Home signature feature |
| `training.jpg` | 1400x1000 | Home and Training page |
| `cat-spa-body.jpg` | 1000x1250 (4:5) | Services, Spa & Body |
| `cat-skin.jpg` | 1000x1250 | Services, Skin |
| `cat-nails-feet.jpg` | 1000x1250 | Services, Nails & Feet |
| `gallery-1.jpg` to `gallery-8.jpg` | 1200 px on the long edge, mixed shapes | Gallery bento (1 to 6 on Home) |
| `about.jpg` | 1000x1250 | About page |
| `team-photo.jpg` | 1920x1080 | About page |
| `location-front.jpg` | 1200x800 | Contact page |

Also add `app/icon.png` (512x512, S and E only) and `app/opengraph-image.jpg` (1200x630). Get the owner's permission for every photo and avoid showing clients' faces without consent.

Add `scripts/check-images.mjs` and `npm run images:check` to list present and missing files and flag files over 500 KB.
