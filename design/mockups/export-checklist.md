# Design Export Checklist

Use this checklist to ensure all design assets are properly created and exported from Figma.

## 📋 Pre-Export Preparation

### Figma File Setup
- [ ] **File named**: "Emanuel Portfolio Design System"
- [ ] **Pages created**: Design System, Home Mockup, About Mockup, Portfolio Mockup, Mobile Versions
- [ ] **Frames properly named** with exact export filenames
- [ ] **Color styles created** for all palette colors
- [ ] **Text styles created** for typography scale
- [ ] **Components organized** and properly nested

### Design System Validation
- [ ] **Colors match CSS**: All hex codes exactly match `/styles/globals.css` custom properties
- [ ] **Typography consistent**: Font sizes and weights match Tailwind classes
- [ ] **Spacing accurate**: All spacing follows 4px base unit system
- [ ] **Components complete**: All interactive states shown (normal, hover, focus, disabled)

## 🎨 Design System Assets

### 1. Color Palette Export (`palette.png`)

**Frame Requirements:**
- [ ] **Size**: 1200x800px
- [ ] **Background**: White (#ffffff)
- [ ] **Title**: "EMANUEL PORTFOLIO COLOR SYSTEM"

**Content Checklist:**
- [ ] **Primary Colors** section with 3 swatches:
  - [ ] Primary: #2563EB with label
  - [ ] Primary Hover: #1E40AF with label
  - [ ] Primary Foreground: #FFFFFF with label

- [ ] **Secondary Colors** section with 3 swatches:
  - [ ] Secondary: #9333EA with label
  - [ ] Secondary Hover: #6B21A8 with label
  - [ ] Secondary Foreground: #FFFFFF with label

- [ ] **Neutral Colors** section with 4 swatches:
  - [ ] Background: #FFFFFF with label
  - [ ] Foreground: #1F2937 with label
  - [ ] Muted Foreground: #6B7280 with label
  - [ ] Border: #E5E7EB with label

- [ ] **Feedback Colors** section with 3 swatches:
  - [ ] Success: #10B981 with label
  - [ ] Warning: #F59E0B with label
  - [ ] Error: #EF4444 with label

- [ ] **Dark Mode Variants** section with 3 swatches:
  - [ ] Dark Background: #111827 with label
  - [ ] Dark Foreground: #F9FAFB with label
  - [ ] Dark Muted: #374151 with label

**Quality Checks:**
- [ ] All hex codes clearly visible and readable
- [ ] Color swatches properly sized (minimum 60x60px)
- [ ] Labels properly aligned and legible
- [ ] No colors cut off at frame edges

### 2. Typography Export (`typography.png`)

**Frame Requirements:**
- [ ] **Size**: 1200x1000px
- [ ] **Background**: White (#ffffff)
- [ ] **Title**: "EMANUEL PORTFOLIO TYPOGRAPHY"

**Content Checklist:**
- [ ] **Font Family** section:
  - [ ] Primary font stack listed
  - [ ] Monospace font stack listed

- [ ] **Type Scale** section with examples:
  - [ ] Display (60px, Bold): "Hero Headline Example"
  - [ ] H1 (36px, Bold): "Page Title Example"
  - [ ] H2 (30px, SemiBold): "Section Header Example"
  - [ ] H3 (24px, SemiBold): "Subsection Header Example"
  - [ ] H4 (20px, Medium): "Card Title Example"
  - [ ] Body Large (18px, Regular): "Lead paragraph example text"
  - [ ] Body (16px, Regular): "Standard body text example"
  - [ ] Small (14px, Regular): "Caption or label example"

- [ ] **Font Weights** section:
  - [ ] Regular (400) example
  - [ ] Medium (500) example
  - [ ] SemiBold (600) example
  - [ ] Bold (700) example

- [ ] **Usage Examples** section:
  - [ ] Page titles usage
  - [ ] Body text usage
  - [ ] Navigation usage
  - [ ] Button text usage

**Quality Checks:**
- [ ] All text sizes accurate and proportional
- [ ] Font weights visibly different
- [ ] Line heights appropriate for readability
- [ ] Usage examples clear and helpful

### 3. Grid System Export (`grid-system.png`)

**Frame Requirements:**
- [ ] **Size**: 1400x1000px
- [ ] **Background**: White (#ffffff)  
- [ ] **Title**: "EMANUEL PORTFOLIO GRID & SPACING"

**Content Checklist:**
- [ ] **12-Column Grid** demonstration:
  - [ ] Desktop version (1200px container)
  - [ ] Tablet version (768px container)
  - [ ] Mobile version (full width)
  - [ ] Grid lines and gutters visible
  - [ ] Container padding marked

- [ ] **Spacing Scale** visualization:
  - [ ] xs (4px): visual bar representation
  - [ ] sm (8px): visual bar representation
  - [ ] md (16px): visual bar representation
  - [ ] lg (24px): visual bar representation
  - [ ] xl (32px): visual bar representation
  - [ ] 2xl (48px): visual bar representation
  - [ ] 3xl (64px): visual bar representation

- [ ] **Breakpoints** information:
  - [ ] Mobile: < 640px specifications
  - [ ] Tablet: 640px - 1024px specifications
  - [ ] Desktop: > 1024px specifications
  - [ ] Container max-widths listed
  - [ ] Padding values for each breakpoint

**Quality Checks:**
- [ ] Grid proportions accurate
- [ ] Spacing bars properly scaled
- [ ] Measurements clearly labeled
- [ ] Responsive behavior illustrated

### 4. Components Export (`components.png`)

**Frame Requirements:**
- [ ] **Size**: 1600x1200px
- [ ] **Background**: White (#ffffff)
- [ ] **Title**: "EMANUEL PORTFOLIO COMPONENTS"

**Content Checklist:**
- [ ] **Buttons** section:
  - [ ] Primary button (normal state)
  - [ ] Primary button (hover state)
  - [ ] Primary button (disabled state)
  - [ ] Secondary button (normal state)
  - [ ] Secondary button (hover state)
  - [ ] Button sizes (small, default, large)

- [ ] **Cards** section:
  - [ ] Project card with image placeholder
  - [ ] Service card with icon
  - [ ] Testimonial card with quote
  - [ ] Basic content card

- [ ] **Navigation** section:
  - [ ] Main navigation bar
  - [ ] Navigation links (normal and active states)
  - [ ] Mobile hamburger menu
  - [ ] Breadcrumb navigation

- [ ] **Forms** section:
  - [ ] Input field (normal state)
  - [ ] Input field (focus state)
  - [ ] Input field (error state)
  - [ ] Textarea component
  - [ ] Checkbox/radio components
  - [ ] Form labels

- [ ] **Interactive States** examples:
  - [ ] Normal state
  - [ ] Hover state
  - [ ] Focus state (accessibility)
  - [ ] Active state
  - [ ] Disabled state

**Quality Checks:**
- [ ] All components use design system colors
- [ ] Interactive states clearly differentiated
- [ ] Components properly sized and proportioned
- [ ] Accessibility indicators (focus rings) included

## 📱 Page Mockups

### 5. Home Mockup (`home-mockup.png`)

**Frame Requirements:**
- [ ] **Size**: 1440x3000px (or taller as needed)
- [ ] **Content**: Complete homepage layout

**Content Checklist:**
- [ ] **Navigation Bar**:
  - [ ] Logo/brand mark "✦ Emanuel Portfolio"
  - [ ] Navigation links
  - [ ] CTA button

- [ ] **Hero Section**:
  - [ ] Large headline "Hello, I'm Emanuel"
  - [ ] Subtitle paragraph
  - [ ] Two CTA buttons (primary + secondary)
  - [ ] Proper typography hierarchy

- [ ] **Featured Projects**:
  - [ ] 3-column grid layout
  - [ ] Project cards with images
  - [ ] Project titles and descriptions
  - [ ] Technology tags

- [ ] **Services Overview**:
  - [ ] 3-column grid with icons
  - [ ] Service titles and descriptions
  - [ ] Consistent spacing

- [ ] **Call-to-Action Section**:
  - [ ] Compelling headline
  - [ ] Description text
  - [ ] Primary CTA button

- [ ] **Footer**:
  - [ ] Social media links
  - [ ] Quick links
  - [ ] Copyright information

**Quality Checks:**
- [ ] Design system components used consistently
- [ ] Typography hierarchy clear
- [ ] Proper spacing throughout
- [ ] Interactive elements clearly defined

### 6. About Mockup (`about-mockup.png`)

**Frame Requirements:**
- [ ] **Size**: 1440x2500px (or taller as needed)
- [ ] **Content**: Complete about page layout

**Content Checklist:**
- [ ] **Navigation Bar** (consistent with home)
- [ ] **Page Header**:
  - [ ] Large page title
  - [ ] Optional subtitle/description

- [ ] **Personal Story Section**:
  - [ ] Two-column layout (text + image/illustration)
  - [ ] Multiple paragraphs with proper typography
  - [ ] Image placeholder with proper aspect ratio

- [ ] **Skills Grid**:
  - [ ] 6 skills with percentage indicators
  - [ ] Consistent card design
  - [ ] Proper grid spacing

- [ ] **Experience Timeline**:
  - [ ] Vertical timeline design
  - [ ] Multiple entries with dates
  - [ ] Consistent styling

- [ ] **Education Section**:
  - [ ] Card-based layout
  - [ ] Institution information
  - [ ] Dates and degrees

- [ ] **Footer** (consistent with home)

**Quality Checks:**
- [ ] Content hierarchy clear
- [ ] Timeline visually appealing
- [ ] Skills grid properly aligned
- [ ] Consistent with design system

### 7. Portfolio Mockup (`portfolio-mockup.pdf`)

**Requirements:**
- [ ] **Format**: Multi-page PDF
- [ ] **Pages**: Multiple artboards showing different views

**Page 1: Portfolio Grid (1440x2000px)**
- [ ] **Header**: Page title and description
- [ ] **Filter Buttons**: Category filters (All, UI/UX, Web Dev, etc.)
- [ ] **Project Grid**: 3-column layout with project cards
- [ ] **Load More**: Section for additional projects

**Page 2: Project Detail View (1440x3000px)**
- [ ] **Project Hero**: Large project image
- [ ] **Project Info**: Title, description, technologies
- [ ] **Process Section**: Design/development process
- [ ] **Results Section**: Outcomes and achievements
- [ ] **Navigation**: Previous/next project links

**Page 3: Portfolio List View (1440x2500px)**
- [ ] **Alternative Layout**: List-based project display
- [ ] **Larger Previews**: More detailed project cards
- [ ] **Extended Descriptions**: Additional project information

**Quality Checks:**

- [ ] Multiple layout options shown
- [ ] Project information comprehensive
- [ ] Navigation between projects clear
- [ ] Consistent design language

## 📤 Export Settings & Process

### PNG Exports (Design System Assets)
- [ ] **Format**: PNG
- [ ] **Scale**: 2x (for retina displays)
- [ ] **Background**: Include (white)
- [ ] **Naming**: Exact filenames (no suffixes)

### PNG Exports (Page Mockups)  
- [ ] **Format**: PNG
- [ ] **Scale**: 1x (original size)
- [ ] **Background**: Include (white)
- [ ] **Quality**: High

### PDF Export (Portfolio Mockup)
- [ ] **Format**: PDF
- [ ] **Pages**: All portfolio artboards
- [ ] **Scale**: 1x
- [ ] **Quality**: High
- [ ] **Compression**: Medium (balance size/quality)

### File Naming Convention
- [ ] `palette.png` - Color palette export
- [ ] `typography.png` - Typography system export
- [ ] `grid-system.png` - Grid and spacing export
- [ ] `components.png` - UI components export
- [ ] `home-mockup.png` - Homepage design
- [ ] `about-mockup.png` - About page design
- [ ] `portfolio-mockup.pdf` - Portfolio section designs

## 📁 Final File Organization

### Export Location: `/design-system/exports/`
```
exports/
├── palette.png           ✓
├── typography.png        ✓
├── grid-system.png       ✓
├── components.png        ✓
└── mockups/
    ├── home-mockup.png        ✓
    ├── about-mockup.png       ✓
    └── portfolio-mockup.pdf   ✓
```

### File Size Guidelines
- [ ] **Design System PNGs**: Under 2MB each
- [ ] **Mockup PNGs**: Under 5MB each  
- [ ] **Portfolio PDF**: Under 10MB total

### Quality Assurance
- [ ] **Colors accurate**: Match CSS custom properties exactly
- [ ] **Text readable**: All text legible at export resolution
- [ ] **No cutoffs**: All content within frame boundaries
- [ ] **Proper compression**: Files optimized but high quality
- [ ] **Consistent naming**: Exact filenames as specified

## ✅ Post-Export Tasks

### Documentation Updates
- [ ] Update project README with asset links
- [ ] Reference exports in style guide documentation
- [ ] Share export folder location with team

### Version Control
- [ ] Add exported files to git repository
- [ ] Create commit with descriptive message
- [ ] Tag release version if applicable

### Distribution
- [ ] Share exports with development team
- [ ] Include in stakeholder presentation materials
- [ ] Archive original Figma file link in documentation

---

**Completion Status**: ___/100 items checked

Use this checklist to ensure comprehensive and professional design asset exports that will serve as the definitive visual reference for the Emanuel Portfolio project.