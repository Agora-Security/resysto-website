+++
title = "Roadmap - Resysto | Piano di Sviluppo del Prodotto"
description = "Scopri cosa è stato realizzato, cosa c'è in programma e dove stiamo andando con resysto. La nostra roadmap di sviluppo organizzata in fasi."
template = "roadmap.html"

[extra]
# Hero Section
hero_title = "<span class=\"text-accent-blue\">Roadmap</span> del Prodotto"
hero_subtitle = "Scopri cos'è stato realizzato e cosa c'è in programma."

# Introduction
intro_text = "La roadmap di sviluppo è organizzata nelle seguenti fasi, focalizzate su funzionalità core, integrazioni e automazione intelligente."

# Labels
completed_label = "Completato"
in_progress_label = "In Corso"
deliverables_label = "Obiettivi Chiave"
technical_focus_label = "Focus Tecnico"
looking_ahead_label = "Prospettive Future"

# Disclaimer
disclaimer_text = "La tempistica è soggetta a modifiche in base al feedback degli utenti e alle esigenze del mercato."
disclaimer_updates_text = "Per gli ultimi aggiornamenti, segui il nostro"
disclaimer_blog_link = "blog"
disclaimer_blog_url = "/it/blog"
disclaimer_contact_text = "o contattaci all'indirizzo"
disclaimer_email = "support@resysto.io"

# CTA Section
cta_title = "Il tuo feedback è prezioso"
cta_description = "Condividi le tue priorità e aiutaci a plasmare il futuro di resysto."
cta_primary_text = "Inizia"
cta_primary_url = "/it/access"
cta_secondary_text = "Contattaci"
cta_secondary_url = "/it/about#contact"

# Phases
[[extra.phases]]
name = "Fase 1<br>Fondamenta dell'applicazione virtual-CISO (vCISO)"
timeline = "Q2–Q3 2025"
description = "Ambito di lancio principale per l'applicazione virtual-CISO e moduli fondamentali dell'app."
status = "completed"
status_label = "Completato"
status_icon = "✅"
color = "green"
completed = [
    "Applicazione vCISO con moduli core",
    "Servizio base Documents Manager"
]
in_progress = [
    "Funzionalità avanzate del Documents Manager",
    "Onboarding utente e documentazione"
]

[[extra.phases]]
name = "Fase 2<br>Integrazione MSSP, applicazione Incident Management e prime integrazioni servizi AI"
timeline = "Q4 2025"
description = "Focus su abilitazione MSSP, automazione e workflow assistiti da AI."
status = "completed"
status_label = "Completato"
status_icon = "✅"
color = "green"
deliverables = [
    { icon = "🌐", title = "Accesso Multi-tenant MSSP", description = "Console dedicata per i fornitori di servizi gestiti" },
    { icon = "🚨", title = "Gestione Incidenti", description = "Migliora la piattaforma con una soluzione di Gestione Incidenti, per workflow di Incident Response e automazione" },
    { icon = "🧠", title = "Sistema GraphRAG Knowledge", description = "Progetta e implementa un GraphRAG per assistenza di sicurezza contestuale e automatizzata" },
    { icon = "🤖", title = "AI Assistant", description = "Progetta e implementa un agente AI intelligente per raccomandazioni e automazioni di sicurezza (es. auto-completamento valutazioni di sicurezza o survey di terze parti)" }
]
technical_focus = [
    "Implementazione architettura multi-tenant",
    "Marketplace per estensioni di terze parti",
    "Base di conoscenza e capacità di ricerca",
    "Integrazione GenAI",
    "Automazione avanzata dei workflow"
]

[[extra.phases]]
name = "Fase 3<br>Integrazioni strumenti e reporting avanzato"
timeline = "Q1–Q2 2026"
description = "Focus su integrazioni strumenti tech, reporting e controlli enterprise."
status = "in-progress"
status_label = "In Corso"
status_icon = "🔄"
color = "blue"
deliverables = [
    { icon = "🔗", title = "Integrazione Strumenti Esterni", description = "Integrazioni first-party con strumenti di sicurezza popolari" },
    { icon = "📊", title = "Reporting Avanzato", description = "Analytics avanzati e reporting di conformità" },
    { icon = "📈", title = "Analytics Avanzati", description = "Postura di sicurezza predittiva e valutazione del rischio" },
    { icon = "🔐", title = "Funzionalità Enterprise", description = "Gestione avanzata dei ruoli e capacità di audit" }
]
technical_focus = [
    "Sviluppo API per integrazioni di terze parti",
    "Sicurezza e conformità di livello enterprise"
]

[[extra.phases]]
name = "Fase 4<br>Considerazioni Future"
timeline = "Q3 2026+"
description = "Idee che intendiamo esplorare e validare con gli utenti."
status = "future"
status_label = "Futuro"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "Applicazioni mobile",
    "Roadmap di Cybersecurity guidata da Threat Intelligence e definizione della Governance",
    "Moduli di conformità specifici per settore"
]
+++
