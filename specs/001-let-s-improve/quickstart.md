# Quickstart: Website Page Layout Improvement

**Feature**: Website Page Layout Improvement  
**Date**: 2025-09-26  
**Branch**: 001-let-s-improve

## Prerequisites

### System Requirements
- Node.js 16+ (for Tailwind CSS)
- Rust 1.70+ (for Zola)
- Git (for version control)
- Modern web browser (for testing)

### Development Environment Setup
```bash
# Clone the repository
git clone <repository-url>
cd resysto-website

# Install Node.js dependencies
npm install

# Verify Zola installation
zola --version
```

## Quick Start Guide

### 1. Start Development Environment
```bash
# Start Tailwind CSS development server
npm run dev

# In a separate terminal, start Zola development server
zola serve

# Open browser to http://127.0.0.1:1111
```

### 2. Create a New Page
```bash
# Create a new page directory
mkdir -p content/new-page

# Create the page index file
cat > content/new-page/_index.md << EOF
+++
title = "New Page Title"
description = "Page description for SEO"
template = "section.html"
date = 2025-09-26

[extra]
audience_target = "both"
content_length = "medium"
key_concepts = ["Concept 1", "Concept 2", "Concept 3"]
+++

# Main Content

This is the main content of the page.

## Section 1

Content for section 1.

## Section 2

Content for section 2.
EOF
```

### 3. Configure Page Layout
```bash
# Edit the page front matter to specify layout preferences
# Add to content/new-page/_index.md:

[extra]
audience_target = "both"  # "technical", "business", or "both"
content_length = "medium"  # "short", "medium", or "long"
key_concepts = ["Security", "Compliance", "Performance"]
```

### 4. Add Content Sections
```bash
# Create sections with audience targeting
cat >> content/new-page/_index.md << EOF

## Technical Deep Dive {#technical}

[extra.audience_level = "technical"]
[extra.complexity_level = "advanced"]

This section contains technical details for CISO-level understanding.

### Implementation Details

Technical implementation details go here.

## Business Value {#business}

[extra.audience_level = "business"]
[extra.complexity_level = "basic"]

This section focuses on business benefits for CIO/CEO understanding.

### ROI Analysis

Business value and ROI analysis goes here.
EOF
```

### 5. Add Media Assets
```bash
# Add optimized images to static/images/
# Reference images in content:

![Security Architecture](/images/security-arch.png "Security Architecture Diagram")

{#image-caption}
*Figure 1: Security architecture overview*
```

### 6. Test the Page
```bash
# Build the site
npm run build:css
zola build

# Test locally
zola serve

# Open browser and navigate to /new-page/
```

## Content Creation Guidelines

### For Technical Content (CISO Audience)
- Use precise technical terminology
- Include implementation details and specifications
- Provide code examples where appropriate
- Focus on security aspects and technical requirements
- Use diagrams and technical illustrations

### For Business Content (CIO/CEO Audience)
- Focus on business value and ROI
- Use clear, non-technical language
- Highlight cost savings and efficiency gains
- Emphasize competitive advantages
- Include high-level benefits and outcomes

### For Mixed Content (Both Audiences)
- Start with high-level business context
- Progressively add technical depth
- Use clear section headings for audience targeting
- Provide summaries for quick understanding
- Include both business and technical metrics

## Layout Templates

### Standard Page Template
```html
<!-- templates/section.html -->
{% extends "base.html" %}

{% block content %}
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {{ page.title }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ page.description }}
        </p>
      </div>
      
      <!-- Key Concepts -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {% for concept in page.extra.key_concepts %}
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ concept }}</h3>
          <p class="text-gray-600">Key concept description</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Content Sections -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg max-w-none">
        {{ page.content | safe }}
      </div>
    </div>
  </section>
</div>
{% endblock %}
```

### Short Content Template
```html
<!-- templates/short-content.html -->
{% extends "base.html" %}

{% block content %}
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        {{ page.title }}
      </h1>
      <div class="prose prose-lg max-w-none mx-auto">
        {{ page.content | safe }}
      </div>
    </div>
  </div>
</div>
{% endblock %}
```

### Long Content Template
```html
<!-- templates/long-content.html -->
{% extends "base.html" %}

{% block content %}
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {{ page.title }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ page.description }}
        </p>
      </div>
    </div>
  </section>

  <!-- Table of Contents -->
  <section class="bg-gray-50 sticky top-0 z-10 border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav class="flex space-x-8 overflow-x-auto">
        <a href="#overview" class="text-gray-900 hover:text-blue-600 whitespace-nowrap">Overview</a>
        <a href="#technical" class="text-gray-900 hover:text-blue-600 whitespace-nowrap">Technical</a>
        <a href="#business" class="text-gray-900 hover:text-blue-600 whitespace-nowrap">Business</a>
        <a href="#conclusion" class="text-gray-900 hover:text-blue-600 whitespace-nowrap">Conclusion</a>
      </nav>
    </div>
  </section>

  <!-- Content Sections -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-3 prose prose-lg max-w-none">
          {{ page.content | safe }}
        </div>
        
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <nav class="space-y-2">
                <a href="#overview" class="block text-gray-600 hover:text-blue-600">Overview</a>
                <a href="#technical" class="block text-gray-600 hover:text-blue-600">Technical Details</a>
                <a href="#business" class="block text-gray-600 hover:text-blue-600">Business Value</a>
                <a href="#conclusion" class="block text-gray-600 hover:text-blue-600">Conclusion</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Back to Top Button -->
  <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
          class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </button>
</div>
{% endblock %}
```

## Validation and Quality Assurance

### 1. Accessibility Validation
```bash
# Use browser accessibility tools
# Chrome DevTools: Accessibility tab
# Firefox: Accessibility Inspector
# Safari: Web Inspector Accessibility

# Check color contrast
# Use online tools: WebAIM Contrast Checker
# Verify all text meets WCAG 2.1 AA standards

# Test keyboard navigation
# Tab through all interactive elements
# Verify focus indicators are visible
# Ensure all content is accessible via keyboard
```

### 2. Performance Validation
```bash
# Use browser performance tools
# Chrome DevTools: Lighthouse tab
# Firefox: Performance tab
# Safari: Web Inspector Performance

# Check performance budget
# Use browser network tab to verify:
# - Total page weight < 500KB
# - CSS size < 50KB
# - Load time < 2 seconds
# - First Contentful Paint < 1 second
```

### 3. Responsive Validation
```bash
# Test different screen sizes
# Use browser developer tools:
# - Chrome DevTools device emulation
# - Firefox Responsive Design Mode
# - Safari Responsive Design Mode

# Test mobile, tablet, and desktop views
# Verify:
# - Layout adapts correctly
# - Navigation is accessible
# - Content is readable
# - Images scale properly
```

## Deployment

### 1. Build for Production
```bash
# Build optimized CSS
npm run build:css

# Build static site
zola build

# Verify build artifacts
ls -la public/
```

### 2. Deploy to Static Hosting
```bash
# Deploy to Netlify (example)
netlify deploy --prod --dir=public

# Or deploy to GitHub Pages
# Configure GitHub Actions in .github/workflows/deploy.yml
```

## Troubleshooting

### Common Issues

**Page not showing up in navigation**
- Check `navigation_order` in front matter
- Verify page is in correct content directory
- Ensure template is correctly specified

**Styling not applied**
- Run `npm run build:css` to rebuild CSS
- Check Tailwind CSS configuration
- Verify CSS file is linked in base template

**Accessibility issues**
- Check color contrast ratios
- Verify semantic HTML structure
- Ensure all images have alt text

**Performance issues**
- Optimize images with WebP format
- Minify CSS and HTML
- Remove unused CSS with PurgeCSS

### Getting Help

- Check Zola documentation: https://www.getzola.org/documentation/
- Review Tailwind CSS docs: https://tailwindcss.com/docs/
- Consult WCAG 2.1 guidelines: https://www.w3.org/TR/WCAG21/
- Review constitution: `.specify/memory/constitution.md`

## Next Steps

1. **Content Creation**: Create content for all pages following the guidelines
2. **Template Development**: Customize templates based on content needs
3. **Testing**: Perform comprehensive accessibility and performance testing
4. **Deployment**: Deploy to production environment
5. **Monitoring**: Set up performance and accessibility monitoring

## Success Criteria

The implementation is successful when:

- ✅ All pages display key concepts prominently at the top
- ✅ Detailed information sections expand on key concepts below
- ✅ Layout is consistent across pages while maintaining uniqueness
- ✅ Design is minimalist with high contrast and clean typography
- ✅ Content targets both CISO (technical) and CIO/CEO (business) audiences
- ✅ WCAG 2.1 AA compliance is achieved
- ✅ Performance budgets are met (<500KB total, <2s load time)
- ✅ Responsive design works on all device sizes
- ✅ Content length thresholds trigger appropriate layout behaviors
- ✅ All content is accessible without JavaScript
- ✅ Site builds successfully with no errors

---

**Note**: This quickstart guide provides the essential steps to get started with the website page layout improvement feature. For detailed implementation guidance, refer to the full specification and implementation plan.