# Tech Stack

## Context

Global tech stack defaults for Agent OS projects, overridable in project-specific `.agent-os/product/tech-stack.md`.

- App Framework: Leptos.rs 0.8+
- Language: Rust 1.90.0-nightly+
- Primary Database: SurrealDB 2.0+
- ORM: -
- JavaScript Framework: -
- Build Tool: cargo
- Import Strategy: cargo crates.io
- Package Manager: cargo
- Node Version: 22 LTS
- CSS Framework: TailwindCSS 4.1+
- UI Components: daisyUI
- UI Installation: via cargo
- Font Provider: Google Fonts
- Font Loading: Self-hosted for performance
- Icons: Lucide components
- Application Hosting: Contabo
- Hosting Region: Primary region based on user base
- Database Hosting: Contabo deployed SurrealDB
- Database Backups: Daily automated
- Asset Storage: Wasabi S3
- CDN: CloudFront
- Asset Access: Private with signed URLs
- CI/CD Platform: GitHub Actions
- CI/CD Trigger: Push to main/staging branches
- Tests: Run before committing to git, and before deployment
- Production Environment: main branch
- Staging Environment: staging branch
- Develop Environment: develop branch
