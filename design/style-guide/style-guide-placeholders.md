# 🎨 Figma Style Guide Placeholders

This file serves as a **checklist for exporting design tokens** (colors, typography, and reusable components) from Figma into this repo.

---

## 1. Color Palette (Swatches to Define in Figma)

Create a **Color Styles library** in Figma. Suggested starter set:

- **Primary**  
  - Blue 500 → `#2563EB` (buttons, highlights)  
  - Blue 700 → `#1E40AF` (hover states)  

- **Secondary**  
  - Purple 500 → `#9333EA` (links, accents)  
  - Purple 700 → `#6B21A8` (hover states)  

- **Backgrounds**  
  - Light → `#F9FAFB` (page background)  
  - Dark → `#111827` (dark mode background)  

- **Text**  
  - Heading → `#1F2937` (dark gray)  
  - Body → `#374151` (neutral gray)  
  - Muted → `#6B7280` (lighter gray)  

- **Feedback**  
  - Success → `#10B981` (green, form confirmations)  
  - Warning → `#F59E0B` (yellow, alerts)  
  - Error → `#EF4444` (red, error messages)  

👉 When exporting, save a preview as `palette.png` in this folder.

---

## 2. Typography (Text Styles to Define in Figma)

Define reusable **Text Styles** in Figma for headings, body, and captions.

| Style        | Font Family        | Weight   | Size (px) | Line Height | Example Usage          |
|--------------|--------------------|----------|-----------|-------------|------------------------|
| Heading 1    | Poppins            | Bold     | 36        | 44          | Hero title             |
| Heading 2    | Poppins            | SemiBold | 28        | 36          | Section headers        |
| Heading 3    | Poppins            | Medium   | 22        | 30          | Subheaders             |
| Body         | Roboto             | Regular  | 16        | 24          | Paragraphs             |
| Small Text   | Roboto             | Regular  | 14        | 20          | Secondary info, labels |
| Caption      | Roboto             | Italic   | 12        | 16          | Footnotes, tooltips    |

👉 Export a typography preview as `typography.png`.

---

## 3. Spacing & Grid System

Use an **8pt grid** in Figma for layout consistency.

- Small spacing → 8px  
- Medium spacing → 16px  
- Large spacing → 32px  
- Section padding → 64px  

👉 Export a sample spacing layout as `grid-system.png`.

---

## 4. Component Placeholders

In Figma, create reusable **components** for:

- Navbar (desktop & mobile)  
- Buttons (primary, secondary, disabled)  
- Forms (input fields, validation states)  
- Cards (project previews, services)  
- Modals (contact confirmation)  
- Accordions (FAQ expand/collapse)  
- Footer (links + social icons)  

👉 Export a preview as `components.png`.

---

## 5. Export Checklist

When ready, export the following into `/design/style-guide/`:

- ✅ `palette.png` → Color swatches  
- ✅ `typography.png` → Text styles  
- ✅ `grid-system.png` → Spacing/grid reference  
- ✅ `components.png` → UI components  

---

## 6. Traceability

- Requirements → `docs/SDLC.md`  
- Wireframes → `../wireframes/README.md`  
- Sitemap → `../sitemap/README.md`  
- Implementation → CSS (`reset.css`, `main.css`)  

---
