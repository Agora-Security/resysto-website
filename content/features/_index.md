+++
title = "Features"
description = "Applications, modules, and platform services of resysto."

[extra]
hero_kicker = "What you can do"
hero_title = "Explore resysto Features"
hero_subtitle = "Applications and services designed for resilient, auditable security operations."
primary_text = "See capabilities"
primary_url = "/features/#applications"
secondary_text = "Access platform"
secondary_url = "/access/"

# Audience targeting
audience = ["ciso", "cio", "ceo"]
content_priority = "high"

# Layout configuration
layout_type = "feature_grid"
content_density = "modular"
show_key_concepts = true
key_concepts_heading = "Platform Capabilities"

# Content length thresholds
short_content_threshold = 500
medium_content_threshold = 1500
long_content_threshold = 3000

# Performance and accessibility
performance_budget = 500
accessibility_compliance = "wcag_2_1_aa"

# Content sections for dual audiences
technical_focus = ["applications", "modules", "integrations", "api"]
business_focus = ["benefits", "roi", "scalability", "time_to_value"]
+++

resysto organizes capabilities into applications and platform services. Layout and visual badges are inspired by SurrealDB features page [reference](https://surrealdb.com/features).

<style>
.feature-section { margin: 2rem 0; }
.section-intro { margin: .5rem 0 1.25rem; color: var(--text-muted, #778); }
.app-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 1rem; }
.module { margin: 2rem 0 1rem; }
.module-title { display: flex; align-items: center; gap: .5rem; margin: 1.25rem 0 .5rem; font-weight: 700; font-size: 1.1rem; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: .75rem; }
.feature-card { position: relative; border: 1px solid rgba(120,130,150,.2); border-radius: .75rem; padding: .9rem .95rem; background: var(--card-bg, rgba(255,255,255,.02)); }
.feature-card h5 { margin: 0 0 .35rem; font-size: .98rem; display: inline-flex; align-items: center; gap: .5rem; }
.feature-card p { margin: 0; color: var(--text-muted, #889); font-size: .95rem; }
.status-badge { font-size: .70rem; text-transform: uppercase; letter-spacing: .04em; padding: .18rem .45rem; border-radius: .5rem; font-weight: 700; border: 1px solid transparent; }
.status-complete { background:#082; color:#bffec7; border-color: #0a4; }
.status-beta { background:#3b2e00; color:#ffd666; border-color:#6a5200; }
.status-in-dev { background:#2b0b2f; color:#f3a6ff; border-color:#5a1e61; }
.status-experimental { background:#301a00; color:#ffcc9a; border-color:#6f3b00; }
.status-planned { background:#0b2a3a; color:#a7e1ff; border-color:#1d4b66; }
.kicker { text-transform: uppercase; font-size: .78rem; letter-spacing: .06em; color: var(--text-muted, #778); margin-bottom: .25rem; }
.app-title { display:flex; align-items:center; justify-content:space-between; gap:.5rem; margin:.25rem 0 .25rem; }
.app-title h3 { margin:0; }
.pill { font-size:.72rem; padding:.23rem .5rem; border-radius:.75rem; border:1px solid rgba(120,130,150,.25); color:#9ab; }
@media (min-width: 920px){ .two-col { display:grid; grid-template-columns: 1.15fr .85fr; gap: 2rem; align-items:start; } }
</style>

## Applications {#applications}

### vCISO

<div class="two-col">
  <div>
    <div class="kicker">Application</div>
    <div class="app-title">
      <h3>vCISO</h3>
      <span class="pill">Implemented</span>
    </div>
    <p class="section-intro">A complete virtual Chief Information Security Officer platform comprising operational modules that centralize governance, risk, and program execution.</p>
  </div>
  <div class="feature-card">
    <h5>Overview <span class="status-badge status-complete">Complete</span></h5>
    <p>Seven integrated modules with unified navigation, audit-ready records, and cross-module analytics.</p>
  </div>
</div>

#### 👥 People

<div class="feature-grid">
  <div class="feature-card">
    <h5>Team structure <span class="status-badge status-complete">Complete</span></h5>
    <p>Manage org charts, roles, and responsibilities.</p>
  </div>
  <div class="feature-card">
    <h5>Training & compliance <span class="status-badge status-complete">Complete</span></h5>
    <p>Track training plans, completions, and evidence.</p>
  </div>
  <div class="feature-card">
    <h5>RACI matrices <span class="status-badge status-complete">Complete</span></h5>
    <p>Define accountability across processes and projects.</p>
  </div>
</div>

#### 📄 Documents

<div class="feature-grid">
  <div class="feature-card">
    <h5>Central repository <span class="status-badge status-complete">Complete</span></h5>
    <p>Policies, standards, procedures, and runbooks with search.</p>
  </div>
  <div class="feature-card">
    <h5>Versioning & approvals <span class="status-badge status-complete">Complete</span></h5>
    <p>Draft, review, approve, and publish with audit trails.</p>
  </div>
  <div class="feature-card">
    <h5>Compliance templates <span class="status-badge status-complete">Complete</span></h5>
    <p>Prebuilt templates mapped to common frameworks.</p>
  </div>
</div>

#### 🔧 Tools

<div class="feature-grid">
  <div class="feature-card">
    <h5>Inventory & ownership <span class="status-badge status-complete">Complete</span></h5>
    <p>Catalog security tools with owners, scope, and coverage.</p>
  </div>
  <div class="feature-card">
    <h5>Integration health <span class="status-badge status-beta">Beta</span></h5>
    <p>Monitor ingestion status and connector health.</p>
  </div>
  <div class="feature-card">
    <h5>Effectiveness scoring <span class="status-badge status-in-dev">In development</span></h5>
    <p>Evaluate tool outcomes against risks and controls.</p>
  </div>
</div>

#### 🏢 Assets

<div class="feature-grid">
  <div class="feature-card">
    <h5>Asset inventory <span class="status-badge status-complete">Complete</span></h5>
    <p>Track IT, cloud, and data assets with classification.</p>
  </div>
  <div class="feature-card">
    <h5>Risk prioritization <span class="status-badge status-complete">Complete</span></h5>
    <p>Score inherent and residual risk with business impact.</p>
  </div>
  <div class="feature-card">
    <h5>Lifecycle tracking <span class="status-badge status-beta">Beta</span></h5>
    <p>Plan onboarding, changes, and decommissioning.</p>
  </div>
</div>

#### 🛡️ Cyber Posture

<div class="feature-grid">
  <div class="feature-card">
    <h5>Posture scoring <span class="status-badge status-complete">Complete</span></h5>
    <p>Quantified scores with history and trends.</p>
  </div>
  <div class="feature-card">
    <h5>Gap analysis <span class="status-badge status-complete">Complete</span></h5>
    <p>Identify and track control gaps by framework.</p>
  </div>
  <div class="feature-card">
    <h5>Compliance overview <span class="status-badge status-beta">Beta</span></h5>
    <p>Live compliance status across programs and teams.</p>
  </div>
</div>

#### 🗺️ Roadmap

<div class="feature-grid">
  <div class="feature-card">
    <h5>Initiative planning <span class="status-badge status-complete">Complete</span></h5>
    <p>Prioritize initiatives with dependencies and impact.</p>
  </div>
  <div class="feature-card">
    <h5>Resource allocation <span class="status-badge status-beta">Beta</span></h5>
    <p>Assign teams, budgets, and timelines.</p>
  </div>
  <div class="feature-card">
    <h5>Milestones & progress <span class="status-badge status-complete">Complete</span></h5>
    <p>Track status with audit-ready evidence and notes.</p>
  </div>
</div>

#### 🔗 Supply Chain Risk (SCRM)

<div class="feature-grid">
  <div class="feature-card">
    <h5>Vendor risk assessment <span class="status-badge status-complete">Complete</span></h5>
    <p>Tier vendors, assess controls, and request evidence.</p>
  </div>
  <div class="feature-card">
    <h5>Supply chain monitoring <span class="status-badge status-beta">Beta</span></h5>
    <p>Track incidents and third-party alerts.</p>
  </div>
  <div class="feature-card">
    <h5>Compliance tracking <span class="status-badge status-complete">Complete</span></h5>
    <p>Monitor certifications, renewals, and exceptions.</p>
  </div>
</div>

### Incident Management

<div class="kicker">Application</div>
<div class="app-title">
  <h3>Incident Management</h3>
  <span class="pill">In planning</span>
</div>
<p class="section-intro">Planned for Phase 3. Focused on coordinated response, communications, and lessons learned.</p>

#### 🚨 Response

<div class="feature-grid">
  <div class="feature-card">
    <h5>Playbooks <span class="status-badge status-planned">Planned</span></h5>
    <p>Codified workflows for common incident types.</p>
  </div>
  <div class="feature-card">
    <h5>Task orchestration <span class="status-badge status-in-dev">In development</span></h5>
    <p>Coordinated tasking across teams and tools.</p>
  </div>
  <div class="feature-card">
    <h5>Evidence vault <span class="status-badge status-experimental">Experimental</span></h5>
    <p>Immutable storage for artifacts and timelines.</p>
  </div>
</div>

#### 📣 Communications

<div class="feature-grid">
  <div class="feature-card">
    <h5>Stakeholder updates <span class="status-badge status-planned">Planned</span></h5>
    <p>Templates and channels for internal and external comms.</p>
  </div>
  <div class="feature-card">
    <h5>Regulatory notices <span class="status-badge status-planned">Planned</span></h5>
    <p>Guided reporting for legal and regulatory bodies.</p>
  </div>
</div>

#### 🧭 Post‑Incident

<div class="feature-grid">
  <div class="feature-card">
    <h5>RCA & lessons <span class="status-badge status-planned">Planned</span></h5>
    <p>Root cause analyses with remediation tracking.</p>
  </div>
  <div class="feature-card">
    <h5>Metrics & SLAs <span class="status-badge status-planned">Planned</span></h5>
    <p>Time‑to‑detect, time‑to‑contain, and MTTR dashboards.</p>
  </div>
</div>

## Platform Services

<section class="platform-services">
<div class="container">
<h2 class="section-title">Platform Services</h2>
<div class="services-grid">
<div class="service-card">
<div class="service-header">
<div class="service-kicker">Platform Service</div>
<h3 class="service-title">Documents <span>Manager</span></h3>
<div class="status-pill implementing">Implementing</div>
</div>
<p class="service-description">Advanced document processing with OCR, metadata, and full‑text search.</p>
<div class="features-grid">
<div class="feature-card">
<h5>OCR & extraction <span class="status-badge in-dev">In development</span></h5>
<p>Parse PDFs and images into searchable content.</p>
</div>
<div class="feature-card">
<h5>Metadata & tags <span class="status-badge beta">Beta</span></h5>
<p>Auto‑tagging and custom metadata schemas.</p>
</div>
<div class="feature-card">
<h5>Search <span class="status-badge in-dev">In development</span></h5>
<p>Keyword and semantic search across the repository.</p>
</div>
</div>
</div>

<div class="service-card">
<div class="service-header">
<div class="service-kicker">Platform Service</div>
<h3 class="service-title">RAG <span>Knowledge</span></h3>
<div class="status-pill planned">Planned</div>
</div>
<p class="service-description">Retrieval‑augmented generation for security knowledge and contextual assistance.</p>
<div class="features-grid">
<div class="feature-card">
<h5>Context builder <span class="status-badge planned">Planned</span></h5>
<p>Assemble relevant documents, data, and events per query.</p>
</div>
<div class="feature-card">
<h5>Grounded answers <span class="status-badge planned">Planned</span></h5>
<p>Answer with citations and provenance links.</p>
</div>
</div>
</div>

<div class="service-card">
<div class="service-header">
<div class="service-kicker">Platform Service</div>
<h3 class="service-title">AI <span>Assistant</span></h3>
<div class="status-pill planned">Planned</div>
</div>
<p class="service-description">Intelligent recommendations, automated analysis, and natural‑language workflows.</p>
<div class="features-grid">
<div class="feature-card">
<h5>NLQ for security <span class="status-badge planned">Planned</span></h5>
<p>Query posture, risks, and incidents in natural language.</p>
</div>
<div class="feature-card">
<h5>Automations <span class="status-badge experimental">Experimental</span></h5>
<p>Draft policies, generate tasks, and propose remediations.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<small>Design inspiration: SurrealDB Features page — see `https://surrealdb.com/features`.</small>
