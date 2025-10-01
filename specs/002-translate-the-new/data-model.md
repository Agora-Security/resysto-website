# Data Model: Translate HTML+CSS Templates to Zola Templates

**Date**: 2025-09-29  
**Feature**: Translate HTML+CSS Templates to Zola Templates

## Entities

### Template
**Description**: Represents a Zola template file that defines the structure and layout of a web page.

**Fields**:
- `name` (string): Template filename (e.g., "home.html", "section.html")
- `path` (string): Full path to template file in templates/ directory
- `source_template` (string): Name of the source HTML template from improved_templates/
- `content_type` (string): Type of content the template renders (e.g., "landing", "section", "blog")
- `status` (enum): "original", "backup", "translated", "validated"
- `backup_path` (string, optional): Path to backup of original template

**Validation Rules**:
- Name must be a valid filename with .html extension
- Path must be within templates/ directory
- Source template must exist in improved_templates/ directory

### CSS File
**Description**: Represents a CSS file containing styles for the website.

**Fields**:
- `name` (string): CSS filename (e.g., "main.css")
- `path` (string): Full path to CSS file in static/css/ directory
- `source_css` (string): Name of the source CSS file from improved_templates/
- `status` (enum): "original", "merged", "optimized", "validated"
- `rules_count` (integer): Number of CSS rules in the file
- `file_size` (integer): Size of CSS file in bytes

**Validation Rules**:
- Name must be a valid filename with .css extension
- Path must be within static/css/ directory
- File size must be under 50KB (constitutional requirement)

### Content File
**Description**: Represents a markdown file containing website content.

**Fields**:
- `name` (string): Markdown filename (e.g., "_index.md", "security-roi-for-ceos.md")
- `path` (string): Full path to markdown file in content/ directory
- `source_template` (string): Name of the source HTML template from improved_templates/
- `content_type` (string): Type of content (e.g., "page", "blog", "section")
- `front_matter` (object): Metadata at the top of the markdown file
- `html_content` (string, optional): Embedded HTML content for complex elements
- `status` (enum): "original", "extracted", "converted", "validated"

**Validation Rules**:
- Name must be a valid filename with .md extension
- Path must be within content/ directory
- Front matter must be valid TOML (Zola requirement)

### Translation Task
**Description**: Represents a task in the template translation process.

**Fields**:
- `id` (string): Unique identifier for the task
- `type` (enum): "template", "css", "content"
- `source_file` (string): Path to source file in improved_templates/
- `target_file` (string): Path to target file in Zola structure
- `priority` (integer): Priority level (1=highest, 5=lowest)
- `status` (enum): "pending", "in_progress", "completed", "validated"
- `dependencies` (array): List of task IDs this task depends on
- `backup_created` (boolean): Whether backup was created for this task

**Validation Rules**:
- ID must be unique across all tasks
- Priority must be between 1 and 5
- Source file must exist in improved_templates/ directory
- Target file path must be valid for its type

## Relationships

### Template to Content Files
- **Relationship**: One-to-Many
- **Description**: A template can be used by multiple content files
- **Implementation**: Content files reference templates via front matter `template` field

### CSS File to Templates
- **Relationship**: One-to-Many
- **Description**: A CSS file provides styles for multiple templates
- **Implementation**: Templates reference CSS via link tags in HTML head

### Translation Task Dependencies
- **Relationship**: Many-to-Many (through dependencies)
- **Description**: Tasks can have dependencies on other tasks
- **Implementation**: Task dependencies array contains IDs of prerequisite tasks

## State Transitions

### Template Status
```
original → backup → translated → validated
```

### CSS File Status
```
original → merged → optimized → validated
```

### Content File Status
```
original → extracted → converted → validated
```

### Translation Task Status
```
pending → in_progress → completed → validated
```

## Data Flow

1. **Template Translation Flow**:
   - Read HTML template from improved_templates/
   - Create backup of existing Zola template
   - Convert HTML to Zola template syntax
   - Write new template to templates/ directory
   - Validate template syntax and functionality

2. **CSS Integration Flow**:
   - Read CSS from improved_templates/
   - Merge with existing static/css/main.css (new styles override)
   - Optimize CSS for performance
   - Write merged CSS to static/css/main.css
   - Validate CSS syntax and functionality

3. **Content Extraction Flow**:
   - Read HTML template from improved_templates/
   - Extract content and convert to markdown
   - Embed complex HTML structures where needed
   - Write markdown to appropriate content/ directory
   - Validate markdown syntax and front matter

## Constraints

### Constitutional Constraints
- All templates must work without JavaScript (Static-First)
- CSS file size must be under 50KB (Performance Excellence)
- All content must be in markdown format (Content-First)
- Templates must be flexible for different content types (Content-First)

### Technical Constraints
- Templates must use Zola's Tera templating syntax
- CSS must be in static/css/ directory
- Content must be in content/ directory with .md extension
- Front matter must be valid TOML format

### Process Constraints
- Backups must be created before replacing existing templates
- Translation must start with landing page, then proceed by priority
- Original improved_templates directory must be preserved as backup reference
