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

### Automatic Deployment
GitHub Actions automatically deploys the site to GitHub Pages when you push to the `main` branch.

**Workflow:**
- Push to `main` → builds site with Zola + Tailwind → deploys to GitHub Pages
- Push to `develop` → builds and uploads artifacts (no deployment)

### GitHub Pages Setup
To enable automatic deployment, verify these settings in your GitHub repository:

1. **Pages Configuration**
   - Go to **Settings** → **Pages**
   - Under **Source**, select:
     - **Deploy from a branch**
     - Branch: `gh-pages` (root)

2. **Workflow Permissions**
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, ensure:
     - ✅ **Read and write permissions** is selected
     - ✅ **Allow GitHub Actions to create and approve pull requests** is checked

3. **Custom Domain**
   - The `CNAME` file in `static/` points to `resysto.io`
   - Configure your DNS provider to point to GitHub Pages
   - GitHub will automatically configure SSL/TLS

### Manual Build
To build locally without deploying:
```bash
npm run build
zola build
```
The built site will be in the `public/` directory.

## Content
- Pages under `content/`
- Templates in `templates/`
- CSS entry at `assets/css/main.css` → built to `static/css/main.css`

## SEO & Sharing
- OG/Twitter tags in `templates/base.html`
- Default image: `static/images/og-default.svg`
- Robots: `static/robots.txt`
