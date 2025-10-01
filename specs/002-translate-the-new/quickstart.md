# Quickstart: Translate HTML+CSS Templates to Zola Templates

**Date**: 2025-09-29  
**Feature**: Translate HTML+CSS Templates to Zola Templates

## Prerequisites

1. **Zola Installation**: Ensure Zola static site generator is installed
   ```bash
   # Check if Zola is installed
   zola --version
   
   # Install if not present (follow official Zola installation guide)
   ```

2. **Repository Setup**: Clone the repository and switch to the feature branch
   ```bash
   git clone [repository-url]
   cd resysto-website
   git checkout 002-translate-the-new
   ```

3. **Dependencies**: Install any required dependencies
   ```bash
   # Install Node.js dependencies if using Tailwind CSS
   npm install
   ```

## Quick Start Process

### Step 1: Create Backups
Create backups of existing templates before making changes:
```bash
# Create backup directory with timestamp
mkdir -p backups/templates-$(date +%Y%m%d-%H%M%S)

# Copy existing templates to backup
cp -r templates/* backups/templates-$(date +%Y%m%d-%H%M%S)/

# Backup existing CSS
cp static/css/main.css backups/css-$(date +%Y%m%d-%H%M%S).css
```

### Step 2: Translate Landing Page (Highest Priority)
Start with the landing page template:
```bash
# Convert resysto-landing.html to Zola format
# This involves:
# 1. Reading improved_templates/resysto-landing.html
# 2. Converting HTML to Zola's Tera templating syntax
# 3. Replacing templates/home.html with the converted template
# 4. Extracting content to content/_index.md
```

### Step 3: Integrate CSS Styles
Merge the new CSS styles:
```bash
# Read improved_templates/resysto-landing.css
# Merge with static/css/main.css (new styles override existing)
# Optimize and validate the merged CSS
```

### Step 4: Test Landing Page
Verify the landing page works correctly:
```bash
# Start Zola development server
zola serve

# Open http://127.0.0.1:1111 in browser
# Verify the landing page displays correctly with new styles
```

### Step 5: Translate Remaining Templates
Continue with other templates in order of priority:
```bash
# Features page: improved_templates/resysto-features.html → templates/section.html
# Blog page: improved_templates/resysto-blog.html → templates/blog_list.html
# Partners page: improved_templates/resysto-partners.html → templates/section.html
# Roadmap page: improved_templates/resysto-roadmap.html → templates/section.html
```

### Step 6: Integrate Remaining CSS
Merge CSS for remaining templates:
```bash
# Merge each CSS file from improved_templates/ into static/css/main.css
# New styles should override existing styles with same selectors
```

### Step 7: Extract Content
Convert HTML content to markdown:
```bash
# Extract content from each HTML template
# Convert to markdown with embedded HTML for complex elements
# Save to appropriate files in content/ directory
```

### Step 8: Validate All Pages
Test all pages with the new templates:
```bash
# Start Zola development server
zola serve

# Test each page:
# - Landing page: http://127.0.0.1:1111/
# - Features page: http://127.0.0.1:1111/features/
# - Blog page: http://127.0.0.1:1111/blog/
# - Partners page: http://127.0.0.1:1111/partners/
# - Roadmap page: http://127.0.0.1:1111/roadmap/
```

### Step 9: Build and Validate Production
Build the site for production:
```bash
# Build the site
zola build

# Check output in public/ directory
# Verify all pages are generated correctly
```

## Validation Checklist

### Template Validation
- [ ] All templates use valid Tera syntax
- [ ] Templates render without errors
- [ ] All dynamic content is properly templated
- [ ] Templates work with Zola's content structure

### CSS Validation
- [ ] Merged CSS is valid and well-formed
- [ ] CSS file size is under 50KB
- [ ] All styles are applied correctly
- [ ] No conflicts between old and new styles

### Content Validation
- [ ] All markdown files have valid front matter
- [ ] Content displays correctly in templates
- [ ] Embedded HTML is properly formatted
- [ ] Links and images work correctly

### Performance Validation
- [ ] Page load time is under 2 seconds
- [ ] Total page weight is under 500KB
- [ ] All assets are optimized
- [ ] Site works without JavaScript

## Troubleshooting

### Common Issues

**Template Syntax Errors**
```bash
# Check Zola template syntax
zola check

# Look for error messages indicating syntax issues
# Fix template syntax errors and recheck
```

**CSS Conflicts**
```bash
# If new styles don't apply, check CSS specificity
# Ensure new styles come after existing styles in main.css
# Use more specific selectors if needed
```

**Content Not Displaying**
```bash
# Check front matter in markdown files
# Ensure template field in front matter matches template name
# Verify content files are in correct directory structure
```

### Getting Help

1. **Zola Documentation**: https://www.getzola.org/documentation/
2. **Tera Templating**: https://keats.github.io/tera/docs/
3. **Project Constitution**: `.specify/memory/constitution.md`
4. **Feature Specification**: `specs/002-translate-the-new/spec.md`

## Next Steps

After completing the quickstart:

1. **Review**: Validate all pages work correctly
2. **Test**: Perform thorough testing on different devices
3. **Optimize**: Further optimize CSS and content if needed
4. **Deploy**: Deploy to production environment
5. **Monitor**: Monitor performance and user feedback

## Rollback Procedure

If issues arise and you need to rollback:

```bash
# Restore templates from backup
cp -r backups/templates-[timestamp]/* templates/

# Restore CSS from backup
cp backups/css-[timestamp].css static/css/main.css

# Revert content changes if needed
git checkout -- content/

# Restart Zola server
zola serve
```

Remember to replace `[timestamp]` with the actual backup timestamp.
