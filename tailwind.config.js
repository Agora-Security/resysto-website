/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./templates/**/*.html",
    "./static/**/*.html",
  ],
  theme: {
    extend: {
      // Layout types for different page structures
      layoutTypes: {
        'hero_with_sections': {
          'max-width': '1280px',
          'padding': '2rem',
        },
        'content_heavy': {
          'max-width': '1024px',
          'padding': '1.5rem',
        },
        'feature_grid': {
          'max-width': '1400px',
          'padding': '2rem',
        },
        'action_oriented': {
          'max-width': '900px',
          'padding': '1.5rem',
        },
        'business_focused': {
          'max-width': '1200px',
          'padding': '2rem',
        },
        'timeline': {
          'max-width': '1000px',
          'padding': '1.5rem',
        },
        'content_list': {
          'max-width': '800px',
          'padding': '1.5rem',
        },
        'article': {
          'max-width': '700px',
          'padding': '1rem',
        },
      },
      
      // Content density configurations
      contentDensity: {
        'compact': {
          'line-height': '1.4',
          'spacing': '0.5rem',
          'font-size': '0.95rem',
        },
        'balanced': {
          'line-height': '1.6',
          'spacing': '1rem',
          'font-size': '1rem',
        },
        'detailed': {
          'line-height': '1.8',
          'spacing': '1.5rem',
          'font-size': '1.05rem',
        },
        'readable': {
          'line-height': '1.7',
          'spacing': '1.25rem',
          'font-size': '1.1rem',
        },
        'structured': {
          'line-height': '1.5',
          'spacing': '1rem',
          'font-size': '1rem',
        },
        'modular': {
          'line-height': '1.6',
          'spacing': '1.25rem',
          'font-size': '1rem',
        },
        'focused': {
          'line-height': '1.5',
          'spacing': '0.75rem',
          'font-size': '1rem',
        },
      },
      
      // Audience-specific styling
      audience: {
        'ciso': {
          'primary-color': '#3b82f6',
          'accent-color': '#1d4ed8',
          'focus': 'technical',
        },
        'business': {
          'primary-color': '#10b981',
          'accent-color': '#059669',
          'focus': 'business',
        },
        'all': {
          'primary-color': '#6366f1',
          'accent-color': '#4f46e5',
          'focus': 'balanced',
        },
      },
      
      // Animation utilities for subtle interactions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' },
        },
      },
      
      // Spacing scale for content thresholds
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      
      // Typography scale for better readability
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.25rem' }],
        'sm': ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1rem', { lineHeight: '1.625rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.25rem' }],
      },
      
      // Enhanced color palette for high contrast
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        'accent': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      
      // Border radius for modern design
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // Box shadows for depth
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
      
      // Transition utilities
      transitionProperty: {
        'none': 'none',
        'all': 'all',
        'DEFAULT': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      
      transitionDuration: {
        'DEFAULT': '150ms',
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [
    // Custom plugins for layout and audience targeting
    function({ addUtilities, addComponents, theme }) {
      // Layout type utilities
      const layoutTypes = theme('layoutTypes');
      const layoutUtilities = Object.keys(layoutTypes).map(type => ({
        [`.layout-${type}`]: {
          '--layout-max-width': layoutTypes[type]['max-width'],
          '--layout-padding': layoutTypes[type]['padding'],
          'max-width': layoutTypes[type]['max-width'],
          'padding': layoutTypes[type]['padding'],
        },
      }));
      
      // Content density utilities
      const contentDensity = theme('contentDensity');
      const densityUtilities = Object.keys(contentDensity).map(density => ({
        [`.density-${density}`]: {
          '--line-height': contentDensity[density]['line-height'],
          '--spacing': contentDensity[density]['spacing'],
          '--font-size': contentDensity[density]['font-size'],
          'line-height': contentDensity[density]['line-height'],
          'font-size': contentDensity[density]['font-size'],
        },
      }));
      
      // Audience-specific utilities
      const audience = theme('audience');
      const audienceUtilities = Object.keys(audience).map(aud => ({
        [`.audience-${aud}`]: {
          '--primary-color': audience[aud]['primary-color'],
          '--accent-color': audience[aud]['accent-color'],
          '--focus': audience[aud]['focus'],
        },
      }));
      
      addUtilities([...layoutUtilities, ...densityUtilities, ...audienceUtilities]);
      
      // Add components for key concepts highlighting
      addComponents({
        '.key-concepts': {
          'background': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
          'border': '1px solid rgba(99, 102, 241, 0.2)',
          'border-radius': theme('borderRadius.lg'),
          'padding': theme('spacing.6'),
          'margin': theme('spacing.6', '0'),
        },
        '.key-concepts h3': {
          'color': theme('colors.primary.600'),
          'font-weight': theme('fontWeight.semibold'),
          'margin-bottom': theme('spacing.3'),
        },
        '.key-concepts ul': {
          'list-style-type': 'none',
          'padding': '0',
        },
        '.key-concepts li': {
          'padding': theme('spacing.2', '0'),
          'position': 'relative',
          'padding-left': theme('spacing.6'),
        },
        '.key-concepts li::before': {
          'content': '"•"',
          'position': 'absolute',
          'left': '0',
          'color': theme('colors.primary.500'),
          'font-weight': 'bold',
        },
      });
    },
  ],
  // Performance optimizations
  important: false,
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOrder: true,
  },
  // Core plugins
  corePlugins: {
    preflight: true,
    container: true,
    accessibility: true,
    animation: true,
    backgroundOpacity: true,
    borderOpacity: true,
    boxShadow: true,
    boxShadowColor: true,
    caretColor: true,
    colors: true,
    container: true,
    cursor: true,
    divideColor: true,
    divideOpacity: true,
    divideStyle: true,
    divideWidth: true,
    fill: true,
    flex: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    fontFamily: true,
    fontSize: true,
    fontWeight: true,
    gap: true,
    gradientColorStops: true,
    gridAutoColumns: true,
    gridAutoFlow: true,
    gridAutoRows: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    height: true,
    inset: true,
    justifyContent: true,
    justifyItems: true,
    justifySelf: true,
    letterSpacing: true,
    lineHeight: true,
    margin: true,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    objectFit: true,
    objectPosition: true,
    opacity: true,
    order: true,
    outline: true,
    overflow: true,
    padding: true,
    placeContent: true,
    placeItems: true,
    placeSelf: true,
    placeholderColor: true,
    pointerEvents: true,
    position: true,
    resize: true,
    ringColor: true,
    ringOffsetColor: true,
    ringOffsetWidth: true,
    ringWidth: true,
    rotate: true,
    rounded: true,
    scale: true,
    skew: true,
    space: true,
    stroke: true,
    strokeWidth: true,
    textAlign: true,
    textColor: true,
    textDecoration: true,
    textIndent: true,
    textOpacity: true,
    textOverflow: true,
    textTransform: true,
    transform: true,
    translate: true,
    transition: true,
    transitionDelay: true,
    transitionDuration: true,
    transitionProperty: true,
    transitionTimingFunction: true,
    userSelect: true,
    verticalAlign: true,
    visibility: true,
    whitespace: true,
    width: true,
    wordBreak: true,
    zIndex: true,
  },
}