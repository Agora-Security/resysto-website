
# Implementation Plan: Website Page Layout Improvement

**Branch**: `001-let-s-improve` | **Date**: 2025-09-26 | **Spec**: /home/mbrunati/work/agosec_tools/resysto-website/specs/001-let-s-improve/spec.md
**Input**: Feature specification from `/specs/001-let-s-improve/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Improve website page layouts to create sleek, captivating templates that highlight key concepts at the top and provide detailed information below. The layout must target both technical (CISO) and business (CIO/CEO) audiences with a minimalist design featuring high contrast, clean typography, and subtle animations while maintaining WCAG 2.1 AA compliance and static-first principles.

## Technical Context
**Language/Version**: HTML5, CSS3 (Tailwind CSS)  
**Primary Dependencies**: Zola (static site generator), Tailwind CSS  
**Storage**: Static files (Markdown content)  
**Validation**: Accessibility validation, performance monitoring  
**Target Platform**: Web (static hosting)
**Project Type**: web (static site)
**Performance Goals**: Page load under 2 seconds, total page weight under 500KB  
**Constraints**: Static-first (no JavaScript required), WCAG 2.1 AA compliance, mobile-first responsive design  
**Scale/Scope**: 6-8 pages with varying content lengths

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Static-First Compliance
- [x] Feature works without JavaScript
- [x] No critical functionality depends on client-side JS
- [x] Progressive enhancement only (if JS used)

### Performance Excellence
- [x] Page load under 2 seconds on mobile
- [x] Total page weight under 500KB
- [x] CSS under 50KB, JS under 10KB (if used)
- [x] All assets optimized and compressed

### Universal Accessibility
- [x] WCAG 2.1 AA compliance
- [x] Semantic HTML5 structure
- [x] Keyboard navigation supported
- [x] Color contrast meets standards
- [x] Proper alt text for all images

### Security by Default
- [x] No client-side secrets or API keys
- [x] CSRF protection for forms
- [x] Content Security Policy enforced
- [x] HTTPS for all resources
- [x] Input validation and sanitization

### Content-First Architecture
- [x] Content drives structure, not vice versa
- [x] Templates flexible for content types
- [x] Navigation reflects content hierarchy
- [x] Content is single source of truth

### Build Process Integrity
- [x] Reproducible and deterministic builds
- [x] Dependencies pinned to exact versions
- [x] Build artifacts identical across environments
- [x] Dev build matches production behavior

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
content/          # Markdown content (source of truth)
├── about/
├── access/
├── blog/
├── features/
├── partners/
├── roadmap/
└── _index.md

templates/        # Zola templates (HTML structure)
├── base.html
├── home.html
├── section.html
├── blog_list.html
├── blog-page.html
├── taxonomy_list.html
└── taxonomy_term.html

static/           # Static assets (images, fonts, built CSS)
├── css/
│   └── main.css
├── images/
│   └── og-default.svg
├── CNAME
└── robots.txt

assets/           # Source assets (Tailwind, source images)
└── css/
    └── main.css

config.toml       # Zola configuration (single source of config)
```

**Structure Decision**: Static site structure using Zola with content-driven architecture. Templates in templates/ define the layout structure, content/ contains Markdown files as the single source of truth, and static/ contains optimized assets.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
    - For each user action → endpoint
    - Use standard REST/GraphQL patterns
    - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Extract validation scenarios** from user stories:
    - Each story → implementation validation scenario
    - Quickstart validation = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh opencode`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → API specification task [P]
- Each entity → content structure task [P] 
- Each user story → implementation task
- Implementation tasks to meet acceptance criteria

**Ordering Strategy**:
- Feature dependency order: Content before templates before styling
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Task Categories**:
1. **Setup & Configuration** (3-4 tasks): Environment setup, tooling configuration
2. **Template Development** (8-10 tasks): Base template, content templates, responsive design
3. **Content Structure** (4-5 tasks): Content organization, audience targeting, navigation
4. **Styling & Design** (5-6 tasks): CSS implementation, design system, animations
5. **Validation & Quality** (3-4 tasks): Accessibility checks, performance optimization, responsive validation
6. **Documentation & Deployment** (2-3 tasks): Documentation, deployment setup

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (execute quickstart.md, performance validation, accessibility checks)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
