+++
title = "Roadmap - Resysto | Product Development Plan"
description = "See what's built, what's next, and where resysto is going. Our development roadmap organized into phases."
template = "roadmap.html"

[extra]
# Hero Section
hero_title = "Product <span class=\"text-accent-blue\">Roadmap</span>"
hero_subtitle = "See what's built and what's next."

# Introduction
intro_text = "The development roadmap is organized into the following phases, focusing on core functionality, integrations, and intelligent automation."

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
disclaimer_email = "support@resysto.io"

# CTA Section
cta_title = "Your feedback is valuable"
cta_description = "Share your priorities and help shape the future of resysto."
cta_primary_text = "Get Started"
cta_primary_url = "/access"
cta_secondary_text = "Contact Us"
cta_secondary_url = "/about#contact"

# Phases
[[extra.phases]]
name = "Phase 1<br>virtual-CISO (vCISO) App Foundation"
timeline = "Q2–Q3 2025"
description = "Core launch scope for virtual-CISO application, and foundational app modules."
status = "completed"
status_label = "Completed"
status_icon = "✅"
color = "green"
completed = [
    "vCISO application with core modules",
    "Basic Documents Manager service"
]
in_progress = [
    "Documents Manager advanced features",
    "User onboarding and documentation"
]

[[extra.phases]]
name = "Phase 2<br>MSSP Integration, Incident Management application, and first AI services integrations"
timeline = "Q4 2025"
description = "Focus on MSSP enablement, automation, AI-assisted workflows."
status = "completed"
status_label = "Completed"
status_icon = "✅"
color = "green"
deliverables = [
    { icon = "🌐", title = "MSSP Multi-tenant Access", description = "Dedicated console for managed service providers" },
    { icon = "🚨", title = "Incident Management", description = "Improve the platform with an Incident Management solution, for Incident Response workflows and automation" },
    { icon = "🧠", title = "GraphRAG Knowledge System", description = "Design and implement a GraphRAG for contextual and automated security assistance" },
    { icon = "🤖", title = "AI Assistant", description = "Design and implement an intelligent AI agent for security recommendations and automations (e.g. security assessment auto-completion, or third party surveys auto-completion)" }
]
technical_focus = [
    "Multi‑tenant architecture implementation",
    "Marketplace for third‑party extensions",
    "Knowledge base and search capabilities",
    "GenAI integration",
    "Advanced workflow automation"
]

[[extra.phases]]
name = "Phase 3<br>Tools integrations and advance reporting"
timeline = "Q1–Q2 2026"
description = "Focus on tech tools integrations, reporting, and enterprise controls."
status = "in-progress"
status_label = "In Progress"
status_icon = "🔄"
color = "blue"
deliverables = [
    { icon = "🔗", title = "External Tool Integration", description = "First‑party integrations with popular security tools" },
    { icon = "📊", title = "Enhanced Reporting", description = "Advanced analytics and compliance reporting" },
    { icon = "📈", title = "Advanced Analytics", description = "Predictive security posture and risk assessment" },
    { icon = "🔐", title = "Enterprise Features", description = "Advanced role management and audit capabilities" }
]
technical_focus = [
    "API development for third‑party integrations",
    "Enterprise‑grade security and compliance"
]

[[extra.phases]]
name = "Phase 4<br>Future Considerations"
timeline = "Q3 2026+"
description = "Ideas we intend to explore and validate with users."
status = "future"
status_label = "Future"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "Mobile applications",
    "Threat Intelligence lead Cybersecurity Roadmap and Governance definition",
    "Industry‑specific compliance modules"
]
+++
