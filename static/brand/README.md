# Resysto — brand assets

Drop-in logo assets for the Resysto SaaS app and any other surface.
**This mark replaces the old blue Agorà Security shield.**

## The mark

A hexagon (protection / structure — straight lines) holding a curved teal **`y`**
— the letter at the heart of **res‑y‑sto** (`y` = Cyber). The arms reach upward
(readiness, *estote parati*) and the curve plays against the straight hexagon.

- Canvas / artboard: `64 × 64`, all strokes `round` joins & caps.
- Hexagon stroke width `3.2`, the `y` stroke width `5`.

## Colours

| token            | hex        | use                                         |
|------------------|------------|---------------------------------------------|
| Teal (accent)    | `#00d3bb`  | the `y`; primary brand accent               |
| Ink (dark)       | `#1e293b`  | hexagon / mono mark on **light** backgrounds |
| White            | `#ffffff`  | hexagon / mono mark on **dark** backgrounds  |
| App blue         | `#2f6dff`  | optional accent to match the app's primary  |
| Tile background  | `#11151c`  | favicon / app-icon rounded tile             |

## Which file do I use?

### In the SaaS app (dark UI) — replaces the blue Agorà shield
**Chosen accent for the app: app-blue (`#2f6dff`)** to match the app's primary colour.
- **Recommended: `svg/resysto-mark-blue.svg`** — the hexagon uses `currentColor` (inherits the
  surrounding text colour, i.e. white in the dark app) and the `y` is app-blue. Inline it as a
  React/SVG component and it adapts to light/dark on its own.
- Prefer a fixed-colour file? Use `svg/resysto-mark-blue-on-dark.svg` (white hexagon + blue `y`),
  or the PNGs `png/resysto-mark-blue-on-dark-<size>.png`.
- Other options if ever needed: teal (`resysto-mark.svg` / `resysto-mark-teal-on-dark.svg`,
  the marketing-site accent) or mono white (`resysto-mark-white.svg`).

> Note: the **marketing website** keeps the **teal** `y`; the **app** uses the **blue** `y`.
> Same mark, accent tuned to each surface's palette.

### On light backgrounds
- `svg/resysto-mark-teal-on-light.svg` (ink hexagon + teal `y`) or mono `svg/resysto-mark-ink.svg`.

### Favicon / app icon / PWA
- `favicon/` contains the rounded **navy tile** versions (white hexagon + teal `y` on `#11151c`)
  so they keep contrast on any browser-tab colour: `favicon.ico`, `favicon-16x16.png`,
  `favicon-32x32.png`, `apple-touch-icon.png` (180), `android-chrome-192x192.png`,
  `android-chrome-512x512.png`. (These are already wired into this website.)

### Raster marks (transparent PNG)
- `png/resysto-mark-<variant>-<size>.png` — variants: `teal-on-dark`, `teal-on-light`,
  `blue-on-dark`, `white`, `ink`; sizes: `512/256/128/64/32`.

### Lockups (mark + wordmark, transparent PNG)
- `png/resysto-lockup-on-dark.png`  — white wordmark + teal `y` (for dark surfaces).
- `png/resysto-lockup-on-light.png` — ink wordmark + teal `y` (for light surfaces).

## Wordmark

The wordmark is **"resysto"** set in **Space Grotesk Bold**, lowercase, letter-spacing
`-0.04em`, with only the **`y`** in teal (`#00d3bb`); `res` and `sto` take the surrounding
text colour. Compose it live with the brand font rather than using an image where you can.

## Files

```
svg/   resysto-mark.svg                 hexagon=currentColor + teal y  (inline / adaptive)
       resysto-mark-teal-on-dark.svg    white hex + teal y
       resysto-mark-teal-on-light.svg   ink hex + teal y
       resysto-mark-blue-on-dark.svg    white hex + app-blue y
       resysto-mark-white.svg           mono white
       resysto-mark-ink.svg             mono ink
       resysto-icon-tile.svg            rounded navy tile (favicon/app-icon source)
png/    resysto-mark-*.png               transparent marks, 512/256/128/64/32
       resysto-lockup-on-{dark,light}.png
favicon/ favicon.ico + favicon/apple/android icons (navy tile)
```
