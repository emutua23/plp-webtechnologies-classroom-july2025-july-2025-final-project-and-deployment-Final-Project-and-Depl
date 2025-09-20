# 🎨 Style Guide (Figma)

This folder documents the **design system** for the portfolio project.  
It defines **colors, typography, and reusable UI components** used across the website.  
Created in **Figma** to ensure consistency and scalability.

---

## 1. Color Palette

Define primary, secondary, and neutral colors for branding and accessibility.

| Purpose          | Hex Code   | Usage Example                |
|------------------|-----------|------------------------------|
| Primary          | `#2563EB` | Buttons, highlights           |
| Secondary        | `#9333EA` | Links, accents                |
| Background (light)| `#F9FAFB` | Page background               |
| Background (dark)| `#111827` | Dark mode background          |
| Text (primary)   | `#1F2937` | Main headings and body text   |
| Text (secondary) | `#6B7280` | Subheadings, muted text       |
| Accent / Warning | `#F59E0B` | Alerts, hover states          |
| Success / CTA    | `#10B981` | Form success, highlights      |

👉 Export a **Figma color palette board** to `palette.png`.

---

## 2. Typography

Use a consistent typographic system across all pages.

| Style        | Font Family        | Example Usage          |
|--------------|--------------------|------------------------|
| Heading 1    | `Poppins Bold`     | Page titles, hero text |
| Heading 2    | `Poppins SemiBold` | Section headers        |
| Body Text    | `Roboto Regular`   | Paragraphs, descriptions|
| Caption/Note | `Roboto Italic`    | Footer notes, tooltips |

👉 Export font examples from Figma as `typography.png`.

---

## 3. Grid & Spacing System

Adopt a **4pt / 8pt grid system** for spacing and alignment:
- Small spacing: 4px (buttons, cards)  
- Medium spacing: 8px / 16px (section padding)  
- Large spacing: 32px+ (hero section, layouts)  

👉 Include a sample spacing diagram in `grid-system.png`.

---

## 4. Reusable UI Components

Define and document reusable design components in Figma:

- **Navbar** (logo + links + mobile menu)  
- **Buttons** (primary, secondary, disabled)  
- **Forms** (input fields, textareas, validation states)  
- **Cards** (portfolio projects, services)  
- **Modals** (popups for info or contact confirmation)  
- **Accordions** (FAQ section expand/collapse)  
- **Footer** (links, social icons, copyright)  

👉 Export component set as `components.png`.

---

## 5. Export Instructions

When style assets are finalized in Figma:
- Export color palette → `palette.png`  
- Export typography → `typography.png`  
- Export grid system → `grid-system.png`  
- Export UI components → `components.png`  

Save all exports in this `/design/style-guide/` folder.

---

## 6. Traceability

- **Requirements** → `docs/SDLC.md`  
- **Wireframes** → `../wireframes/README.md`  
- **Mockups** → `../mockups/README.md`  
- **Code Implementation** → CSS (`main.css`, `reset.css`)  

---
