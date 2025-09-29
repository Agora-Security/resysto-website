# Research: Translate HTML+CSS Templates to Zola Templates

**Date**: 2025-09-29  
**Feature**: Translate HTML+CSS Templates to Zola Templates

## Research Findings

### Zola Template System
**Decision**: Use Zola's built-in templating system based on Tera
**Rationale**: Zola natively uses Tera templating engine which is similar to Jinja2, making it straightforward to convert HTML templates to Zola format by replacing dynamic content with Tera syntax.
**Alternatives considered**: 
- Custom template engine (rejected due to complexity)
- External templating system (rejected due to integration overhead)

### CSS Integration Strategy
**Decision**: Merge new CSS styles into static/css/main.css with new styles overriding existing ones
**Rationale**: Based on clarification that new styles should completely override existing styles with same selectors. This approach maintains a single CSS file for better performance and maintainability.
**Alternatives considered**:
- Separate CSS files (rejected due to performance impact)
- CSS preprocessing with variables (rejected due to complexity)

### Content Conversion Approach
**Decision**: Convert HTML content to markdown with embedded HTML for complex elements
**Rationale**: Based on clarification that content not easily translated to markdown should be converted to HTML within markdown files using HTML embedding. This approach maintains content structure while leveraging markdown's simplicity.
**Alternatives considered**:
- Pure markdown (rejected due to limitations with complex layouts)
- HTML-only files (rejected due to maintenance overhead)

### Template Backup Strategy
**Decision**: Create backups of existing templates before replacement
**Rationale**: Based on clarification to create a backup of existing templates before replacing them. This provides a safety net for rollback if issues arise.
**Alternatives considered**:
- Version control only (rejected due to convenience of direct backup)
- No backup (rejected due to risk of data loss)

### Translation Priority
**Decision**: Start with landing page, then others in order of importance
**Rationale**: Based on clarification to prioritize translation starting with the landing page, then proceeding with other pages in order of importance. This approach ensures the most visible pages are updated first.
**Alternatives considered**:
- All pages simultaneously (rejected due to complexity and risk)
- Random order (rejected due to lack of strategy)

### Template File Mapping
**Decision**: Map improved_templates to Zola templates as follows:
- resysto-landing.html → templates/home.html (primary landing page)
- resysto-features.html → templates/section.html (features section)
- resysto-blog.html → templates/blog_list.html (blog listing)
- resysto-partners.html → templates/section.html (partners section)
- resysto-roadmap.html → templates/section.html (roadmap section)
**Rationale**: This mapping aligns with the existing Zola template structure while incorporating the new designs.
**Alternatives considered**:
- Create new template files (rejected due to potential duplication)
- Replace all existing templates (rejected due to potential loss of functionality)

### CSS File Structure
**Decision**: Maintain single CSS file in static/css/main.css
**Rationale**: Zola expects CSS files in the static directory, and maintaining a single file aligns with performance best practices.
**Alternatives considered**:
- Multiple CSS files (rejected due to performance impact)
- CSS in assets directory (rejected due to Zola conventions)

### Content File Structure
**Decision**: Extract content from HTML templates to appropriate markdown files in content directory
**Rationale**: Zola uses markdown files in the content directory as the source of truth for website content.
**Alternatives considered**:
- HTML content files (rejected due to Zola conventions)
- Content in templates (rejected due to separation of concerns)

## Technical Considerations

### Zola Template Syntax
- Replace dynamic content with `{{ variable }}` syntax
- Use `{% if %}` blocks for conditional content
- Implement `{% for %}` loops for repetitive content
- Use `{{ __tera_context }}` for global context access

### CSS Integration
- Merge CSS rules with same selectors, new styles taking precedence
- Maintain CSS organization and comments
- Optimize CSS for performance (minification in build process)

### Content Conversion
- Preserve semantic HTML structure
- Convert simple formatting to markdown
- Embed complex HTML structures in markdown files
- Maintain front matter for metadata

### Backup Strategy
- Create timestamped backup directory
- Include all existing templates in backup
- Document backup location and restoration process

## Conclusion
All research areas have been addressed with clear decisions based on the feature specification and clarifications. The approach aligns with Zola best practices and the project's constitutional requirements. No NEEDS CLARIFICATION remain.
