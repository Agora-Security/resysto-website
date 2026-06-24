+++
title = "Accesso - Resysto | Unisciti alla Beta Privata"
description = "Unisciti al programma di Beta Privata di resysto e ottieni accesso anticipato alla nostra piattaforma di cybersecurity. Richiedi l'accesso e unisciti alla nostra lista d'attesa."
template = "access.html"

[extra]
# Hero Section
hero_title = "Unisciti al nostro Programma Beta Privato"
hero_subtitle = "Siamo attualmente in Beta Privata. Richiedete l'accesso anticipato alla piattaforma resysto completando il modulo di richiesta. I candidati selezionati saranno aggiunti alla nostra lista d'attesa."
hero_cta_primary_text = "Richiedi Accesso Beta"
hero_cta_primary_url = "#request-access"
hero_cta_secondary_text = ""
hero_cta_secondary_url = ""

# Console Selection Section
console_title = "A Cosa Avrete Accesso"
console_intro = "Una volta accettati nella Beta Privata, avrete accesso alla piattaforma di cybersecurity resysto, con funzionalità individuali e multi-tenant."

# Security & Support Section (title must be before arrays)
security_title = "Sicurezza e Supporto"

# Mobile Section
mobile_title = "Accesso Mobile Prossimamente"
mobile_text = "Stiamo lavorando su applicazioni mobili native per iOS e Android per darvi accesso sicuro alla vostra console resysto anche in movimento."

# Final CTA
final_cta_text = "Avete bisogno di aiuto per accedere alla vostra console?"
final_cta_link_text = "Contatta il Supporto"
final_cta_link_url = "mailto:support@resysto.io"

# Main Console
[[extra.consoles]]
id = "main-console"
title = "Console Principale resysto"
icon = '<svg class="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>'
target = "Per: Organizzazioni individuali, team di sicurezza e utenti diretti."
description = "Accedi all'intera piattaforma resysto con tutti i moduli e le funzionalità vCISO:"
features = [
    "Gestione Persone e organigrammi",
    "Gestione Documenti con OCR e ricerca",
    "Inventario Integrazione Strumenti",
    "Tracciamento e classificazione Asset",
    "Monitoraggio della Postura Cyber",
    "Pianificazione Roadmap di Sicurezza",
    "Gestione del Rischio di Terze Parti (TPRM)",
    "Vista Allineamento Conformità e Standard",
    "Marketplace Sourcing e Quotazione Servizi"
]
cta_text = "Accedi alla Console Principale"
cta_url = "https://app.resysto.com"
cta_type = "primary"

[[extra.consoles]]
id = "mssp-console"
title = "Console MSSP"
icon = '<svg class="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>'
target = "Per: Managed Service Provider, MSSP e ambienti multi-tenant."
description = "Console dedicata per fornitori di servizi che gestiscono più ambienti client:"
features = [
    "Gestione Multi-tenant tra clienti",
    "Dashboard Clienti con dati aggregati",
    "Workflow standardizzati e modelli",
    "Reportistica Centralizzata per tutti i tenant",
    "Operazioni Massive e automazione",
    "Provisioning e Onboarding clienti"
]
cta_text = "Accedi alla Console MSSP"
cta_url = "https://mssp.resysto.com"
cta_type = "secondary"

[[extra.security_columns]]
title = "Autenticazione"
icon = '<svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>'
items = [
    "Single Sign-On (SSO)",
    "Autenticazione a Più Fattori (MFA)",
    "Controllo Accessi Basato sui Ruoli"
]

[[extra.security_columns]]
title = "Supporto"
icon = '<svg class="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
items = [
    { text = "Documentazione", link = "https://docs.resysto.com" },
    { text = "Supporto Tecnico", link = "mailto:support@resysto.io" },
    { text = "Formazione", link = "/about/#contact" }
]

[[extra.security_columns]]
title = "Stato del Sistema"
icon = '<svg class="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>'
items = [
    { text = "Stato della Piattaforma", link = "https://status.resysto.com" },
    { text = "Finestre di Manutenzione", link = "https://status.resysto.com/maintenance" },
    { text = "Aggiornamenti Incidenti", link = "https://status.resysto.com/incidents" }
]
+++
