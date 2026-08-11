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
    { icon = "📄", title = "Documents Manager", description = "Repository documentale con adozione dei template dall'hub MSSP, indicizzazione semantica dei contenuti e collegamento dei documenti come evidenza dei controlli" },
    { icon = "🚀", title = "Onboarding e Documentazione", description = "Percorso di onboarding utente e documentazione completa della piattaforma" }
]
technical_focus = [
    "Architettura dei moduli core dell'applicazione vCISO",
    "Servizio di gestione documentale con archiviazione e ricerca semantica"
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
status = "completed"
status_label = "Completato"
status_icon = "✅"
color = "green"
deliverables = [
    { icon = "🧠", title = "Conoscenza GraphRAG", description = "Sistema GraphRAG per assistenza di sicurezza contestuale e automatizzata" },
    { icon = "🤖", title = "Assistente AI", description = "Assistente AI per raccomandazioni e bozze di automazione di sicurezza (es. precompilazione di valutazioni di sicurezza o questionari di terze parti)" },
    { icon = "🔗", title = "Integrazione Strumenti Esterni", description = "Dieci connettori first-party attivi verso strumenti di sicurezza e CMDB" },
    { icon = "📊", title = "Reportistica Avanzata", description = "Analisi di postura, gap e piani di remediation, con export per tenant" },
    { icon = "🔐", title = "Funzionalità Enterprise", description = "Gestione avanzata dei ruoli e capacità di audit" }
]
technical_focus = [
    "Sviluppo API per integrazioni di terze parti",
    "Sicurezza e conformità di livello enterprise"
]

[[extra.phases]]
name = "Fase 4<br>Copertura normativa e capacità operative"
timeline = "Q3–Q4 2026"
description = "Focus su copertura dei quadri normativi europei, governo delle identità e nuove capacità operative."
status = "in-progress"
status_label = "In Corso"
status_icon = "🔄"
color = "purple"
deliverables = [
    { icon = "🪪", title = "Identità e accessi", description = "Governo delle identità e degli accessi, integrato con i sistemi già in uso nell'organizzazione" },
    { icon = "🎯", title = "Gestione del rischio", description = "Criticità di asset e servizi, valutazione e trattamento del rischio in un unico percorso" },
    { icon = "✍️", title = "Ciclo di vita documentale", description = "Approvazione, versioni e visibilità dei documenti, per dimostrare chi ha approvato cosa e quando" },
    { icon = "🗓️", title = "Calendario degli adempimenti", description = "Scadenze, riesami periodici e promemoria in un'unica vista" },
    { icon = "🔗", title = "Più evidenze dagli strumenti in uso", description = "Integrazioni più ampie per raccogliere automaticamente le evidenze di configurazione, continuità e ripristino" },
    { icon = "⚙️", title = "Applicazione CyberOps", description = "Nuova applicazione dedicata alle attività operative di sicurezza, accanto a vCISO e Incident Handler" },
    { icon = "🚨", title = "Gestione degli incidenti", description = "Qualificazione dell'incidente ed esercitazioni, nell'applicazione Incident Handler" },
    { icon = "🛡️", title = "Cyber Resilience Act", description = "Gli obblighi di segnalazione previsti dal regolamento a partire da settembre 2026" }
]
technical_focus = [
    "Modelli di dominio riusabili fra più quadri normativi",
    "Ampliamento della famiglia di connettori"
]

[[extra.phases]]
name = "Fase 5<br>Considerazioni Future"
timeline = "Q4 2026 – Q1 2027"
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
    "Integrazione SSO enterprise verso i sistemi di identità del cliente",
    "Moduli di conformità specifici per settore",
    "CRA — sviluppo sicuro e SBOM, in vista della piena applicazione dell'11 dicembre 2027",
    "Altri regimi: GDPR, DORA, AI Act, Data Act e altri"
]

[[extra.phases]]
name = "Fase 6<br>Considerazioni Future"
timeline = "Q2 2027 in avanti"
description = "Idee che intendiamo esplorare e validare con gli utenti."
status = "future"
status_label = "Futuro"
status_icon = "👀"
color = "blue"
looking_ahead = [
    "GRC e governance guidate dalla threat intelligence",
    "Gestione degli incidenti guidata dalla GenAI",
    "Analisi continua della superficie di attacco",
    "Ulteriori integrazioni con strumenti esterni",
    "Skill e workflow di AI agentica"
]
+++
