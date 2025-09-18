# Website Tasks

## Decisions
- [x] Finalize Rust SSG choice (Zola v0.21 vs Cobalt); document decision

## Initialization
- [x] Initialize Zola project structure and base config
- [x] Set base_url, languages, sitemap/RSS, and taxonomies in Zola config
- [x] Add SEO/OG defaults (titles, descriptions, canonical, OG/Twitter)

## Styling
- [x] Install Tailwind CSS v4 via CLI; minimal Node toolchain
- [x] Create Tailwind config, content scanning, and base theme tokens
- [x] Implement base layout, header/nav, footer, and typography

## Pages
- [ ] Build responsive landing page (mission, problems, users, capabilities)
- [ ] Create features page separating apps/modules/services (vCISO detailed)
- [ ] Create roadmap page with timeline of apps/modules/services
- [ ] Create partners page (MSP/MSSP and technical partner program)
- [ ] Create about page (story, scenarios, Agora Security)
- [ ] Add blog section: list, post template, tags, RSS feed
- [ ] Create access page with two external console links

## SEO & Sharing
- [x] Add robots.txt and canonical URLs; verify sitemap generation
- [x] Create default OG social image and configure per-page override

## CI/CD & Hosting
- [x] Set up GitHub Actions: deploy on main, build-check on develop
- [x] Configure GitHub Pages and optional CNAME placeholder

## Documentation & Quality
- [x] Write README: setup, dev, build, deploy, content authoring
- [ ] Accessibility and performance pass (lighthouse-like checklist)

