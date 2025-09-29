# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
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
- [ ] T001 Create content structure per implementation plan
- [ ] T002 Initialize Zola configuration and templates
- [ ] T003 [P] Configure Tailwind CSS and build process

## Phase 3.2: Content First ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: Content MUST be created and structured BEFORE any templates**
- [ ] T004 [P] Create content pages in content/ directory
- [ ] T005 [P] Define content structure and navigation
- [ ] T006 [P] Create markdown content with proper front matter
- [ ] T007 [P] Set up taxonomies and content relationships

## Phase 3.3: Template Implementation (ONLY after content exists)
- [ ] T008 [P] Base template in templates/base.html
- [ ] T009 [P] Page templates in templates/ directory
- [ ] T010 [P] Section templates for content types
- [ ] T011 Navigation component implementation
- [ ] T012 Responsive design implementation
- [ ] T013 Template inheritance and partials

## Phase 3.4: Assets and Styling
- [ ] T014 [P] Configure Tailwind CSS for project
- [ ] T015 [P] Create custom CSS components
- [ ] T016 Optimize images and static assets
- [ ] T017 Configure asset pipeline and compression

## Phase 3.5: Polish and Optimization
- [ ] T018 [P] Performance optimization (Lighthouse score >90)
- [ ] T019 [P] Accessibility validation and fixes
- [ ] T020 SEO optimization (meta tags, structured data)
- [ ] T021 Cross-browser testing and fixes
- [ ] T022 Build process validation and documentation

## Dependencies
- Content (T004-T007) before templates (T008-T013)
- T008 blocks T009, T011
- T014 blocks T016, T017
- Implementation before polish (T018-T022)

## Parallel Example
```
# Launch T004-T007 together:
Task: "Create content pages in content/ directory"
Task: "Define content structure and navigation"
Task: "Create markdown content with proper front matter"
Task: "Set up taxonomies and content relationships"
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

- [ ] All content types have creation tasks
- [ ] All templates have corresponding content
- [ ] Content tasks come before template tasks
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task
- [ ] All tasks follow static-first principle