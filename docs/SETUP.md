# ⚙️ Portfolio Project Setup Guide

This guide provides **scripts for Windows (PowerShell)** and **Linux/macOS (Bash)** to scaffold the portfolio project structure with all required folders and placeholder files.

---

## 🪟 Windows (PowerShell)

Open **PowerShell** and run:

```powershell
# Step 1: Create the script file
New-Item -ItemType File -Name "setup-portfolio.ps1"
notepad setup-portfolio.ps1
```

Paste the following content into `setup-portfolio.ps1`:

```powershell
# Portfolio Setup Script
Write-Host "Setting up portfolio structure..." -ForegroundColor Green

# Create directories
Write-Host "Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "design\wireframes"
New-Item -ItemType Directory -Force -Path "design\mockups"
New-Item -ItemType Directory -Force -Path "design\sitemap"
New-Item -ItemType Directory -Force -Path "design\style-guide"
New-Item -ItemType Directory -Force -Path "assets\images"
New-Item -ItemType Directory -Force -Path "assets\fonts"
New-Item -ItemType Directory -Force -Path "assets\icons"
New-Item -ItemType Directory -Force -Path "css"
New-Item -ItemType Directory -Force -Path "js"
New-Item -ItemType Directory -Force -Path "docs"

# Create HTML files
Write-Host "Creating HTML files..." -ForegroundColor Yellow
New-Item -ItemType File -Force -Path "index.html"
New-Item -ItemType File -Force -Path "about.html"
New-Item -ItemType File -Force -Path "learning-journey.html"
New-Item -ItemType File -Force -Path "services.html"
New-Item -ItemType File -Force -Path "portfolio.html"
New-Item -ItemType File -Force -Path "faq.html"
New-Item -ItemType File -Force -Path "contact.html"
New-Item -ItemType File -Force -Path "404.html"

# Create CSS files
Write-Host "Creating CSS files..." -ForegroundColor Yellow
"/* Reset styles */" | Out-File "css\reset.css"
"/* Main styles */" | Out-File "css\main.css"

# Create JS files
Write-Host "Creating JavaScript files..." -ForegroundColor Yellow
"// Main interactivity scripts" | Out-File "js\main.js"
"// Contact form validation" | Out-File "js\form-validation.js"

# Create documentation files
Write-Host "Creating documentation..." -ForegroundColor Yellow
"# Design Process" | Out-File "design\README.md"
"# SDLC Documentation" | Out-File "docs\SDLC.md"
"# Deployment Guide" | Out-File "docs\DEPLOYMENT.md"
"# Traceability Matrix" | Out-File "docs\traceability-matrix.md"
"# Testing Documentation" | Out-File "docs\testing.md"
"# Documentation Folder" | Out-File "docs\README.md"

# Create other files
Write-Host "Creating config files..." -ForegroundColor Yellow
"# Portfolio Website" | Out-File "README.md"
"MIT License" | Out-File "LICENSE"
"[build]" | Out-File "netlify.toml"

Write-Host "Portfolio setup complete!" -ForegroundColor Green
Then run:

```powershell
.\setup-portfolio.ps1
```

---

## 🐧 Linux / macOS (Bash)

Open terminal and run:

```bash
# Step 1: Create the script
touch setup-portfolio.sh
nano setup-portfolio.sh
```

Paste this into `setup-portfolio.sh`:

```bash
#!/bin/bash

echo "Setting up portfolio structure..."

# Create directories
mkdir -p design/{wireframes,mockups,sitemap,style-guide}
mkdir -p assets/{images,fonts,icons}
mkdir -p css js docs

# Create HTML files with basic structure
cat <<EOL > index.html
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body><h1>Home Page</h1></body>
</html>
EOL

cat <<EOL > about.html
<!DOCTYPE html>
<html>
<head><title>About</title></head>
<body><h1>About Page</h1></body>
</html>
EOL

cat <<EOL > contact.html
<!DOCTYPE html>
<html>
<head><title>Contact</title></head>
<body><h1>Contact Page</h1></body>
</html>
EOL

cat <<EOL > 404.html
<!DOCTYPE html>
<html>
<head><title>404</title></head>
<body><h1>404 - Page Not Found</h1></body>
</html>
EOL

# Create CSS files
echo "/* Reset styles */" > css/reset.css
echo "/* Main styles */" > css/main.css

# Create JS files
echo "// Main interactivity scripts" > js/main.js
echo "// Contact form validation" > js/form-validation.js

# Create documentation files
echo "# Design Process" > design/README.md
echo "# SDLC Documentation" > docs/SDLC.md
echo "# Deployment Guide" > docs/DEPLOYMENT.md
echo "# Traceability Matrix" > docs/traceability-matrix.md
echo "# Testing Documentation" > docs/testing.md
echo "# Documentation Folder" > docs/README.md

# Create other files
echo "# Portfolio Website" > README.md
echo "MIT License" > LICENSE

echo "✅ Portfolio setup complete!"
```

Make executable and run:

```bash
chmod +x setup-portfolio.sh
./setup-portfolio.sh
```

---

✅ This will give you a **ready-to-use repo skeleton** with HTML pages already containing basic semantic markup.
