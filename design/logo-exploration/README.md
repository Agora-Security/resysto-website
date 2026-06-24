# Logo exploration archive

A record of how the Resysto logo evolved, kept for future reference and iteration.
**Not published** — this folder lives outside `static/`/`content/`, so Zola never builds it
into the site.

Each entry is a self-contained HTML board (inline SVGs + Space Grotesk from Google Fonts)
plus a rendered PNG snapshot. Re-render a board with:

```bash
google-chrome-stable --headless --screenshot=out.png --window-size=1180,1180 \
  file://$PWD/<file>.html
```

## Timeline

- **2026-06-24** — `2026-06-24-logo-review.{html,png}`
  Moved the wordmark from the tri-colour "christmas tree" to a monolithic treatment with a
  single teal **`y`** (`y` = Cyber). Designed a new geometric mark: a **hexagon** (protection /
  structure) holding a curved **`y`**. Explored orientations — upward-`y` vs reverse-`y`/roots
  vs arch+legs — and rejected an earlier double-chevron (read as the Citroën logo). **Chosen:
  U4** (bold upward curved `y`). Accent by surface: **teal** on the marketing site, **app-blue
  (`#2f6dff`)** in the SaaS app. Production assets live in `static/brand/`.
