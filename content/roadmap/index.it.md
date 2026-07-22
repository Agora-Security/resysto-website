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
cta_title = "Il vostro feedback è prezioso"
cta_description = "Condividete le vostre priorità e aiutateci a plasmare il futuro di resysto."
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
deliverables = [
    { icon = "🛡️", title = "Applicazione vCISO", description = "Applicazione virtual-CISO con i moduli core per governance, asset, strumenti e postura di sicurezza" },
    { icon = "📄", title = "Documents Manager", description = "Servizio di gestione documentale, dalle funzionalità di base a quelle avanzate, con controllo di versione e flussi di approvazione" },
    { icon = "🚀", title = "Onboarding e Documentazione", description = "Percorso di onboarding utente e documentazione completa della piattaforma" }
]
technical_focus = [
    "Architettura dei moduli core dell'applicazione vCISO",
    "Servizio di gestione documentale con versioning e approvazioni"
]

[[extra.phases]]
name = "Fase 2<br>Integrazione MSSP e applicazione Incident Management"
timeline = "Q4 2025"
description = "Focus su abilitazione MSSP e automazione dell'Incident Response."
status = "completed"
status_label = "Completato"
status_icon = "✅"
color = "green"
deliverables = [
    { icon = "🌐", title = "Accesso Multi-tenant MSSP", description = "Console dedicata per i fornitori di servizi gestiti" },
    { icon = "🚨", title = "Gestione Incidenti", description = "Migliora la piattaforma con una soluzione di Gestione Incidenti, per workflow di Incident Response e automazione" }
]
technical_focus = [
    "Implementazione architettura multi-tenant",
    "Workflow e automazione di Incident Response",
    "Automazione avanzata dei workflow"
]

[[extra.phases]]
name = "Fase 3<br>Integrazioni strumenti, servizi AI e reporting avanzato"
timeline = "Q1–Q2 2026"
description = "Focus su integrazioni strumenti tech, servizi AI, reporting e controlli enterprise."
status = "in-progress"
status_label = "In Corso"
status_icon = "🔄"
color = "blue"
deliverables = [
    { icon = "🧠", title = "Conoscenza GraphRAG", description = "Progetta e implementa un sistema GraphRAG per assistenza di sicurezza contestuale e automatizzata" },
    { icon = "🤖", title = "Assistente AI", description = "Progetta e implementa un assistente AI per raccomandazioni e bozze di automazione di sicurezza (es. precompilazione di valutazioni di sicurezza o questionari di terze parti)" },
    { icon = "🔗", title = "Integrazione Strumenti Esterni", description = "Integrazioni first-party con strumenti di sicurezza popolari" },
    { icon = "📊", title = "Reportistica Avanzata", description = "Analisi avanzate e reportistica di conformità" },
    { icon = "🔐", title = "Funzionalità Enterprise", description = "Gestione avanzata dei ruoli e capacità di audit" }
]
technical_focus = [
    "Sviluppo API per integrazioni di terze parti",
    "Sicurezza e conformità di livello enterprise"
]

[[extra.phases]]
name = "Fase 4<br>Considerazioni Future"
timeline = "Q3 2026"
description = "Idee che intendiamo esplorare e validare con gli utenti."
status = "future"
status_label = "Futuro"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "Integrazione di un framework di AI agentica",
    "Architettura multi-agente",
    "Integrazioni con canali di comunicazione esterni (es. MS Teams, Slack, Matrix, ecc.)",
    "MCP server",
    "Integrazione SSO enterprise",
    "Moduli di conformità specifici per settore"
]

[[extra.phases]]
name = "Fase 5<br>Considerazioni Future"
timeline = "Q4 2026"
description = "Idee che intendiamo esplorare e validare con gli utenti."
status = "future"
status_label = "Futuro"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "GRC e governance guidate dalla threat intelligence",
    "Gestione degli incidenti guidata dalla GenAI",
    "Ulteriori integrazioni con strumenti esterni",
    "Skill e workflow di AI agentica"
]
+++
