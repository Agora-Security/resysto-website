# Content Conversion Contract

**Date**: 2025-09-29  
**Feature**: Translate HTML+CSS Templates to Zola Templates

## Content Conversion Contract

### Input
- Source HTML template files from `improved_templates/` directory
- Existing content files in `content/` directory (for reference)

### Output
- Markdown files in `content/` directory
- Embedded HTML for complex elements where needed
- Validation report

### Requirements

#### Content Structure
- MUST be in markdown format with `.md` extension
- MUST include valid TOML front matter
- MUST be placed in appropriate `content/` subdirectories
- MUST follow Zola's content structure requirements
- MUST be the single source of truth (Content-First constitutional requirement)

#### Front Matter Requirements
- MUST use valid TOML syntax
- MUST include `title` field
- MUST include `template` field referencing appropriate template
- MUST include `date` field for blog posts
- MAY include custom fields in `extra` section

#### Markdown Content
- MUST use standard markdown syntax
- MUST be well-structured and readable
- MUST include proper headings hierarchy
- MUST use semantic formatting
- MUST be accessible (WCAG 2.1 AA compliance)

#### HTML Embedding
- MUST be used only for complex elements that can't be expressed in markdown
- MUST be well-formed and valid HTML
- MUST be properly indented within markdown
- MUST not break markdown parsing
- MUST be accessible and semantic

#### Content Organization
- MUST follow logical directory structure
- MUST use consistent naming conventions
- MUST include `_index.md` files for sections
- MUST use lowercase filenames with hyphens
- MUST avoid special characters in filenames

### Validation Criteria

#### Syntax Validation
- Markdown MUST parse without errors
- Front matter MUST be valid TOML
- Embedded HTML MUST be well-formed
- All links and images MUST reference valid paths

#### Functional Validation
- Content MUST display correctly in templates
- All markdown formatting MUST render properly
- Embedded HTML MUST display correctly
- Navigation MUST work properly

#### Structural Validation
- Content hierarchy MUST be logical
- Headings MUST follow proper nesting
- Links MUST point to valid destinations
- Images MUST have proper alt text

### Error Handling

#### Content Errors
- MUST provide clear error messages for invalid syntax
- MUST gracefully handle missing front matter
- MUST not break site generation

#### Fallback Behavior
- MUST provide fallback content for missing data
- MUST maintain basic functionality when errors occur
- MUST display raw markdown if parsing fails

### Examples

#### Basic Content Structure
```markdown
+++
title = "Page Title"
template = "section.html"
date = 2025-09-29

[extra]
featured_image = "/images/page-image.jpg"
+++

# Main Heading

This is the page content in markdown format.

## Subheading

More content here...

- List item 1
- List item 2
- List item 3
```

#### Embedded HTML Example
```markdown
+++
title = "Complex Page"
template = "section.html"
+++

# Page with Complex Elements

This is standard markdown content.

<div class="complex-component">
    <div class="grid">
        <div class="grid-item">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
        </div>
        <div class="grid-item">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
        </div>
    </div>
</div>

Back to regular markdown content.
```

#### Blog Post Example
```markdown
+++
title = "Blog Post Title"
template = "blog-page.html"
date = 2025-09-29

[extra]
author = "Author Name"
featured_image = "/images/blog-post.jpg"
categories = ["technology", "security"]
+++

# Blog Post Title

This is the content of the blog post.

## Subsection

More content here...
```

### Test Cases

#### Test Case 1: Basic Markdown Parsing
- **Given**: A valid markdown file with proper front matter
- **When**: Content is rendered by Zola
- **Then**: Output MUST be valid HTML with proper formatting

#### Test Case 2: HTML Embedding
- **Given**: A markdown file with embedded HTML
- **When**: Content is rendered by Zola
- **Then**: Embedded HTML MUST be preserved and rendered correctly

#### Test Case 3: Front Matter Validation
- **Given**: A markdown file with TOML front matter
- **When**: Content is processed by Zola
- **Then**: Front matter MUST be parsed and available to templates

#### Test Case 4: Content Hierarchy
- **Given**: A markdown file with proper heading structure
- **When**: Content is rendered by Zola
- **Then**: Heading hierarchy MUST be preserved and accessible

### Dependencies

#### External Dependencies
- Zola static site generator
- Markdown parser
- TOML parser

#### Internal Dependencies
- Templates in `templates/` directory
- CSS file at `static/css/main.css`
- Zola configuration at `config.toml`

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-09-29 | Initial contract definition |
