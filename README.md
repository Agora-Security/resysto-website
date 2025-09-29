# resysto Website

Static marketing site for resysto.

## Prerequisites
- Zola (Rust SSG) available in PATH, or use `zola` from CI steps
- Node 20+ (for Tailwind CLI only)

## Install
```bash
npm install
```

## Develop
In one terminal:
```bash
npm run dev
```

In another terminal:
```bash
zola serve
```

Open `http://127.0.0.1:1111`.

## Build
```bash
npm run build
```
Outputs to `public/`.

## Deploy
GitHub Actions deploys on pushes to `main`. Branch `develop` builds artifacts only.

## Content
- Pages under `content/`
- Templates in `templates/`
- CSS entry at `assets/css/main.css` → built to `static/css/main.css`

## SEO & Sharing
- OG/Twitter tags in `templates/base.html`
- Default image: `static/images/og-default.svg`
- Robots: `static/robots.txt`
