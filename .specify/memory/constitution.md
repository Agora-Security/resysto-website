<!-- Sync Impact Report -->
<!-- Version change: 0.0.0 → 1.0.0 -->
<!-- Modified principles: None (initial creation) -->
<!-- Added sections: Core Principles, Technical Constraints, Development Workflow, Governance -->
<!-- Removed sections: None -->
<!-- Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md -->
<!-- Follow-up TODOs: None -->

# Resysto Website Constitution

## Core Principles

### I. Static-First
All functionality MUST work without JavaScript. Progressive enhancement is allowed but core content and navigation MUST be accessible with HTML and CSS only. No critical features may depend on client-side JavaScript execution.

### II. Performance Excellence
Page load MUST be under 2 seconds on mobile networks. All assets MUST be optimized: images compressed, CSS minified, HTML gzipped. Performance budgets MUST be enforced: <500KB total page weight, <50KB CSS, <10KB JavaScript (if absolutely necessary).

### III. Universal Accessibility
All content MUST comply with WCAG 2.1 AA standards. Semantic HTML5 MUST be used for all structure. Keyboard navigation MUST be fully supported. Color contrast MUST meet minimum standards. All images MUST have proper alt text.

### IV. Security by Default
No API keys, secrets, or sensitive data MAY be exposed in client-side code. All forms MUST have CSRF protection. Content Security Policy MUST be enforced. HTTPS MUST be used for all resources. No user input MAY be trusted without validation and sanitization.

### V. Content-First Architecture
Content structure in `content/` MUST drive the site architecture, not technical constraints. Templates MUST be flexible enough to handle any content type. Navigation MUST reflect content hierarchy, not implementation details. Content MUST be the single source of truth.

### VI. Build Process Integrity
The build process MUST be reproducible and deterministic. All dependencies MUST be pinned to exact versions. Build artifacts MUST be identical across environments. The development build MUST match production build behavior as closely as possible.

## Technical Constraints

### Technology Stack
- **Static Site Generator**: Zola (Rust-based) ONLY
- **CSS Framework**: Tailwind CSS ONLY
- **JavaScript**: Minimal usage only, no frameworks
- **Deployment**: Static hosting compatible (Netlify, Vercel, GitHub Pages, etc.)

### File Structure
```
content/          # Markdown content (source of truth)
templates/        # Zola templates (HTML structure)
static/           # Static assets (images, fonts, built CSS)
assets/           # Source assets (Tailwind, source images)
config.toml       # Zola configuration (single source of config)
```

### Content Requirements
- All content MUST be in Markdown format
- Front matter MUST be consistent across content types
- Images MUST be optimized before adding to repository
- File names MUST be lowercase with hyphens only
- Content structure MUST reflect user navigation needs

### Asset Management
- CSS MUST be processed through Tailwind CSS
- Images MUST be in WebP format with fallbacks
- Fonts MUST be self-hosted when possible
- All assets MUST have proper cache headers
- Asset paths MUST be relative and portable

## Development Workflow

### Local Development
1. Install dependencies: `npm install`
2. Start CSS watcher: `npm run dev`
3. Start Zola server: `zola serve`
4. Access site at `http://127.0.0.1:1111`

### Build Process
1. Build CSS: `npm run build:css`
2. Build site: `zola build`
3. Output to `public/` directory
4. Validate build artifacts

### Quality Assurance
- All HTML MUST validate against W3C standards
- All CSS MUST pass Tailwind's built-in linting
- All links MUST be checked for broken references
- Performance MUST be measured with Lighthouse
- Accessibility MUST be validated with automated tools

### Deployment
- GitHub Actions MUST handle all deployments
- `main` branch MUST deploy to production
- `develop` branch MUST build artifacts only
- Deployment MUST include performance and accessibility checks
- Rollback procedure MUST be documented and tested

## Governance

### Amendment Process
Constitution amendments require:
1. Proposal with clear rationale and impact analysis
2. Review by project maintainers
3. Approval by majority vote of maintainers
4. Documentation of changes with version increment
5. Communication to all team members

### Versioning Policy
- **MAJOR**: Backward-incompatible changes to principles or constraints
- **MINOR**: Addition of new principles or expansion of existing ones
- **PATCH**: Clarifications, wording improvements, non-semantic changes

### Compliance Review
- All pull requests MUST be checked against constitution
- Automated checks MUST validate technical constraints
- Manual review MUST focus on principle compliance
- Violations MUST be documented and justified
- Repeated violations MUST trigger constitution review

### Enforcement
- Constitution supersedes all other project documentation
- Technical decisions MUST align with stated principles
- Build processes MUST enforce all constraints
- Team members MUST challenge constitution violations
- Exceptions MUST be temporary and well-documented

**Version**: 1.0.0 | **Ratified**: 2025-09-26 | **Last Amended**: 2025-09-26