# Tasks: Translate HTML+CSS Templates to Zola Templates

**Input**: Design documents from `/specs/002-translate-the-new/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Static website**: `content/`, `templates/`, `static/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume static website - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create backup directory for existing templates and CSS
- [ ] T002 Verify Zola installation and configuration
- [ ] T003 [P] Check improved_templates directory contains all required files

## Phase 3.2: Content First ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: Content MUST be created and structured BEFORE any templates**
- [ ] T004 [P] Extract content from improved_templates/resysto-landing.html to content/_index.md
- [ ] T005 [P] Extract content from improved_templates/resysto-features.html to content/features/_index.md
- [ ] T006 [P] Extract content from improved_templates/resysto-blog.html to content/blog/_index.md
- [ ] T007 [P] Extract content from improved_templates/resysto-partners.html to content/partners/_index.md
- [ ] T008 [P] Extract content from improved_templates/resysto-roadmap.html to content/roadmap/_index.md

## Phase 3.3: Template Implementation (ONLY after content exists)
- [ ] T009 Create backup of existing templates/home.html
- [ ] T010 Convert improved_templates/resysto-landing.html to Zola template in templates/home.html
- [ ] T011 Create backup of existing templates/section.html
- [ ] T012 Convert improved_templates/resysto-features.html to Zola template in templates/section.html
- [ ] T013 Convert improved_templates/resysto-partners.html to Zola template in templates/section.html
- [ ] T014 Convert improved_templates/resysto-roadmap.html to Zola template in templates/section.html
- [ ] T015 Create backup of existing templates/blog_list.html
- [ ] T016 Convert improved_templates/resysto-blog.html to Zola template in templates/blog_list.html
- [ ] T017 Validate visual design preservation against original HTML templates

## Phase 3.4: CSS Integration
- [ ] T017 Create backup of existing static/css/main.css
- [ ] T018 [P] Merge improved_templates/resysto-landing.css into static/css/main.css
- [ ] T019 [P] Merge improved_templates/resysto-features.css into static/css/main.css
- [ ] T020 [P] Merge improved_templates/resysto-blog.css into static/css/main.css
- [ ] T021 [P] Merge improved_templates/resysto-partners.css into static/css/main.css
- [ ] T022 [P] Merge improved_templates/resysto-roadmap.css into static/css/main.css
- [ ] T023 Optimize merged CSS file for performance (under 50KB)

## Phase 3.5: Validation and Testing
- [ ] T024 [P] Validate template syntax with `zola check`
- [ ] T025 [P] Test landing page rendering with new template and CSS
- [ ] T026 [P] Test features page rendering with new template and CSS
- [ ] T027 [P] Test blog page rendering with new template and CSS
- [ ] T028 [P] Test partners page rendering with new template and CSS
- [ ] T029 [P] Test roadmap page rendering with new template and CSS
- [ ] T030 Validate Zola template compatibility with content structure
- [ ] T031 Validate CSS file size is under 50KB
- [ ] T032 Validate all pages work without JavaScript
- [ ] T033 Build production site with `zola build`
- [ ] T034 Verify all generated pages in public/ directory

## Dependencies
- Content extraction (T004-T008) before template conversion (T009-T016)
- Template backups (T009, T011, T015) before template conversion
- Template conversion (T010, T012-T014, T016) before visual design validation (T017)
- CSS backup (T018) before CSS merging (T019-T023)
- CSS merging (T019-T023) before CSS optimization (T024)
- Template and CSS implementation before validation (T025-T034)

## Parallel Example
```
# Launch T004-T008 together (content extraction):
Task: "Extract content from improved_templates/resysto-landing.html to content/_index.md"
Task: "Extract content from improved_templates/resysto-features.html to content/features/_index.md"
Task: "Extract content from improved_templates/resysto-blog.html to content/blog/_index.md"
Task: "Extract content from improved_templates/resysto-partners.html to content/partners/_index.md"
Task: "Extract content from improved_templates/resysto-roadmap.html to content/roadmap/_index.md"

# Launch T018-T022 together (CSS merging):
Task: "Merge improved_templates/resysto-landing.css into static/css/main.css"
Task: "Merge improved_templates/resysto-features.css into static/css/main.css"
Task: "Merge improved_templates/resysto-blog.css into static/css/main.css"
Task: "Merge improved_templates/resysto-partners.css into static/css/main.css"
Task: "Merge improved_templates/resysto-roadmap.css into static/css/main.css"

# Launch T025-T029 together (page testing):
Task: "Test landing page rendering with new template and CSS"
Task: "Test features page rendering with new template and CSS"
Task: "Test blog page rendering with new template and CSS"
Task: "Test partners page rendering with new template and CSS"
Task: "Test roadmap page rendering with new template and CSS"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Content Structure**:
   - Each content type → content creation task [P]
   - Each navigation item → structure task [P]
   
2. **From Templates**:
   - Each page type → template creation task [P]
   - Each component → implementation task [P]
   
3. **From User Stories**:
   - Each story → content organization task [P]
   - Each user flow → navigation task [P]
   
4. **Ordering**:
   - Setup → Content → Templates → Assets → Polish
   - Content before templates (content-first principle)
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [x] All content types have creation tasks
- [x] All templates have corresponding content
- [x] Content tasks come before template tasks
- [x] Parallel tasks truly independent
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] All tasks follow static-first principle
