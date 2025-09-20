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