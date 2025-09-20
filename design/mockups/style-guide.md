# Emanuel Portfolio Style Guide

This document defines the design system for the Emanuel Portfolio website, ensuring consistency and scalability across all components and pages.

## 1. Color Palette

### Primary Colors
| Purpose          | Token Name        | Hex Code   | Usage Example                |
|------------------|------------------|-----------|------------------------------|
| Primary          | `--primary`      | `#2563EB` | Buttons, highlights, CTA     |
| Primary Hover    | `--primary-hover`| `#1E40AF` | Button hover states          |
| Primary Foreground| `--primary-foreground`| `#FFFFFF` | Text on primary background |

### Secondary Colors
| Purpose          | Token Name        | Hex Code   | Usage Example                |
|------------------|------------------|-----------|------------------------------|
| Secondary        | `--secondary`    | `#9333EA` | Links, accents, highlights   |
| Secondary Hover  | `--secondary-hover`| `#6B21A8` | Link hover states           |
| Secondary Foreground| `--secondary-foreground`| `#FFFFFF` | Text on secondary background |

### Neutral Colors
| Purpose          | Token Name        | Hex Code   | Usage Example                |
|------------------|------------------|-----------|------------------------------|
| Background       | `--background`   | `#FFFFFF` | Page background (light mode) |
| Foreground       | `--foreground`   | `#1F2937` | Main text color             |
| Muted Background | `--muted`        | `#F9FAFB` | Card backgrounds, sections   |
| Muted Foreground | `--muted-foreground`| `#6B7280` | Secondary text, captions   |
| Border           | `--border`       | `#E5E7EB` | Component borders, dividers  |

### Feedback Colors
| Purpose          | Token Name        | Hex Code   | Usage Example                |
|------------------|------------------|-----------|------------------------------|
| Success          | `--success`      | `#10B981` | Success messages, confirmations |
| Warning          | `--warning`      | `#F59E0B` | Warnings, alerts            |
| Error            | `--error`        | `#EF4444` | Error messages, validation   |

### Dark Mode Colors
| Purpose          | Token Name        | Hex Code   | Usage Example                |
|------------------|------------------|-----------|------------------------------|
| Dark Background  | `--dark-background`| `#111827` | Dark mode page background   |
| Dark Foreground  | `--dark-foreground`| `#F9FAFB` | Dark mode text color        |
| Dark Muted       | `--dark-muted`   | `#374151` | Dark mode card backgrounds  |

## 2. Typography

### Font Stack
- **Primary Font**: System UI (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)
- **Monospace Font**: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace

### Type Scale
| Style        | CSS Class     | Font Size | Font Weight | Line Height | Usage                    |
|--------------|---------------|-----------|-------------|-------------|--------------------------|
| Display      | `.text-6xl`   | 3.75rem   | Bold (700)  | 1.2         | Hero headlines           |
| Heading 1    | `.text-4xl`   | 2.25rem   | Bold (700)  | 1.3         | Page titles              |
| Heading 2    | `.text-3xl`   | 1.875rem  | SemiBold (600)| 1.4       | Section headers          |
| Heading 3    | `.text-2xl`   | 1.5rem    | SemiBold (600)| 1.4       | Subsection headers       |
| Heading 4    | `.text-xl`    | 1.25rem   | Medium (500)| 1.5         | Card titles              |
| Body Large   | `.text-lg`    | 1.125rem  | Regular (400)| 1.6        | Lead paragraphs          |
| Body         | `.text-base`  | 1rem      | Regular (400)| 1.6        | Body text, descriptions  |
| Body Small   | `.text-sm`    | 0.875rem  | Regular (400)| 1.5        | Captions, labels         |
| Caption      | `.text-xs`    | 0.75rem   | Medium (500)| 1.4         | Tags, metadata           |

### Font Weights
- **Regular**: 400 (body text, descriptions)
- **Medium**: 500 (labels, captions, emphasis)
- **SemiBold**: 600 (headings, important text)
- **Bold**: 700 (main headlines, strong emphasis)

## 3. Spacing System

Based on 4px base unit with consistent scaling:

| Size | Token | Value | Usage                          |
|------|-------|-------|--------------------------------|
| xs   | `1`   | 4px   | Small gaps, fine adjustments   |
| sm   | `2`   | 8px   | Component spacing              |
| md   | `4`   | 16px  | Card padding, element margins  |
| lg   | `6`   | 24px  | Section spacing                |
| xl   | `8`   | 32px  | Large section gaps             |
| 2xl  | `12`  | 48px  | Major layout spacing           |
| 3xl  | `16`  | 64px  | Hero sections, page spacing    |

## 4. Layout & Grid

### Container Sizes
- **Mobile**: 100% width with 24px padding
- **Tablet**: max-width 768px with 32px padding
- **Desktop**: max-width 1200px with 48px padding
- **Large**: max-width 1400px with 64px padding

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Grid System
- **12-column grid** for complex layouts
- **Flexbox** for component-level layouts
- **CSS Grid** for card layouts and galleries

## 5. Components

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--border);
  padding: 12px 24px;
  border-radius: 8px;
}
```

### Cards
```css
.card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

### Navigation
```css
.nav-link {
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 8px 16px;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
  font-weight: 500;
}
```

## 6. Animations & Transitions

### Standard Transitions
- **Duration**: 200ms for UI interactions, 300ms for complex animations
- **Easing**: `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for general use

### Hover Effects
```css
/* Standard hover lift */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Subtle scale effect */
.hover-scale:hover {
  transform: scale(1.02);
}
```

## 7. Accessibility

### Color Contrast
- **AA Standard**: Minimum 4.5:1 for normal text
- **AAA Standard**: 7:1 for enhanced accessibility
- All color combinations meet WCAG AA standards

### Focus States
```css
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Interactive Elements
- Minimum 44px touch target size for mobile
- Clear visual feedback for all interactive states
- Keyboard navigation support for all components

## 8. Implementation Guidelines

### CSS Custom Properties
All design tokens are implemented as CSS custom properties in `styles/globals.css`:

```css
:root {
  --primary: #2563EB;
  --primary-hover: #1E40AF;
  --secondary: #9333EA;
  --background: #FFFFFF;
  --foreground: #1F2937;
  --muted: #F9FAFB;
  --muted-foreground: #6B7280;
  --border: #E5E7EB;
  /* ... */
}
```

### Component Classes
Use CSS utilities combined with custom component classes:

```html
<!-- Good: Semantic component class with utility modifiers -->
<button class="btn-primary text-lg">
  Primary Action
</button>

<!-- Avoid: Inline styling or non-semantic classes -->
<button style="background: blue; padding: 12px;">
  Button
</button>
```

### Responsive Design
Mobile-first approach with progressive enhancement:

```html
<!-- Responsive grid example -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Content -->
</div>
```

## 9. File Organization

```
styles/
├── globals.css          # Global styles and design tokens
├── components/          # Component-specific styles
├── utilities/           # Utility classes
└── themes/              # Theme variations
```

## 10. Design Tokens Export

For design handoff and consistency:

```json
{
  "colors": {
    "primary": "#2563EB",
    "secondary": "#9333EA",
    "success": "#10B981",
    "warning": "#F59E0B",
    "error": "#EF4444"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "typography": {
    "display": {
      "fontSize": "3.75rem",
      "fontWeight": "700",
      "lineHeight": "1.2"
    }
  }
}
```

---

This style guide ensures consistent design implementation across the Emanuel Portfolio website while maintaining flexibility for future enhancements and variations.