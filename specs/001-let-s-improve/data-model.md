# Data Model: Website Page Layout Improvement

**Feature**: Website Page Layout Improvement  
**Date**: 2025-09-26  
**Branch**: 001-let-s-improve

## Content Entities

### Page
**Description**: Represents a single page in the website with its content and metadata.

**Fields**:
- `title` (string, required): Page title for SEO and navigation
- `description` (string, required): Meta description for SEO
- `content_type` (enum, required): Type of content (about, access, blog, features, partners, roadmap)
- `audience_target` (enum, required): Primary audience (technical, business, both)
- `content_length` (enum, required): Content length category (short, medium, long)
- `word_count` (integer, required): Total word count for layout decisions
- `screen_height_estimate` (integer, required): Estimated screen height for layout decisions
- `key_concepts` (array of strings, required): Main concepts to highlight at top
- `sections` (array of Section, required): Content sections in hierarchical order
- `media_assets` (array of MediaAsset, optional): Images and other media
- `navigation_order` (integer, required): Order in site navigation
- `published_date` (date, optional): Publication date for blog posts
- `last_updated` (date, required): Last content update date

**Validation Rules**:
- `title` must be 10-100 characters
- `description` must be 50-300 characters
- `word_count` must match `content_length` category thresholds
- `key_concepts` must have 3-7 items
- `sections` must have at least 1 item

### Section
**Description**: Represents a content section within a page.

**Fields**:
- `id` (string, required): Unique section identifier
- `title` (string, required): Section title
- `content` (string, required): Section content in Markdown
- `audience_level` (enum, required): Target audience (technical, business, both)
- `complexity_level` (enum, required): Content complexity (basic, intermediate, advanced)
- `display_mode` (enum, required): How to display (full, expandable, tabbed)
- `order` (integer, required): Order within page
- `parent_section` (string, optional): Parent section ID for nested structure
- `subsections` (array of Section, optional): Child sections
- `media_assets` (array of MediaAsset, optional): Section-specific media

**Validation Rules**:
- `title` must be 5-80 characters
- `content` must not be empty
- `order` must be unique within parent
- Nested sections limited to 3 levels deep

### MediaAsset
**Description**: Represents media assets (images, videos, etc.) used in content.

**Fields**:
- `id` (string, required): Unique asset identifier
- `type` (enum, required): Asset type (image, video, document)
- `filename` (string, required): Original filename
- `alt_text` (string, required): Alt text for accessibility
- `caption` (string, optional): Asset caption
- `width` (integer, optional): Asset width in pixels
- `height` (integer, optional): Asset height in pixels
- `file_size` (integer, required): File size in bytes
- `mime_type` (string, required): MIME type
- `optimization_level` (enum, required): Optimization applied (none, basic, aggressive)
- `usage_context` (string, required): Where asset is used (hero, content, background)

**Validation Rules**:
- `alt_text` must be provided for images
- `file_size` must be under 500KB for images
- `width` and `height` required for images
- `caption` must be 10-200 characters if provided

## Layout Entities

### LayoutTemplate
**Description**: Defines the reusable layout structure for pages.

**Fields**:
- `id` (string, required): Template identifier
- `name` (string, required): Human-readable template name
- `description` (string, required): Template purpose and usage
- `content_type` (enum, required): Content type this template supports
- `audience_target` (enum, required): Primary audience (technical, business, both)
- `content_length_support` (array of enum, required): Supported content lengths
- `components` (array of LayoutComponent, required): Template components
- `responsive_breakpoints` (array of Breakpoint, required): Responsive design breakpoints
- `performance_budget` (PerformanceBudget, required): Performance constraints
- `accessibility_features` (array of string, required): Accessibility features

**Validation Rules**:
- `name` must be unique across templates
- `content_length_support` must include at least one category
- `components` must include required components (header, content, footer)

### LayoutComponent
**Description**: Individual component within a layout template.

**Fields**:
- `id` (string, required): Component identifier
- `type` (enum, required): Component type (header, hero, content, sidebar, footer, navigation)
- `name` (string, required): Human-readable component name
- `description` (string, required): Component purpose
- `required` (boolean, required): Whether component is required
- `configurable` (boolean, required): Whether component can be customized
- `content_sources` (array of string, required): What content this component displays
- `styling` (ComponentStyling, required): Component styling configuration
- `responsive_behavior` (array of ResponsiveBehavior, required): How component responds to breakpoints

**Validation Rules**:
- `id` must be unique within template
- `content_sources` must reference valid content entities
- `styling` must comply with design system

### Breakpoint
**Description**: Responsive design breakpoint configuration.

**Fields**:
- `name` (string, required): Breakpoint name (mobile, tablet, desktop)
- `min_width` (integer, required): Minimum width in pixels
- `max_width` (integer, optional): Maximum width in pixels
- `component_adjustments` (array of ComponentAdjustment, required): How components adjust

**Validation Rules**:
- `min_width` must be positive
- `max_width` must be greater than `min_width` if provided
- `name` must be unique across breakpoints

## User Experience Entities

### UserPersona
**Description**: Defines target user personas for the website.

**Fields**:
- `id` (string, required): Persona identifier
- `name` (string, required): Persona name (CISO, CIO, CEO)
- `description` (string, required): Persona description and context
- `technical_expertise` (enum, required): Technical level (high, medium, low)
- `primary_goals` (array of string, required): Primary user goals
- `pain_points` (array of string, required): User pain points
- `content_preferences` (ContentPreferences, required): Content type preferences
- `navigation_behavior` (enum, required): How user navigates (linear, exploratory, goal-oriented)
- `device_preferences` (array of enum, required): Preferred devices (mobile, tablet, desktop)

**Validation Rules**:
- `name` must be unique across personas
- `primary_goals` must have 3-7 items
- `pain_points` must have 2-5 items

### ContentPreferences
**Description**: Content preferences for user personas.

**Fields**:
- `detail_level` (enum, required): Preferred detail level (high_level, detailed, technical)
- `content_format` (enum, required): Preferred format (text, visual, mixed)
- `information_priority` (array of string, required): Priority information types
- `interaction_style` (enum, required): How user prefers to interact (passive, active, exploratory)

**Validation Rules**:
- `information_priority` must have 3-5 items
- All enums must have valid values

## Configuration Entities

### PerformanceBudget
**Description**: Performance budget constraints for layouts.

**Fields**:
- `total_page_weight_kb` (integer, required): Maximum total page weight in KB
- `css_size_kb` (integer, required): Maximum CSS size in KB
- `js_size_kb` (integer, required): Maximum JavaScript size in KB
- `image_count` (integer, required): Maximum number of images
- `font_count` (integer, required): Maximum number of fonts
- `load_time_seconds` (integer, required): Maximum load time in seconds

**Validation Rules**:
- All values must be positive
- `total_page_weight_kb` must be >= sum of individual components
- Values must comply with constitutional requirements

### ComponentStyling
**Description**: Styling configuration for layout components.

**Fields**:
- `color_scheme` (enum, required): Color scheme (light, dark, auto)
- `typography_scale` (enum, required): Typography scale (small, medium, large)
- `spacing_unit` (enum, required): Spacing unit (compact, normal, spacious)
- `border_radius` (enum, required): Border radius (none, small, medium, large)
- `shadow_level` (enum, required): Shadow level (none, subtle, medium, strong)
- `animation_level` (enum, required): Animation level (none, subtle, moderate)

**Validation Rules**:
- All enums must have valid values
- Styling must comply with accessibility requirements

## Entity Relationships

### Page Relationships
- `Page` has many `Section` (one-to-many)
- `Page` has many `MediaAsset` (one-to-many)
- `Page` uses one `LayoutTemplate` (many-to-one)

### Section Relationships
- `Section` has many `Section` (self-referential, hierarchical)
- `Section` has many `MediaAsset` (one-to-many)

### LayoutTemplate Relationships
- `LayoutTemplate` has many `LayoutComponent` (one-to-many)
- `LayoutTemplate` has many `Breakpoint` (one-to-many)

### LayoutComponent Relationships
- `LayoutComponent` has one `ComponentStyling` (one-to-one)
- `LayoutComponent` has many `ResponsiveBehavior` (one-to-many)

### UserPersona Relationships
- `UserPersona` has one `ContentPreferences` (one-to-one)

## State Transitions

### Page Content States
1. **Draft**: Content being created or edited
2. **Review**: Content ready for review
3. **Approved**: Content approved for publication
4. **Published**: Content live on website
5. **Archived**: Content no longer active

### Layout Template States
1. **Design**: Template being designed
2. **Testing**: Template in testing phase
3. **Approved**: Template approved for use
4. **Active**: Template in use
5. **Deprecated**: Template no longer recommended

### Media Asset States
1. **Upload**: Asset uploaded to system
2. **Processing**: Asset being optimized
3. **Ready**: Asset ready for use
4. **Active**: Asset in use
5. **Archived**: Asset no longer in use

## Data Validation Rules

### Content Length Validation
```typescript
function validateContentLength(wordCount: number, screenHeight: number): ContentLength {
  const shortByWords = wordCount < 300;
  const shortByHeight = screenHeight < 1;
  const mediumByWords = wordCount >= 300 && wordCount <= 1000;
  const mediumByHeight = screenHeight >= 1 && screenHeight <= 3;
  const longByWords = wordCount > 1000;
  const longByHeight = screenHeight > 3;
  
  if ((shortByWords || shortByHeight) && !(mediumByWords || mediumByHeight || longByWords || longByHeight)) {
    return 'short';
  }
  if ((mediumByWords || mediumByHeight) && !(longByWords || longByHeight)) {
    return 'medium';
  }
  if (longByWords || longByHeight) {
    return 'long';
  }
  
  // Default to medium if ambiguous
  return 'medium';
}
```

### Accessibility Validation
```typescript
function validateAccessibility(component: LayoutComponent): boolean {
  // Check color contrast
  if (!hasSufficientColorContrast(component.styling)) {
    return false;
  }
  
  // Check keyboard navigation
  if (!supportsKeyboardNavigation(component)) {
    return false;
  }
  
  // Check semantic HTML
  if (!usesSemanticHTML(component)) {
    return false;
  }
  
  return true;
}
```

### Performance Validation
```typescript
function validatePerformance(budget: PerformanceBudget, actual: PerformanceMetrics): boolean {
  return actual.totalPageWeightKB <= budget.total_page_weight_kb &&
         actual.cssSizeKB <= budget.css_size_kb &&
         actual.jsSizeKB <= budget.js_size_kb &&
         actual.imageCount <= budget.image_count &&
         actual.fontCount <= budget.font_count &&
         actual.loadTimeSeconds <= budget.load_time_seconds;
}
```

## Conclusion

This data model provides a comprehensive structure for implementing the website page layout improvement feature. It defines the entities, relationships, validation rules, and state transitions needed to support:

1. Content management for dual audiences (CISO and CIO/CEO)
2. Layout template system with component-based design
3. Responsive design with multiple breakpoints
4. Performance budgeting and validation
5. Accessibility compliance
6. User persona targeting

The model aligns with the constitutional requirements for static-first architecture, performance excellence, and universal accessibility while providing the flexibility needed for the feature requirements.