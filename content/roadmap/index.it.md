+++
title = "Roadmap - Resysto | Piano di Sviluppo del Prodotto"
description = "Scopri cosa è stato realizzato, cosa c'è in programma e dove stiamo andando con resysto. La nostra roadmap di sviluppo organizzata in fasi."
template = "roadmap.html"

[extra]
# Hero Section
kicker = "PIANO DI RILASCIO"
hero_title = "La Nostra Roadmap di Prodotto"
hero_subtitle = "Scopri cosa è stato realizzato, cosa c'è in programma e dove stiamo andando."

# Introduction
intro_text = "La nostra roadmap di sviluppo è organizzata in tre fasi, focalizzate su funzionalità core, integrazioni e automazione intelligente."

# Labels
completed_label = "Completato"
in_progress_label = "In Corso"
deliverables_label = "Deliverable Chiave"
technical_focus_label = "Focus Tecnico"
looking_ahead_label = "Prospettive Future"

# Disclaimer
disclaimer_text = "La tempistica è soggetta a modifiche in base al feedback degli utenti e alle esigenze del mercato."
disclaimer_updates_text = "Per gli ultimi aggiornamenti, segui il nostro"
disclaimer_blog_link = "blog"
disclaimer_blog_url = "/it/blog"
disclaimer_contact_text = "o contattaci all'indirizzo"
disclaimer_email = "resysto-support@agorasecurity.it"

# CTA Section
cta_title = "Vuoi Influenzare la Nostra Roadmap?"
cta_description = "Apprezziamo il feedback dei clienti. Condividi le tue priorità e aiutaci a plasmare il futuro di resysto."
cta_primary_text = "Inizia"
cta_primary_url = "/it/access"
cta_secondary_text = "Contattaci"
cta_secondary_url = "/it/about#contact"

# Phases
[[extra.phases]]
name = "Phase 1 · virtual-CISO (vCISO) App Foundation"
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
name = "Phase 2 · MSSP Integration, Incident Management application, and first AI services integrations"
timeline = "Q4 2025"
description = "Focus on MSSP enablement, automation, AI-assisted workflows."
status = "in-progress"
status_label = "In Progress"
status_icon = "🔄"
color = "blue"
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
name = "Phase 3 · Tools integrations and advance reporting"
timeline = "Q1–Q2 2026"
description = "Focus on tech tools integrations, reporting, and enterprise controls."
status = "planned"
status_label = "Planned"
status_icon = "🎯"
color = "purple"
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
name = "Future Considerations · Phase 4+"
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
