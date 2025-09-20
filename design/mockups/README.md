# Emanuel Portfolio Design System
figma link >>https://id-small-60885737.figma.site/

A comprehensive design system for the Emanuel Portfolio website, built with modern web technologies and following industry best practices.

## 📁 Structure

```
design-system/
├── README.md           # This file - overview and quick start
├── style-guide.md      # Complete design system documentation
├── components/         # Component specifications and examples
├── tokens/            # Design tokens (colors, spacing, typography)
└── assets/            # Design assets and exports from Figma
```

## 🎨 Design Philosophy

The Emanuel Portfolio design system is built on the principles of:

- **Simplicity**: Clean, minimal design that puts content first
- **Consistency**: Systematic approach to colors, typography, and spacing
- **Accessibility**: WCAG AA compliant with inclusive design practices
- **Scalability**: Modular components that grow with the project
- **Performance**: Optimized for fast loading and smooth interactions

## 🎯 Quick Start

### 1. Color Palette

Our color system is based on semantic naming and provides both light and dark mode support:

```css
/* Primary Actions */
background: var(--primary);        /* #2563EB */
color: var(--primary-foreground);  /* #FFFFFF */

/* Secondary Elements */
background: var(--secondary);      /* #9333EA */
color: var(--secondary-foreground); /* #FFFFFF */

/* Text and Backgrounds */
background: var(--background);     /* #FFFFFF / #111827 dark */
color: var(--foreground);          /* #1F2937 / #F9FAFB dark */
color: var(--muted-foreground);    /* #6B7280 / #9CA3AF dark */
```

### 2. Typography Scale

Consistent typography using system fonts:

```css
.text-6xl { font-size: 3.75rem; }  /* Hero headlines */
.text-4xl { font-size: 2.25rem; }  /* Page titles */
.text-3xl { font-size: 1.875rem; } /* Section headers */
.text-2xl { font-size: 1.5rem; }   /* Subsection headers */
.text-xl  { font-size: 1.25rem; }  /* Card titles */
.text-lg  { font-size: 1.125rem; } /* Lead paragraphs */
.text-base { font-size: 1rem; }    /* Body text */
.text-sm  { font-size: 0.875rem; } /* Captions */
```

### 3. Spacing System

4px-based spacing scale for consistent layouts:

```css
.p-1  { padding: 4px; }    /* xs */
.p-2  { padding: 8px; }    /* sm */
.p-4  { padding: 16px; }   /* md */
.p-6  { padding: 24px; }   /* lg */
.p-8  { padding: 32px; }   /* xl */
.p-12 { padding: 48px; }   /* 2xl */
.p-16 { padding: 64px; }   /* 3xl */
```

## 🧩 Core Components

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted/50 transition-colors">
  Secondary Action
</button>
```

### Cards

```html
<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-muted-foreground">Card description content goes here.</p>
</div>
```

### Navigation

```html
<nav class="border-b border-border">
  <div class="max-w-6xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-2xl">✦</span>
        <h1 class="text-xl font-bold">Emanuel Portfolio</h1>
      </div>
      
      <div class="flex items-center space-x-6">
        <a href="#" class="text-muted-foreground hover:text-primary transition-colors">Home</a>
        <a href="#" class="text-muted-foreground hover:text-primary transition-colors">About</a>
        <a href="#" class="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
      </div>
    </div>
  </div>
</nav>
```

## 📱 Responsive Design

Mobile-first approach with these breakpoints:

- **Mobile**: < 640px (base styles)
- **Tablet**: 640px - 1024px (`sm:` and `md:` prefixes)
- **Desktop**: 1024px+ (`lg:` and `xl:` prefixes)

```html
<!-- Responsive Grid Example -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items adapt based on screen size -->
</div>
```

## 🌓 Dark Mode Support

Automatic dark mode support through CSS custom properties:

```html
<!-- Add dark class to enable dark mode -->
<html class="dark">
  <!-- All components automatically adapt -->
</html>
```

## ♿ Accessibility Features

- **Color Contrast**: All combinations meet WCAG AA standards (4.5:1 minimum)
- **Focus Management**: Visible focus indicators for keyboard navigation
- **Touch Targets**: Minimum 44px for mobile interactions
- **Semantic HTML**: Proper markup for screen readers

```css
/* Focus states for accessibility */
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

## 🚀 Performance Optimizations

- **CSS Custom Properties**: Efficient theme switching
- **Minimal CSS**: Only necessary styles loaded
- **Optimized Images**: Responsive images with proper sizing
- **Smooth Animations**: 60fps transitions using transform and opacity

## 📐 Layout Guidelines

### Container Sizes
```css
.container {
  max-width: 1200px;  /* Desktop */
  margin: 0 auto;
  padding: 0 24px;    /* Mobile */
}

@media (min-width: 768px) {
  .container { padding: 0 48px; }  /* Tablet+ */
}
```

### Grid System
```html
<!-- 12-column responsive grid -->
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">
    <!-- Responsive column -->
  </div>
</div>
```

## 🔧 Implementation

### 1. CSS Custom Properties
All design tokens are defined in `styles/globals.css`:

```css
:root {
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #1f2937;
  /* ... all other tokens */
}
```

### 2. CSS Classes
Use utility-first approach with semantic component classes:

```html
<!-- Good: Semantic + Utilities -->
<button class="btn-primary text-lg">Action</button>

<!-- Avoid: Pure inline styles -->
<button style="background: blue;">Action</button>
```

### 3. Component Structure
```
components/
├── ui/              # Reusable UI components
├── layout/          # Layout components (header, footer, etc.)
├── sections/        # Page sections
└── pages/           # Page-specific components
```

## 📚 Resources

- **Figma File**: [Emanuel Portfolio Design System](figma-link-here)
- **Style Guide**: [`style-guide.md`](./style-guide.md)
- **Component Documentation**: [`components/`](./components/)


## 🎨 Design Tokens

### Export for Development
```json
{
  "colors": {
    "primary": "#2563eb",
    "secondary": "#9333ea",
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444"
  },
  "spacing": {
    "xs": "4px", "sm": "8px", "md": "16px",
    "lg": "24px", "xl": "32px", "2xl": "48px"
  },
  "fontSize": {
    "xs": "0.75rem", "sm": "0.875rem", "base": "1rem",
    "lg": "1.125rem", "xl": "1.25rem", "2xl": "1.5rem",
    "3xl": "1.875rem", "4xl": "2.25rem", "6xl": "3.75rem"
  }
}
```

## 🤝 Contributing

When contributing to the design system:

1. **Follow the established patterns** in color, spacing, and typography
2. **Test accessibility** with screen readers and keyboard navigation
3. **Validate responsive behavior** across all breakpoints
4. **Document new components** with usage examples
5. **Update design tokens** when adding new system values

## 📝 Changelog

### v1.0.0 (Current)
- Initial design system implementation
- Complete color palette with dark mode support
- Typography scale and spacing system
- Core component library
- Accessibility compliance
- Responsive grid system

---

**Emanuel Portfolio Design System** - Building consistent, accessible, and beautiful web experiences.