# Registro delle Modifiche - Resysto

## Note per gli Sviluppatori

Nel file `config.toml` sono presenti due diverse opzioni per la configurazione del *syntax highlighting*, a causa di breaking changes introdotte nelle versioni recenti di Zola (v0.22+). 
Attualmente la nuova versione è attiva e quella obsoleta è commentata.

- **Se utilizzi Zola v0.22 o successive:** Lascia la configurazione così com'è (Opzione A scommentata, Opzione B commentata).
- **Se utilizzi versioni di Zola precedenti (es. v0.19.x):** Devi commentare il blocco `[markdown.highlighting]` dell'Opzione A e togliere i commenti dal blocco `[markdown]` dell'Opzione B.

Ecco come si presenta il blocco nel `config.toml` (intorno alla riga 65):
```toml
# --- OPZIONE A: Per Zola v0.22.0 o successive (Es. Asahi Linux compilato da sorgente) ---
[markdown.highlighting]
enabled = true
theme = "ayu-dark"

# --- OPZIONE B: Per Zola v0.19.x o precedenti (Rimuovi il '#' per attivare se usi versioni vecchie) ---
# [markdown]
# highlight_code = true
# highlight_theme = "ayu-dark"
```


## [22 Giugno 2026]

- **Inversione Modulo "Supply Chain Risk" / "Third-Party Risk":** Scambiato il titolo del sottomodulo `"Supply Chain Risk"` (inglese) / `"Rischio Supply Chain"` (italiano) con `"Third-Party Risk"` / `"Rischio Terze Parti"` all'interno delle caratteristiche della piattaforma (`content/features/index.md` e `content/features/index.it.md`). Aggiornate le descrizioni interne per farle iniziare rispettivamente con `"Supply Chain Risk Management (SCRM)"` e `"Gestione del rischio della supply chain (SCRM)"`. Aggiornati coerentemente anche i riferimenti nella panoramica moduli in Homepage (`content/_index.md` e `content/_index.it.md`) e le liste funzionalità nelle pagine di accesso (`content/access/index.md` e `content/access/index.it.md` in `"Third-Party Risk Management (TPRM)"`).
- **Allineamento Altezza Card Caratteristiche:** Integrato `auto-rows-fr` sulla griglia dei sottomoduli e dei servizi della piattaforma in `templates/features.html` per forzare l'uniformità delle altezze di tutte le card indipendentemente dalla riga in cui si trovano, allineando correttamente la card isolata di "Third-Party Risk" alle altre.
- **Posizionamento Pulsante "Torna Su":** Spostato il pulsante di risalita (`back-to-top`) più a sinistra e più in basso (`bottom-24 right-24` invece di `bottom-32 right-6`) in `templates/base.html` per ottimizzarne l'usabilità e la resa visiva rispetto al layout.
- **Aggiunta Nuovi Moduli Attivi "Compliance" e "Marketplace":** Integrati i sottomoduli mancanti all'interno dell'applicazione vCISO nella pagina delle caratteristiche (`content/features/index.md` e `content/features/index.it.md`), nella Homepage e nelle liste di accesso alla console, corredandoli delle descrizioni e delle icone SVG (Scudo spuntato e Carrello) dedicate.
- **Restyling Elementi Roadmap (In Corso):** Aggiornato il template `templates/roadmap.html` per far sì che la sezione "In Corso" (all'interno della prima card della roadmap) utilizzi il colore arancione (`text-orange-500` / `dark:text-orange-400`) sia per l'intestazione che per le icone di progresso, e rimosso l'effetto di rotazione dinamica (`animate-spin`) rendendo le icone statiche.
- **Traduzione Roadmap "Obiettivi Chiave":** Tradotta l'etichetta `deliverables_label` in `content/roadmap/index.it.md` da `"Deliverable Chiave"` a `"Obiettivi Chiave"` per utilizzare un'espressione puramente in lingua italiana sulle card della roadmap.
- **Centratura Timeline Roadmap:** Corretto l'allineamento orizzontale dei cerchi indicatori delle fasi (dots) rispetto alla linea verticale della timeline in `templates/roadmap.html`, sostituendo le classi legacy `transform -translate-x-1/2` con margini negativi Tailwind precisi (`-ml-0.5` per le linee da 4px, `-ml-3.5` per i cerchi da 28px su desktop e `-ml-2` per i cerchi da 16px su mobile) per eliminare conflitti e garantire una centratura millimetrica.
- **Gradiente Linea Timeline:** Modificato il gradiente della linea centrale e mobile in `templates/roadmap.html` in modo che parta da blu, passi per il verde e termini in viola (`from-accent-blue via-accent-green to-accent-purple`), allineandolo ai colori del brand Resysto.
- **Correzione Titolo Roadmap (Italiano):** Aggiornato il titolo della sezione Hero in `content/roadmap/index.it.md` in `"La Nostra Roadmap del Prodotto"`.
- **Restyling Card "Ideal Partners" & Colori Dinamici:** Aggiornata la card principale in `templates/partners.html` sostituendo lo sfondo piatto con un gradiente sfumato verde (`bg-gradient-to-br`) e bordo a contrasto. Applicato alle micro-card interne un bordo colorato dinamicamente (blu per partner IT/infrastrutture, verde per CISO/governance, viola per cybersecurity) e rimosse le etichette di stato `(Implementing)`, `(Planned)` dai titoli in `content/partners`.
- **Evidenziazione Testo nei Titoli Hero:** Resa possibile l'applicazione del colore blu al testo in specifici titoli (la parola "resysto" in pagina Partners e "Blog" in pagina Blog) tramite span HTML iniettati nei file markdown, supportati dal filtro `| safe` nei template corrispondenti.
- **Risoluzione Sticky Footer:** Modificata la struttura globale in `templates/base.html` applicando `flex flex-col min-h-screen` a `<body>` e `flex-grow` a `<main>`. Questo garantisce che il footer ("© 2025 Resysto.io") sia spinto rigorosamente in fondo allo schermo in ogni pagina, anche su quelle con poco contenuto.
- **Strutturazione Layout Homepage:** Aggiunti divisori orizzontali sfumati (`bg-gradient-to-r from-transparent via-gray-200 to-transparent`) tra le grandi sezioni in `templates/index.html`. Aggiunte etichette in uppercase ("kicker") per guidare lo scorrimento ("TARGET AUDIENCE", "I NOSTRI VALORI", "COME TI AIUTIAMO", ecc.), risolvendo conflitti nel TOML di front-matter.
- **Controllo Integrità Link e Nodi:** Verificata la corretta coesione di tutte le rotte interne del sito tramite `zola check` e revisione del costrutto `config.base_url` nei vari menu, confermando zero pagine orfane e il corretto indirizzamento anche durante il cambio lingua dinamico via Javascript.
- **Traduzione Etichette di Stato Homepage:** Localizzate le etichette badge dei moduli sulla Homepage sostituendo i testi hardcoded ("Active", "In Progress") in `templates/index.html` con il sistema `trans()`. Inserite le chiavi `status_active` ("Online") e `status_in_progress` ("In sviluppo") in `config.toml` riprendendo la traduzione della pagina Caratteristiche.

- **Aggiornato `tailwind.config.js`:** Sincronizzata la palette colori (`primary`, `secondary`, `accent`, `dark`) con le variabili neon e i background del file CSS principale.
  ```javascript
  colors: {
    'primary': {
      DEFAULT: '#378dff', // primary blue
      50: '#ecf3fe',
      // ... shades 100-950
    },
    'secondary': {
      DEFAULT: '#b071ff', // secondary purple
    },
    'accent': {
      DEFAULT: '#00d3bb', // accent turquoise
      // ... shades
    },
    'dark': {
      'bg': '#2a2e38',      // base-100 slate
      'surface': '#343842', // base-200 slate
      'border': '#3c404a',  // base-300 slate
    }
  }
  ```

- **Riprogettazione UI/UX Pro Max:** Migrata tutta la grafica del sito alla palette DaisyUI `resysto` (sfondi slate `#2a2e38`, primario azzurro `#378dff`, secondario viola `#b071ff`, accento turchese `#00d3bb`).
  - Aggiornato `:root` in `static/css/main.css`:
    ```css
    :root {
        --accent-blue: #378dff;   /* primary */
        --accent-green: #00d3bb;  /* accent */
        --accent-purple: #b071ff; /* secondary */
        --dark-bg: #2a2e38;       /* base-100 */
        --dark-surface: #343842;  /* base-200 */
        --dark-border: #3c404a;   /* base-300 */
    }
    ```

- **Sfondo Mesh Gradient Animato:** Aggiunti tre blur blob animati e fluttuanti (`animate-blob`) nello sfondo del sito che utilizzano i tre colori principali (opacità 15% in dark mode, 20% in light mode).
  - Inserito in `templates/base.html`:
    ```html
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-blue/20 dark:bg-accent-blue/15 blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-purple/20 dark:bg-accent-purple/15 blur-[120px] animate-blob animation-delay-2000"></div>
        <div class="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-accent-green/20 dark:bg-accent-green/15 blur-[120px] animate-blob animation-delay-4000"></div>
    </div>
    ```
  - Classi e keyframe aggiunti in `static/css/input.css`:
    ```css
    @keyframes blob-movement {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.15); }
        66% { transform: translate(-30px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob { animation: blob-movement 25s infinite alternate ease-in-out; }
    ```

- **Pulizia Tipografica Titoli:** Rimossi i rettangoli di box-shadow (`glow-blue`) attorno ai titoli in `index.html` e `features.html`, lasciando il testo del colore azzurro pulito in stile minimalista (prendendo ispirazione da Cyberlys e Ianustec).
  - Esempio di modifica in `templates/index.html`:
    ```diff
    - Central <span class="text-accent-blue glow-blue">Cyber Resilience</span> and <span class="text-accent-blue glow-blue">Data Protection</span> platform
    + Central <span class="text-accent-blue">Cyber Resilience</span> and <span class="text-accent-blue">Data Protection</span> platform
    ```

- **Flusso Watcher Tailwind Ottimizzato:** Creato `static/css/input.css` per separare il codice sorgente CSS dal file compilato finale `static/css/main.css`.
  - Aggiornati gli script in `package.json`:
    ```json
    "dev": "tailwindcss -i ./static/css/input.css -o ./static/css/main.css --watch",
    "build:css": "tailwindcss -i ./static/css/input.css -o ./static/css/main.css --minify"
    ```

- **Pulsante "Torna Su" (Back to Top):** Aggiunto un pulsante fisso in basso a destra (inizialmente posizionato a `bottom-6` e successivamente aggiornato a `bottom-32` per evitare di coprire i contatti del footer come "Contact: support@resysto.io") con effetto glassmorphism che compare dopo 300px di scorrimento e consente di ritornare in cima alla pagina con uno scorrimento fluido.
  - Inserito in `templates/base.html` (posizionato sopra il tag `<script>` per consentire al parser DOM di trovarlo prima dell'esecuzione dello script):
    ```html
    <button id="back-to-top" class="fixed bottom-32 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border border-gray-200 dark:border-dark-border text-accent-blue opacity-0 pointer-events-none translate-y-4 transition-all duration-300 shadow-lg hover:shadow-neon-blue hover:scale-110 active:scale-95 cursor-pointer" aria-label="Back to top">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </button>
    ```
  - Comportamento e logica inseriti nella sezione script di `templates/base.html`:
    ```javascript
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopButton.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                backToTopButton.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopButton.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    ```

- **Allineamento Sezione "Use Cases" (Home):** Sostituito lo sfondo grigio a schermo intero (`bg-gray-50 dark:bg-dark-surface`) con uno sfondo grigio molto più tenue e limitato al contenitore della pagina (`container mx-auto px-6 bg-gray-50/30 dark:bg-dark-surface/20 rounded-2xl`). Questo mantiene la continuità visiva dello sfondo sfumato animato sui lati, offrendo al contempo una separazione visiva pulita. Le card all'interno sono state impostate su `bg-white dark:bg-dark-surface` per garantire un perfetto contrasto a livelli.
  - Modifica in `templates/index.html`:
    ```diff
    - <section id="use-cases" class="bg-gray-50 dark:bg-dark-surface py-20">
    -     <div class="container mx-auto px-6">
    + <section id="use-cases" class="container mx-auto px-6 py-20 bg-gray-50/30 dark:bg-dark-surface/20 rounded-2xl">
    ...
    -             <div class="bg-white dark:bg-dark-bg border border-gray-200 ...">
    +             <div class="bg-white dark:bg-dark-surface border border-gray-200 ...">
    ```

- **Evidenziazione Sfondo Header e Footer:** Aggiornato lo sfondo dell'header sticky in `templates/base.html` a `bg-gray-50/80` (light mode) e `dark:bg-dark-surface/80` (dark mode) per staccarlo meglio dallo sfondo della pagina sfruttando l'effetto blur. Aggiunto uno sfondo altrettanto leggero al footer (`bg-gray-50/30` e `dark:bg-dark-surface/15`) per dare una migliore delimitazione visiva.
  - Modifica in `templates/base.html`:
    ```diff
      <!-- Header (Sticky Navigation) -->
      <header
    -     class="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-dark-bg/75 border-b border-gray-200 dark:border-dark-border/80 shadow-sm shadow-dark-bg/5">
    +     class="sticky top-0 z-50 backdrop-blur-xl bg-gray-50/80 dark:bg-dark-surface/80 border-b border-gray-200 dark:border-dark-border/80 shadow-sm shadow-dark-bg/5">
    ...
      <!-- Footer -->
    - <footer class="border-t border-gray-200 dark:border-dark-border mt-20">
    + <footer class="border-t border-gray-200 dark:border-dark-border mt-20 bg-gray-50/30 dark:bg-dark-surface/15">
    ```

- **Aggiornamento Stato "vCISO" e "Supply Chain Risk":** Modificato lo stato dell'applicazione `vCISO` e del modulo `Supply Chain Risk` all'interno dei file di contenuto `content/features/index.md` e `content/features/index.it.md` da `beta`/`progress` a `implemented` (che attiva il badge verde) e la rispettiva etichetta di testo a "Online".
  - Modifica in `content/features/index.it.md` (e specularmente in `content/features/index.md` in inglese):
    ```diff
      [[extra.applications]]
      name = "Applicazione: vCISO"
    - status = "beta"
    - status_label = "beta"
    + status = "implemented"
    + status_label = "Online"
    ...
      [[extra.applications.modules]]
      name = "Supply Chain Risk"
    - status = "progress"
    - status_label = "In sviluppo"
    + status = "implemented"
    + status_label = "Online"
    ```

- **Integrazione dei Punti di Valore GRC (About):** Sostituito l'elenco tecnico delle soluzioni per le PMI ("Per le PMI" / "For SMBs") nella pagina About (`content/about/index.it.md` e `content/about/index.md`) con i 5 punti di comunicazione non-tecnici consigliati da Carin, per spiegare Resysto a un pubblico business non tecnico (prodotto chiave in mano, supporto consulenziale GRC, costi adeguati al budget PMI, governance attuativa reale, e visibilità manageriale concreta).
  - Modifica in `content/about/index.it.md` (e specularmente in `content/about/index.md` in inglese):
    ```diff
      [[extra.solutions]]
      title = "Per le PMI"
      solutions = [
    -     "CISO Virtuale: Framework di governance completo senza assunzione a tempo pieno",
    -     "Implementazione Guidata: Flussi di lavoro e template passo-passo",
    -     "Prove Automatizzate: Raccolta prove di conformità mentre lavori",
    -     "Accesso Conveniente: Capacità aziendali a prezzi per PMI",
    -     "Rapido Time-to-Value: Inizia a vedere risultati in settimane, non mesi"
    +     "Soluzione Chiave in Mano: Un prodotto chiave in mano in due direzioni: l'operatività reale e la conformità procedurale.",
    +     "Supporto Consulenziale GRC: Accompagnamento e approccio consulenziale d'eccellenza, forte di un'esperienza pluriennale e competenze interne in materia GRC (Governance, Risk and Compliance).",
    +     "Costi Convenienti per PMI: Compliance e certificazioni ad un costo gestibile e adeguato al budget delle PMI, permettendo di accedere a mercati e consorzi che esigono elevati standard di sicurezza.",
    +     "Governance Concreta e Attuativa: Sgraviamo le aziende dalla compilazione manuale di lunghi questionari, trasformando la governance in azioni reali e non solo teoriche.",
    +     "Visibilità Reale per i Manager: Chiara visibilità dello stato dell'arte della protezione cyber aziendale a beneficio dei manager, basata su dati concreti e non su risposte teoriche."
      ]
    ```

- **Integrazione Sezione GRC in Homepage (UI/UX Pro Max):** Creata la sezione `#why-resysto` nella Homepage con una griglia asimmetrica a 3 colonne per disporre i 5 punti di valore GRC per utenti non tecnici (Semplificazione, Consulenza GRC, Visibilità Manager, PMI/Consorzi come punto extra-chiave, Zero Questionari).
  - Aggiunti i metadati TOML all'inizio del blocco `[extra]` di `content/_index.it.md` e `content/_index.md` per evitare problemi di parsing.
  - Implementata la struttura HTML in `templates/index.html` tra `#built-for` e `#use-cases`.
  - Aggiunte le utility CSS in `static/css/input.css` per gestire gli effetti di hover e le ombreggiature al neon colorate (`hover:shadow-neon-blue`, `hover:shadow-neon-purple`, `hover:shadow-neon-green`).
  - Esempio di implementazione della griglia in `templates/index.html`:
    ```html
    <!-- Why Resysto (GRC Strengths) Section -->
    <section id="why-resysto" class="container mx-auto px-6 py-20">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4">
                {{ section.extra.why_resysto_title }}
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {{ section.extra.why_resysto_subtitle }}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Cards with custom borders and neon glow shadows -->
            ...
        </div>
    </section>
    ```

- **Semplificazione Contenuti e Testi della Homepage:**
  - Modificato il titolo Hero in `templates/index.html` rimuovendo "Data Protection" per concentrare il focus primario su **Central Cyber Resilience platform**.
  - Aggiornato il sottotitolo Hero (sia nella versione italiana `content/_index.it.md` che in quella inglese `content/_index.md`) sostituendo il termine "privacy" con "data protection".
  - Rimossa completamente la sezione **Problemi che risolviamo (Problems we solve)** e le relative tre card ("Operazioni frammentate", "Onere delle prove", "Mancanza di leadership") da `templates/index.html`, `content/_index.it.md` e `content/_index.md`, in quanto questi concetti sono già coperti ed enfatizzati dalla sezione GRC "Perché scegliere Resysto".
  - Aggiornata la descrizione delle pagine nella configurazione iniziale (front matter) per riflettere le medesime modifiche terminologiche.

- **Localizzazione Pulsanti e Unificazione Card della Homepage:**
  - Tradotti i pulsanti "Learn About Our Partner Program" e "Explore All Features" in italiano per la versione in lingua italiana della Homepage, rendendoli dinamici tramite front matter variables (`partner_program_button` e `explore_features_button`).
  - Corretti i link dei pulsanti nel template per reindirizzare alla versione linguistica corrente della pagina di destinazione (es. `/it/partners/` e `/it/features/` quando in lingua italiana).
  - Unificato lo stile delle card "Prodotto Chiave in Mano" e "Supporto Consulenziale" nella sezione `#why-resysto` applicando un contorno colorato (`border-accent-blue/40` e `border-accent-green/40`) e lo sfondo sfumato sfocato per allinearle visivamente alle altre card evidenziate (Compliance PMI e Zero Questionari).
  - **Ottimizzazione degli Spazi verticali (Gap) tra Sezioni:** Allineato il padding inferiore della sezione Hero in `templates/index.html` da `py-24 md:py-32` a `pt-24 pb-20 md:pt-32 md:pb-20`. Questo rende lo spazio tra la sezione Hero e "Costruito per" perfettamente uniforme a quello di tutti gli altri capitoli della pagina Home (`80px` di distanza verticale).

- **Traduzione e Localizzazione della Pagina Caratteristiche (Features):**
  - Tradotti in italiano il titolo principale dell'Hero ("Esplora le Funzionalità di resysto") e i relativi pulsanti ("See capabilities" -> "Vedi funzionalità", "Access platform" -> "Accedi alla piattaforma") all'interno della pagina in lingua italiana, configurando le nuove variabili front matter (`hero_title`, `hero_cta_primary` e `hero_cta_secondary`) in `content/features/index.it.md` e `content/features/index.md`.
  - Tradotti in lingua italiana i nomi dei moduli dell'applicazione vCISO sia nella pagina caratteristiche (`content/features/index.it.md`) che nella sezione panoramica della Homepage (`content/_index.it.md`), convertendo "People" -> "Persone", "Documents" -> "Documenti", "Tools" -> "Strumenti", "Assets" -> "Asset", "Cyber Posture" -> "Postura Cyber" e "Supply Chain Risk" -> "Rischio Supply Chain".
  - Preservati tutti i termini tecnici di settore (es. "vCISO", "Threat Intelligence", "GraphRAG", "MCP Server", "Roadmap") come richiesto.
  - **Allineamento Grafico dei Servizi di Piattaforma:** Modificato l'header della sezione "Servizi della Piattaforma" in `templates/features.html` allineando il titolo e la descrizione a sinistra ed aggiungendo la linea inferiore di separazione (`border-b border-light-border dark:border-dark-border pb-6`) per uniformarlo graficamente alle altre sezioni della pagina.
  - **Rimozione Badge di Stato dai Titoli delle Applicazioni:** Rimossi i badge di stato complessivi dell'applicazione (es. "Online" o "In sviluppo") posizionati accanto ai titoli delle categorie principali in `templates/features.html`, per evitare incoerenze operative globali in caso di disservizio di singoli moduli. Sono stati mantenuti attivi tutti i singoli badge di stato sui sottomoduli (es. Persone, Documenti, Incident Tracker) e sui Servizi della Piattaforma.
  - **Ottimizzazione degli Spazi verticali (Gap) tra Sezioni:** Allineato il padding inferiore della sezione Hero in `templates/features.html` da `py-24 md:py-32` a `pt-24 pb-20 md:pt-32 md:pb-20`. Inoltre, modificata la distanza tra le applicazioni all'interno del loop impostando `mb-40` solo per i blocchi intermedi (`{% if not loop.last %}mb-40{% endif %}`). In questo modo tutti gli stacchi verticali tra i capitoli della pagina (Hero, vCISO, Incident Management, Platform Services) sono ora perfettamente uniformi ad una distanza fissa di `160px` su desktop.
  - **Uniformazione delle Dimensioni delle Card:** Aggiunto il layout `flex flex-col h-full` alle card dei sottomoduli e dei Servizi della Piattaforma in `templates/features.html`, integrando la classe `flex-grow` sui paragrafi descrittivi. Inoltre, è stata configurata la proprietà `min-height: 250px` sulla classe `.feature-card` in `static/css/input.css` per garantire che anche le card isolate (come "Rischio Supply Chain", che si trova da sola in una riga) abbiano la medesima altezza minima delle altre card presenti nel grid, rendendole visivamente tutte della stessa grandezza.

- **Restyling Card "Partner Ideali" (Partners):** Modificato il contenitore esterno della sezione "Partner Ideali" (Ideal Partners) in `templates/partners.html` per avere un contorno e uno sfondo puliti e non invasivi (`bg-gray-50/50 dark:bg-dark-surface/30 border border-gray-200 dark:border-dark-border`), in linea con il design generale e la sezione "Partner Tecnici". Le mini-card interne sono state dotate di bordi ed effetti di hover neon colorati e personalizzati a seconda del settore del partner:
  - **Blu (`border-accent-blue/30` e hover neon blu)** per i partner IT/Infrastrutture (Managed Service Provider).
  - **Verde (`border-accent-green/30` e hover neon verde)** per i partner CISO o di governance in generale (Consulenti IT).
  - **Viola (`border-accent-purple/30` e hover neon viola)** per i partner di Cybersecurity (Managed Security Service Provider e Rivenditori a Valore Aggiunto).
- **Rimozione scritte tra parentesi (Partners):** Rimosse le scritte tra parentesi `(Implementing)`, `(Planned)`, `(In Implementazione)` e `(Pianificato)` dai titoli principali delle sezioni MSP/MSSP e Technical Partners in `content/partners/index.md` e `content/partners/index.it.md`.
- **Formattazione Titolo Hero (Partners):** Applicato il filtro `| safe` al titolo della pagina partners in `templates/partners.html` per permettere il rendering dell'HTML, ed evidenziata in colore blu (`text-accent-blue`) la parola `"resysto"` nel titolo hero in `content/partners/index.md` e `content/partners/index.it.md`.
- **Formattazione Titolo Hero (Blog):** Applicato il filtro `| safe` al titolo della pagina blog in `templates/blog.html` per consentire il rendering dell'HTML, ed evidenziata in colore blu (`text-accent-blue`) la parola `"Blog"` nel titolo hero in `content/blog/index.md` e `content/blog/index.it.md`.
- **Posizionamento Footer Sticky:** Aggiornato `templates/base.html` aggiungendo le classi `flex flex-col min-h-screen` al tag `<body>` e la classe `flex-grow` al tag `<main>`. Questo assicura che il footer venga sempre spinto in fondo alla pagina (sticky footer) anche in presenza di pagine corte o con pochissimo contenuto (come ad esempio la pagina Blog attualmente in costruzione).
- **Struttura e Suddivisione della Homepage:** Ottimizzato il design della Homepage in `templates/index.html` per dare più struttura alle varie sezioni e ridurne l'effetto "aperto/dispersivo":
  - **Separatori a Gradiente:** Inseriti dei divisori grafici orizzontali sfumati ad alta resa estetica (`bg-gradient-to-r from-transparent via-... to-transparent`) tra le sezioni principali della Homepage (tra Hero e Costruito per, tra Costruito per e Perché Scegliere Resysto, tra Perché Scegliere Resysto e Casi d'Uso, e tra Casi d'Uso e Funzionalità).
  - **Etichette/Kicker di Sezione:** Aggiunte le etichette descrittive a contrasto (kicker) in font monospazio e lettere maiuscole distanziate (`text-xs font-mono font-bold uppercase tracking-widest`) sopra i titoli di ciascuna sezione principale della Homepage, caricate dinamicamente dai metadati di `content/_index.md` e `content/_index.it.md` (es. `TARGET AUDIENCE` / `PUBBLICO TARGET`, `OUR VALUES` / `I NOSTRI VALORI`, `HOW WE HELP` / `COME TI AIUTIAMO` e `PLATFORM OVERVIEW` / `PANORAMICA PIATTAFORMA`).


## [23 Giugno 2026]

- **Traduzione Dinamica Titolo Hero (Homepage):** Risolto il problema del titolo hero hardcoded in inglese in `templates/index.html`. Modificato il template per utilizzare `{{ section.extra.hero_title | safe }}` e spostata la formattazione HTML del colore blu (`<span class="text-accent-blue">Cyber Resilience</span>`) direttamente all'interno della variabile `hero_title` dei file di contenuto (`content/_index.md` e `content/_index.it.md`), garantendo la corretta visualizzazione e traduzione sia in inglese che in italiano.
- **Aggiornamento Etichette di Stato (Inglese):** Modificate le etichette di stato nella lingua inglese in `config.toml` ("Active" in "Online" e "In Progress" in "Developing") per mantenere coerenza con la nomenclatura utilizzata nella pagina Features.
- **Riordino Sezioni Homepage:** Invertito l'ordine delle sezioni "Built for" (Pubblico Target) e "Why Choose resysto" (I Nostri Valori / GRC Strengths) nel template `templates/index.html` per migliorare il flusso narrativo della pagina.
- **Aggiornamento Testo "Built For":** Sostituito il riferimento a "vCISO structure" con "cybersecurity team" (e "team di cybersecurity" in italiano) per il target dei team IT delle PMI nei file `content/_index.md` e `content/_index.it.md`.
- **Ridenominazione Card Casi d'Uso:** Aggiornato il titolo della card "Multi-Client MSSP Operations" in "Multi-Legal Entity MSSP Operations" (e "Operazioni MSSP Multi-Legal Entity" in italiano) nella sezione Use Cases dei file `content/_index.md` e `content/_index.it.md`.
- **Aggiunta Card GRC Strengths:** Inserita una nuova card denominata "Incident Management Automation" ("Automazione Gestione Incidenti" in italiano) all'interno della sezione "Why Choose resysto" sulla Homepage, posizionata tra "Compliance for SMEs & Consortia" e "Zero Manual Questionnaires". Adattato il layout per mantenere la simmetria della griglia (2 righe da 3 colonne).
- **Aggiornamento Stato Platform Services:** Modificata la logica di rendering dello stato dei servizi di piattaforma sulla Homepage (`templates/index.html`) per renderla dinamica basandosi sul front matter. Aggiornato lo stato a "Online" per "Documents Manager", "GraphRAG Knowledge" e "AI Assistant", mantenendo "Developing" per "MCP Server".
- **Aggiornamento Stato Moduli (Pagina Features):** Impostato lo stato "Online" (tramite le variabili `status` e `status_label`) nella pagina Features (`content/features/index.md` e `.it.md`) per i seguenti servizi: Incident Tracker, Incident Orchestrator, Incident Notification, Lessons Learnt, Forensic Evidence (sotto Incident Management), e per Documents Manager, GraphRAG Knowledge, AI Assistant (sotto Platform Services).
- **Spostamento Modulo Marketplace:** Spostata la card "Marketplace" dall'applicazione "vCISO" ai "Platform Services", aggiornando di conseguenza sia i file della Homepage (`content/_index.md` e `.it.md`) sia quelli della pagina Features (`content/features/index.md` e `.it.md`). Modificato anche il colore dell'icona da verde a viola per mantenere la coerenza con gli altri servizi di piattaforma. Successivamente impostato lo stato a "Online" come richiesto.
- **Aggiunta Breadcrumbs Dinamiche:** Implementato un componente di breadcrumb globale all'interno di `templates/base.html` che si attiva automaticamente su tutte le pagine interne (esclusa la homepage). Il componente scompone dinamicamente il percorso attuale (`current_path`) generando i link navigabili e sfrutta le traduzioni esistenti (come "features", "roadmap", "blog", ecc.) per visualizzare il nome corretto della sezione in base alla lingua (EN o IT).
- **Aggiunta Dati e Screenshot vCISO:** Popolati i moduli dell'applicazione vCISO con nomi e dati fittizi per la generazione di screenshot dimostrativi. Le immagini catturate sono state caricate nella cartella `static/images/features`.
- **Miglioramento UI Moduli Applicazione (vCISO):**
  - Implementato il supporto per array di immagini (`images = ["..."]`) nei metadati dei moduli dell'applicazione all'interno di `vciso.md` e `vciso.it.md` (es. modulo "Cyber Posture").
  - Aggiornato `templates/application.html` per convertire la singola immagine statica in un carosello di immagini interattivo.
  - Aggiunti controlli di navigazione a scomparsa (frecce laterali e indicatori di posizione) per scorrere fluidamente le immagini del carosello.
  - Implementata la navigazione all'interno del Lightbox (zooming a tutto schermo) con supporto a frecce in overlay e scorciatoie da tastiera (Freccia Destra/Sinistra ed Esc per chiudere).
  - Popolato il modulo "Cyber Posture" con screenshot reali dell'applicazione simulando l'importazione di dati fittizi per i framework ISO 27001, NIST CSF 2.0 e CIS Controls v8.1.


## [24 Giugno 2026]

- **Mockup Dati Modulo Incident Management:** Generato un set completo di dati fittizi e realistici per popolare le interfacce dell'applicazione Incident Management, al fine di catturare screenshot professionali da inserire nella pagina `/features/incident-management`.
  - **Tracker Incidenti:** Strutturati molteplici scenari di incidenti (Ransomware, Spear-Phishing, VPN Brute Force, DDoS) con relative gravità (Low, Medium, High, Critical) e stati operativi.
  - **Playbooks:** Creati playbook di risposta standard mappati coerentemente con le tipologie di incidenti presenti nel Tracker.
  - **Notifications:** Configurate simulazioni di notifiche normative basate su framework (es. pre-allarme NIS2 per Ransomware, Data Breach GDPR 72h per Phishing, esenzione notifica per incidenti mitigati) indicando le corrette autorità competenti (ACN CSIRT Italia, Garante Privacy, Forze dell'Ordine).
  - **Lessons Learned (Post-Incident Review):** Strutturati i report per le analisi post-evento per incidenti di varia entità, completi di executive summary, valutazioni di impatto, sezioni "What went well" (automazione e mitigazione) e indicazioni "What went wrong" sotto forma di task aperti per il miglioramento continuo.
- **Riorganizzazione Directory Immagini:** Create due sottocartelle dedicate (`static/images/features/vciso/` e `static/images/features/incident-management/`) per mantenere separati e ordinati gli screenshot dei vari moduli. Spostati i file esistenti e aggiornati tutti i percorsi ai media all'interno dei file markdown di contenuto (`vciso.md`, `vciso.it.md`, `incident-management.md`, `incident-management.it.md`).
- **Miglioramento Estetico Carosello (UI/UX):** Ottimizzato il template del carosello immagini in `templates/application.html` per gestire in modo elegante screenshot con aspect ratio o altezze differenti.
  - Aggiunta la classe `items-center` per centrare verticalmente le immagini più basse, evitando di lasciarle allineate in alto.
  - Impostata la proprietà `object-contain` per garantire la conservazione delle proporzioni senza alcun ritaglio (crop).
  - Sostituito il blocco di colore solido di sfondo con un sofisticato effetto glassmorphism (`bg-gray-100/50 dark:bg-dark-surface/50 backdrop-blur-sm`), trasformando lo spazio negativo in eccesso in una gradevole cornice sfocata semitrasparente.
- **Pulizia Immagini Modulo Cyber Posture:** Rimossa l'immagine `vciso-cyber-posture-3.png` (troppo grande) dalla cartella dei file statici ed eliminato il relativo riferimento dagli array di immagini nei file di contenuto `content/features/vciso.md` e `content/features/vciso.it.md`.
- **Aggiornamento Stato Moduli:** Modificato lo stato operativo (`status = "progress"`) dei moduli "Compliance" (in `vciso.md` e `vciso.it.md`) ed "Evidenze Forensi" (in `incident-management.md` e `incident-management.it.md`). I rispettivi badge nell'interfaccia utente ora riflettono correttamente la fase di lavorazione mostrando "Developing" / "In Sviluppo" al posto di "Online".
- **Avanzamento Fasi Roadmap:** Aggiornato lo stato delle fasi di sviluppo nella pagina della Roadmap (`content/roadmap/index.md` e `content/roadmap/index.it.md`).
  - La **Fase 2** (Integrazione MSSP e Gestione Incidenti) è passata da "In Progress" a "Completed" (Completato).
  - La **Fase 3** (Integrazioni strumenti e reporting avanzato) è passata da "Planned" a "In Progress" (In Corso).
- **Estensione Traduzioni in Italiano:**
  - Estesa la logica delle **Breadcrumb** (`templates/base.html`) per tradurre correttamente in italiano i percorsi `/platform-services` ("Servizi Piattaforma") e `/incident-management` ("Gestione Incidenti").
  - Tradotti i titoli dei singoli moduli nella pagina dei Servizi di Piattaforma in italiano (`content/features/platform-services.it.md`), convertendo "Documents Manager" in "Gestore Documenti", "GraphRAG Knowledge" in "Conoscenza GraphRAG", "AI Assistant" in "Assistente AI", e "MCP Server" in "Server MCP".
- **Miglioramenti UI e Copy Homepage:**
  - **Kicker Uniformati:** Ingrandite e unificate (colore verde acqua, `text-accent-green`, `text-base`) le etichette "kicker" sopra i titoli per la Hero e per i Valori GRC.
  - **Pulizia Sezioni:** Rimossi i kicker ridondanti ("Pubblico target", "Come ti aiutiamo" e "Panoramica piattaforma") per un design più pulito.
  - **Titoli con Colori Brand:** Modificato il titolo "Costruito per" in "resysto è per". Applicati i colori ufficiali del brand (`accent-blue`, `accent-green`, `accent-purple`) alle singole sillabe del nome "resysto" nei titoli tramite span HTML nei file Markdown (abilitato filtro `| safe` in `templates/index.html`).
  - **Copy in Terza Persona:** Aggiornato il sottotitolo della sezione Valori ("Semplifica la sicurezza cyber...") passando dalla prima persona plurale alla terza persona singolare, rendendo il soggetto della frase direttamente la piattaforma.

- **Aggiornamenti Pagina Funzionalità (Features):** Rimozione della dicitura "Cosa puoi fare" e applicazione della formattazione brand "resysto" con i tre colori ufficiali.
- **Aggiornamenti Pagina Roadmap:** 
  - Rimozione dei simboli "+" superflui dopo la Fase 4. 
  - Inversione di posizione tra la sezione Disclaimer e la Call to Action finale. 
  - Aggiornamento copy della CTA in terza persona e rimozione prima persona plurale. 
  - Formattazione a colori di "Roadmap" e "resysto" nei titoli, con aggiunta di a capo all'interno delle card della timeline per separare la stringa "Fase" dal testo descrittivo.
- **Aggiornamenti Pagine Partner e Blog:** 
  - Rimozione dei kicker "Ecosistema" e "Approfondimenti". 
  - Formattazione a colori di "resysto" e della parola "Partner" nel titolo ("Diventa Partner di resysto"). 
  - Riscrittura dei testi introduttivi e della Call to Action della pagina Partner in terza persona.
- **Aggiornamenti Pagina Chi Siamo (About):**
  - Rimozione del kicker "La nostra storia" (con rendering dei kicker resi condizionali nei vari template).
  - Applicazione della formattazione "resysto" nei titoli principali e ripristino del colore bianco nel testo descrittivo base per un miglior contrasto.
  - Sostituzione della traduzione letterale della missione con un copy più naturale e professionale e rimozione dei verbi al condizionale in favore dell'indicativo.
  - Modifica della larghezza del contenitore della Call to Action finale per mantenerla in una riga singola su schermi desktop.
  - Rimozione della griglia a colonne nella sezione "Il Nostro Approccio" per consentire ai punti elenco di disporsi sull'intera larghezza orizzontale.
- **Aggiornamenti Pagina Accesso (Access):**
  - Rimozione del kicker "UNISCITI AL FUTURO DELLA CYBERSECURITY".
  - Traduzione in italiano dei contenuti e delle feature all'interno delle card ("Console Principale resysto", "Console MSSP") e della sezione "Sicurezza e Supporto".
  - Riduzione del padding verticale tra il bottone Hero e la sezione delle console card per ridurre lo spazio vuoto e avvicinare i blocchi.
  - Restyling Card Console: Sostituito il pesante glassmorphism iniziale con lo stile minimale delle card "Why resysto" della Homepage, utilizzando sfondi con leggeri gradienti oscurati (`bg-gradient-to-br via-dark-surface/90`) e bordi colorati traslucidi (`border-[color]/40`) con focus opaco all'hover.
