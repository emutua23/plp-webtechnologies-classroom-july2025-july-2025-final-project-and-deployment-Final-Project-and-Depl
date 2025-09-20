# Figma Design System Creation Guide

Step-by-step instructions for creating the Emanuel Portfolio design system in Figma and exporting the required assets.

## 🎯 Overview

This guide helps you create a comprehensive Figma file that includes:
1. **Design System Components** (colors, typography, grid, components)
2. **High-Fidelity Mockups** (home, about, portfolio pages)
3. **Export-Ready Assets** for development handoff

## 📐 Setting Up Your Figma File

### 1. Create New Figma File
- **File Name**: "Emanuel Portfolio Design System"
- **Team**: Place in appropriate team/project folder
- **Description**: "Complete design system and mockups for Emanuel Portfolio website"

### 2. Page Structure
Create these pages in your Figma file:
```
📄 Pages:
├── 🎨 Design System
├── 🏠 Home Mockup  
├── 👤 About Mockup
├── 💼 Portfolio Mockup
└── 📱 Mobile Versions
```

## 🎨 Page 1: Design System

### Frame 1: Color Palette (1200x800px)

**Setup:**
1. Create frame named "Color Palette Export"
2. Set background to white (#FFFFFF)
3. Add title "EMANUEL PORTFOLIO COLOR SYSTEM"

**Color Swatches Layout:**
```
Row 1: PRIMARY COLORS
- Primary: #2563EB (rectangle + hex code + "Primary")
- Primary Hover: #1E40AF (rectangle + hex code + "Primary Hover")
- Primary Foreground: #FFFFFF (rectangle + hex code + "Primary Text")

Row 2: SECONDARY COLORS  
- Secondary: #9333EA (rectangle + hex code + "Secondary")
- Secondary Hover: #6B21A8 (rectangle + hex code + "Secondary Hover")
- Secondary Foreground: #FFFFFF (rectangle + hex code + "Secondary Text")

Row 3: NEUTRAL COLORS
- Background: #FFFFFF (rectangle + hex code + "Background")
- Foreground: #1F2937 (rectangle + hex code + "Text Primary")
- Muted: #6B7280 (rectangle + hex code + "Text Secondary")
- Border: #E5E7EB (rectangle + hex code + "Border")

Row 4: FEEDBACK COLORS
- Success: #10B981 (rectangle + hex code + "Success")
- Warning: #F59E0B (rectangle + hex code + "Warning")  
- Error: #EF4444 (rectangle + hex code + "Error")

Row 5: DARK MODE VARIANTS
- Dark Background: #111827
- Dark Foreground: #F9FAFB
- Dark Muted: #374151
```

**Create Color Styles:**
1. Select each color rectangle
2. Right-click → "Create Color Style"
3. Name exactly as shown above
4. This creates a reusable color library

### Frame 2: Typography (1200x1000px)

**Setup:**
1. Create frame named "Typography Export"
2. Add title "EMANUEL PORTFOLIO TYPOGRAPHY"

**Font Information:**
```
FONT FAMILY
Primary: System UI, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
Monospace: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace

TYPE SCALE (create text examples for each):
- Display (60px, Bold, 1.2 line-height): "Hero Headline"
- H1 (36px, Bold, 1.3 line-height): "Page Title"  
- H2 (30px, SemiBold, 1.4 line-height): "Section Header"
- H3 (24px, SemiBold, 1.4 line-height): "Subsection Header"
- H4 (20px, Medium, 1.5 line-height): "Card Title"
- Body Large (18px, Regular, 1.6 line-height): "Lead paragraph text example"
- Body (16px, Regular, 1.6 line-height): "Standard body text example"
- Small (14px, Regular, 1.5 line-height): "Caption or label text"

FONT WEIGHTS (show examples):
- Regular (400): "Standard body text"
- Medium (500): "Labels and emphasis"
- SemiBold (600): "Headings and important"
- Bold (700): "Strong headlines"
```

**Create Text Styles:**
1. Select each text example
2. Right-click → "Create Text Style"
3. Name as "Display", "H1", "Body", etc.

### Frame 3: Grid System (1400x1000px)

**Setup:**
1. Create frame named "Grid System Export"
2. Show 12-column grid overlay
3. Add title "EMANUEL PORTFOLIO GRID & SPACING"

**Grid Demonstration:**
```
DESKTOP GRID (1200px container)
- Show 12 equal columns with gutters
- Mark container padding (48px)
- Show column width calculations

TABLET GRID (768px container)  
- Show 12 columns at tablet size
- Mark container padding (32px)

MOBILE GRID (100% width)
- Show stacked/single column
- Mark container padding (24px)

SPACING SCALE (visual bars):
xs (4px): ■
sm (8px): ■■
md (16px): ■■■■  
lg (24px): ■■■■■■
xl (32px): ■■■■■■■■
2xl (48px): ■■■■■■■■■■■■
3xl (64px): ■■■■■■■■■■■■■■■■
```

### Frame 4: UI Components (1600x1200px)

**Setup:**
1. Create frame named "Components Export"
2. Organize in sections

**Button Components:**
```
PRIMARY BUTTONS (show all states):
- Normal: bg-primary, text-primary-foreground
- Hover: bg-primary-hover, slight shadow
- Focus: focus ring, accessible outline
- Disabled: reduced opacity, no interaction

SECONDARY BUTTONS:
- Normal: border-border, text-foreground
- Hover: bg-muted
- Focus: focus ring
- Disabled: reduced opacity

SIZES:
- Small: px-4 py-2, text-sm
- Default: px-6 py-3, text-base  
- Large: px-8 py-4, text-lg
```

**Card Components:**
```
PROJECT CARD:
- Image area (aspect-ratio 16:9)
- Title (H3 style)
- Description (Body style)
- Tags (Small style, bg-secondary)
- CTA Button

SERVICE CARD:
- Icon area (64x64px)
- Title (H3 style)  
- Description (Body style)
- Feature list (Small style)
- Pricing (Bold)

TESTIMONIAL CARD:
- Quote text (Body Large, italic)
- Author info (Small style)
- Avatar placeholder (48x48px)
- Rating stars
```

**Navigation Components:**
```
MAIN NAVIGATION:
- Logo area with "✦ Emanuel Portfolio"
- Navigation links with hover states
- CTA button
- Mobile hamburger menu

BREADCRUMBS:
- Home / About / Current Page
- Separator styling
- Current page emphasis

FOOTER:
- Social links with icons
- Quick links
- Copyright information
```

**Form Components:**
```
INPUT FIELD:
- Normal state: border-border
- Focus state: ring-primary  
- Error state: border-destructive
- Label styling (Medium weight)

TEXTAREA:
- Same states as input
- Proper resize handling
- Character count if needed

CHECKBOX/RADIO:
- Unchecked state
- Checked state with primary color
- Focus ring for accessibility
- Label alignment
```

## 🏠 Page 2: Home Mockup

### Full Homepage Design (1440x3000px+)

**Sections to include:**
1. **Navigation Bar** (use components from design system)
2. **Hero Section**
   - Large headline "Hello, I'm Emanuel"
   - Subtitle paragraph
   - Two CTA buttons (primary + secondary)
3. **Featured Projects** (3-column grid)
4. **Services Overview** (3-column grid with icons)
5. **Call-to-Action Section**
6. **Footer** (use component from design system)

**Design Notes:**
- Use exact colors from color palette
- Apply typography styles consistently
- Show proper spacing using grid system
- Include hover states for interactive elements

## 👤 Page 3: About Mockup

### Full About Page Design (1440x2500px+)

**Sections to include:**
1. **Navigation Bar**
2. **Page Header** with large title
3. **Personal Story Section**
   - Two-column layout (text + illustration placeholder)
   - Multiple paragraphs using Body style
4. **Skills Grid** (6 skills with percentages)
5. **Experience Timeline** (vertical timeline design)
6. **Education Section** (card-based layout)
7. **Footer**

## 💼 Page 4: Portfolio Mockup

### Multi-Artboard Portfolio Design

**Create multiple artboards:**

**Artboard 1: Portfolio Grid (1440x2000px)**
- Page header
- Filter buttons (All, UI/UX, Web Dev, etc.)
- 3-column project grid
- Load more section

**Artboard 2: Project Detail View (1440x3000px)**
- Project hero image
- Project title and description
- Technology tags
- Process section
- Results/outcomes
- Next project navigation

**Artboard 3: Portfolio List View (1440x2500px)**
- Alternative list-based layout
- Larger project previews
- More detailed descriptions

## 📱 Page 5: Mobile Versions

Create mobile versions (375px width) for:
- Home page (key sections)
- About page (stacked layout)
- Portfolio grid (single column)
- Navigation (hamburger menu)

## 📤 Export Instructions

### Step 1: Prepare for Export
1. **Name all frames** with exact export filenames
2. **Check alignment** and spacing consistency
3. **Verify colors** match CSS custom properties exactly
4. **Test text legibility** at export size

### Step 2: Export Settings

**For PNG exports (Design System):**
```
Format: PNG
Scale: 2x (for retina displays)
Background: Include background (white)
Suffix: Leave empty (use exact names)
```

**Export these frames:**
- "Color Palette Export" → `palette.png`
- "Typography Export" → `typography.png`  
- "Grid System Export" → `grid-system.png`
- "Components Export" → `components.png`

**For PNG exports (Mockups):**
```
Format: PNG  
Scale: 1x (full size for review)
Background: Include background
```

**Export these frames:**
- "Home Mockup" → `home-mockup.png`
- "About Mockup" → `about-mockup.png`

**For PDF export (Portfolio):**
```
Format: PDF
Pages: All portfolio artboards  
Scale: 1x
Quality: High
```
- Select all portfolio artboards → `portfolio-mockup.pdf`

### Step 3: File Organization
Place exported files in `/design-system/exports/` folder:
```
exports/
├── palette.png
├── typography.png  
├── grid-system.png
├── components.png
└── mockups/
    ├── home-mockup.png
    ├── about-mockup.png
    └── portfolio-mockup.pdf
```

## ✅ Quality Checklist

Before finalizing exports:

**Design System Assets:**
- [ ] All hex codes visible and correct
- [ ] Typography examples show proper hierarchy  
- [ ] Grid system demonstrates responsive breakpoints
- [ ] Components show interactive states
- [ ] Colors match CSS custom properties exactly

**Page Mockups:**
- [ ] Navigation consistent across pages
- [ ] Proper use of design system components
- [ ] Content hierarchy clear and readable
- [ ] Interactive elements have proper states
- [ ] Mobile versions adapt appropriately

**Technical Requirements:**
- [ ] Files export at proper resolution
- [ ] Naming conventions followed exactly
- [ ] No design elements cut off at frame edges
- [ ] Text remains legible at export size
- [ ] Colors appear correctly in exports

## 🔗 Next Steps

1. **Create Figma file** following this guide
2. **Export all required assets** using exact naming
3. **Place files in project folder** at `/design-system/exports/`
4. **Update project documentation** with links to exports
5. **Share with development team** for implementation reference

This comprehensive Figma file will serve as the single source of truth for the Emanuel Portfolio design system and provide all necessary assets for development and stakeholder reviews.