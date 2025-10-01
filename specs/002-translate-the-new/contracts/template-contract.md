# Template Contract

**Date**: 2025-09-29  
**Feature**: Translate HTML+CSS Templates to Zola Templates

## Template Translation Contract

### Input
- Source HTML template file from `improved_templates/` directory
- Existing Zola template file (for backup reference)

### Output
- Zola-compatible template file in `templates/` directory
- Backup of original template file
- Validation report

### Requirements

#### Template Structure
- MUST use valid Tera templating syntax
- MUST include proper HTML5 doctype and structure
- MUST reference CSS from `static/css/main.css`
- MUST be compatible with Zola's content structure
- MUST work without JavaScript (Static-First constitutional requirement)

#### Template Variables
- MUST use `{{ variable }}` syntax for variable substitution
- MUST use `{% if %}` blocks for conditional content
- MUST use `{% for %}` loops for repetitive content
- MUST use `{{ __tera_context }}` for global context access

#### Template Naming
- MUST have `.html` extension
- MUST be placed in `templates/` directory
- MUST follow existing naming conventions:
  - `home.html` for landing page
  - `section.html` for section pages
  - `blog_list.html` for blog listing
  - `blog-page.html` for individual blog posts

#### Template Content
- MUST include proper meta tags
- MUST include responsive design elements
- MUST be accessible (WCAG 2.1 AA compliance)
- MUST include proper navigation structure

### Validation Criteria

#### Syntax Validation
- Template MUST parse without errors
- All Tera syntax MUST be valid
- All variables MUST be properly referenced
- All blocks MUST be properly closed

#### Functional Validation
- Template MUST render with sample content
- All dynamic elements MUST display correctly
- Navigation MUST work properly
- Responsive design MUST function on all screen sizes

#### Performance Validation
- Template MUST load quickly
- MUST not include unnecessary elements
- MUST be optimized for static generation

### Error Handling

#### Template Errors
- MUST provide clear error messages for invalid syntax
- MUST gracefully handle missing variables
- MUST not break site generation

#### Fallback Behavior
- MUST provide fallback content for missing data
- MUST maintain basic functionality when errors occur

### Examples

#### Basic Template Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config.title }} | {{ page.title }}</title>
    <link rel="stylesheet" href="{{ get_url(path="/css/main.css") }}">
</head>
<body>
    <header>
        <!-- Navigation structure -->
    </header>
    
    <main>
        <!-- Dynamic content -->
        {% block content %}{% endblock content %}
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

#### Conditional Content
```html
{% if page.extra.featured_image %}
<img src="{{ page.extra.featured_image }}" alt="{{ page.title }}">
{% endif %}
```

#### Loop Structure
```html
<ul class="blog-list">
    {% for post in section.pages %}
    <li class="blog-item">
        <a href="{{ post.permalink }}">{{ post.title }}</a>
        <span class="date">{{ post.date }}</span>
    </li>
    {% endfor %}
</ul>
```

### Test Cases

#### Test Case 1: Basic Template Rendering
- **Given**: A valid template with proper Tera syntax
- **When**: Template is rendered with sample data
- **Then**: Output MUST be valid HTML with all variables substituted

#### Test Case 2: Conditional Content
- **Given**: A template with conditional blocks
- **When**: Template is rendered with varying data
- **Then**: Conditional content MUST display/hide correctly based on data

#### Test Case 3: Loop Rendering
- **Given**: A template with loop structures
- **When**: Template is rendered with list data
- **Then**: Loop MUST iterate correctly and generate expected HTML

#### Test Case 4: Error Handling
- **Given**: A template with invalid syntax
- **When**: Template is parsed
- **Then**: Clear error message MUST be provided

### Dependencies

#### External Dependencies
- Zola static site generator
- Tera templating engine

#### Internal Dependencies
- CSS file at `static/css/main.css`
- Content files in `content/` directory
- Zola configuration at `config.toml`

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-09-29 | Initial contract definition |
