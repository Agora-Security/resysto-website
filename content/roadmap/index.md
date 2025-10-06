+++
title = "Roadmap - Resysto | Product Development Plan"
description = "See what's built, what's next, and where resysto is going. Our development roadmap organized into phases."
template = "roadmap.html"

[extra]
# Hero Section
kicker = "SHIPPING PLAN"
hero_title = "Our Product Roadmap"
hero_subtitle = "See what's built, what's next, and where resysto is going."

# Introduction
intro_text = "Our development roadmap is organized into three phases, focusing on core functionality, integrations, and intelligent automation."

# Labels
completed_label = "Completed"
in_progress_label = "In Progress"
deliverables_label = "Key Deliverables"
technical_focus_label = "Technical Focus"
looking_ahead_label = "Looking Ahead"

# Disclaimer
disclaimer_text = "Timeline is subject to change based on user feedback and market demands."
disclaimer_updates_text = "For the latest updates, follow our"
disclaimer_blog_link = "blog"
disclaimer_blog_url = "/blog"
disclaimer_contact_text = "or contact us at"
disclaimer_email = "info@agorasecurity.it"

# CTA Section
cta_title = "Want to Influence Our Roadmap?"
cta_description = "We value customer feedback. Share your priorities and help shape the future of resysto."
cta_primary_text = "Get Started"
cta_primary_url = "/access"
cta_secondary_text = "Contact Us"
cta_secondary_url = "/about#contact"

# Phases
[[extra.phases]]
name = "Phase 1 · MVP Website and vCISO App Foundation"
timeline = "Q1–Q2 2025"
description = "Core launch scope for the website and foundational app modules."
status = "completed"
status_label = "Completed"
status_icon = "✅"
color = "green"
completed = [
    "Marketing website with core pages",
    "vCISO application with seven core modules",
    "Basic Documents Manager service"
]
in_progress = [
    "Documents Manager advanced features",
    "User onboarding and documentation"
]

[[extra.phases]]
name = "Phase 2 · Differentiators and Integrations"
timeline = "Q3–Q4 2025"
description = "Focus on integrations, MSSP enablement, and reporting."
status = "in-progress"
status_label = "In Progress"
status_icon = "🔄"
color = "blue"
deliverables = [
    { icon = "🌐", title = "MSSP Multi-tenant Access", description = "Dedicated console for managed service providers" },
    { icon = "🔗", title = "External Tool Integration", description = "First‑party integrations with popular security tools" },
    { icon = "🧠", title = "RAG Knowledge System", description = "Design and prototype for contextual security assistance" },
    { icon = "📊", title = "Enhanced Reporting", description = "Advanced analytics and compliance reporting" }
]
technical_focus = [
    "API development for third‑party integrations",
    "Multi‑tenant architecture implementation",
    "Knowledge base and search capabilities"
]

[[extra.phases]]
name = "Phase 3 · Scale and Intelligence"
timeline = "Q1–Q2 2026"
description = "Automation, AI-assisted workflows, and enterprise controls."
status = "planned"
status_label = "Planned"
status_icon = "🎯"
color = "purple"
deliverables = [
    { icon = "🚨", title = "Incident Management", description = "Complete incident response workflows and automation" },
    { icon = "🤖", title = "AI Assistant", description = "Intelligent recommendations powered by RAG context" },
    { icon = "📈", title = "Advanced Analytics", description = "Predictive security posture and risk assessment" },
    { icon = "🔐", title = "Enterprise Features", description = "Advanced role management and audit capabilities" }
]
technical_focus = [
    "Machine learning integration",
    "Advanced workflow automation",
    "Enterprise‑grade security and compliance"
]

[[extra.phases]]
name = "Future Considerations · Phase 4+"
timeline = "2026+"
description = "Ideas we intend to explore and validate with users."
status = "future"
status_label = "Future"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "Mobile applications",
    "Advanced threat intelligence integration",
    "Industry‑specific compliance modules",
    "Marketplace for third‑party extensions"
]
+++
