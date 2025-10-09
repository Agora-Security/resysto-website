+++
title = "Accesso - Resysto | Unisciti alla Beta Privata"
description = "Unisciti al programma di Beta Privata di resysto e ottieni accesso anticipato alla nostra piattaforma di cybersecurity. Richiedi l'accesso e unisciti alla nostra lista d'attesa."
template = "access.html"

[extra]
# Hero Section
kicker = "UNISCITI AL FUTURO DELLA CYBERSECURITY"
hero_title = "Unisciti al nostro Programma Beta Privato"
hero_subtitle = "Siamo attualmente in Beta Privata. Richiedi l'accesso anticipato alla piattaforma resysto completando il nostro modulo di richiesta. I candidati selezionati saranno aggiunti alla nostra lista d'attesa esclusiva."
hero_cta_primary_text = "Richiedi Accesso Beta"
hero_cta_primary_url = "#request-access"
hero_cta_secondary_text = ""
hero_cta_secondary_url = ""

# Console Selection Section
console_title = "A Cosa Avrai Accesso"
console_intro = "Una volta accettato nella Beta Privata, avrai accesso alla nostra potente piattaforma di cybersecurity con capacità individuali e multi-tenant."

# Security & Support Section (title must be before arrays)
security_title = "Security & Support"

# Mobile Section
mobile_title = "Mobile Access Coming Soon"
mobile_text = "We're working on native mobile applications for iOS and Android to give you secure access to your resysto console on the go."

# Final CTA
final_cta_text = "Need help accessing your console?"
final_cta_link_text = "Contact Support"
final_cta_link_url = "mailto:resysto-support@agorasecurity.it"

# Main Console
[[extra.consoles]]
id = "main-console"
title = "Main resysto Platform Console"
icon = '<svg class="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>'
target = "For: Individual organizations, security teams, and direct users."
description = "Access the full resysto platform with all vCISO modules and features:"
features = [
    "People Management and org charts",
    "Documents Manager with OCR and search",
    "Tools Integration inventory",
    "Assets tracking and classification",
    "Cyber Posture monitoring",
    "Security Roadmap planning",
    "Supply Chain Risk Management (SCRM)"
]
cta_text = "Access Main Console"
cta_url = "https://app.resysto.com"
cta_type = "primary"

[[extra.consoles]]
id = "mssp-console"
title = "MSSP Console"
icon = '<svg class="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>'
target = "For: Managed Service Providers, MSSPs, and multi-tenant environments."
description = "Dedicated console for service providers managing multiple client environments:"
features = [
    "Multi-tenant Management across clients",
    "Client Dashboards with aggregated data",
    "Standardized Workflows and templates",
    "Centralized Reporting for all tenants",
    "Bulk Operations and automation",
    "Client Provisioning and onboarding"
]
cta_text = "Access MSSP Console"
cta_url = "https://mssp.resysto.com"
cta_type = "secondary"

[[extra.security_columns]]
title = "Authentication"
icon = '<svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>'
items = [
    "Single Sign-On (SSO)",
    "Multi-Factor Authentication (MFA)",
    "Role-based Access Control"
]

[[extra.security_columns]]
title = "Getting Help"
icon = '<svg class="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
items = [
    { text = "Documentation", link = "https://docs.resysto.com" },
    { text = "Support", link = "mailto:resysto-support@agorasecurity.it" },
    { text = "Training", link = "/about/#contact" }
]

[[extra.security_columns]]
title = "System Status"
icon = '<svg class="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>'
items = [
    { text = "Platform Status", link = "https://status.resysto.com" },
    { text = "Maintenance Windows", link = "https://status.resysto.com/maintenance" },
    { text = "Incident Updates", link = "https://status.resysto.com/incidents" }
]
+++
