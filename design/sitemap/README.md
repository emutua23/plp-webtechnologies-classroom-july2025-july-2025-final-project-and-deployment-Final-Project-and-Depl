# 🗺️ Sitemap (Whimsical)

This folder contains the **sitemap diagrams** created in [Whimsical](https://whimsical.com/) to define the **navigation structure** and **user journey** of the portfolio website.

---

## 1. Purpose of Sitemap
The sitemap provides a high-level **blueprint** of the website:
- Defines all core pages and their relationships  
- Shows how users navigate through the site  
- Includes fallback/error handling paths (like the 404 page)  

This ensures the development phase follows a consistent structure.

---

## 2. Sitemap Structure

Base navigation flow for the portfolio website:

Home (index.html)
├── About (about.html)
├── Learning Journey (index.html section)
├── Services (index.html section)
├── Portfolio (index.html section)
├── FAQ (index.html section)
└── Contact (contact.html)
└── 404 (404.html → fallback, links back to Contact)

---

## 3. Steps in Whimsical

1. Open Whimsical → **Flowchart template**.  
2. Create nodes (boxes) for each page: Home, About, Services, etc.  
3. Connect them with arrows to represent navigation paths:
   - Navbar links (Home ↔ About, Services, Portfolio, Contact)  
   - Footer links (secondary navigation)  
   - Error flow (404 → Contact page)  

---

## 4. Export Instructions

Export the sitemap diagrams as images and store them here:
- `sitemap-overview.png` → top-level flow  
- `sitemap-detailed.png` → optional, includes subsections (skills, services grid, FAQs, etc.)  

---

## 5. Traceability

- **Requirements** → `docs/SDLC.md`  
- **Wireframes** → `../wireframes/README.md`  
- **Mockups** → `../mockups/README.md`  
- **Implementation** → HTML files (`index.html`, `about.html`, `contact.html`, `404.html`)  

---