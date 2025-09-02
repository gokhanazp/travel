# PibaWings Travel - Accessible Tourism Website

A modern, accessible tourism website built with React and Tailwind CSS, featuring full English translation and responsive design.

## 🌟 Features

- **Fully Accessible Design**: Built with accessibility-first principles
- **Bilingual Support**: English and Turkish language options
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Tour Management**: Comprehensive tour listings and booking system
- **Photo Gallery**: Interactive gallery with filtering options
- **Contact Forms**: Integrated contact and reservation forms

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Deployment**: Vercel

## 🔄 Version Control & Restore Points

### Current Stable Version: v1.0.0-english-complete

This version includes complete English translation and is ready for production.

### How to Restore to Stable Version

If you encounter any issues and want to return to the stable English version:

```bash
# Check current status
git status

# Stash any uncommitted changes (optional)
git stash

# Return to stable version
git checkout v1.0.0-english-complete

# Or reset to specific commit
git reset --hard eacb938

# If you want to create a new branch from stable version
git checkout -b new-feature-branch v1.0.0-english-complete
```

### Available Tags

- `v1.0.0-english-complete` - Complete English translation, stable version

### Commit History

- `eacb938` - Complete English translation with updated statistics and branding

## 📝 Development Notes

### Key Components

- `src/contexts/LanguageContext.jsx` - Language switching and translations
- `src/pages/HomePage.jsx` - Main landing page
- `src/components/Header.jsx` - Navigation header
- `src/components/Footer.jsx` - Site footer
- `src/components/PhotoGallery.jsx` - Interactive photo gallery

### Statistics Configuration

Current statistics in the website:
- **500+ Happy Travelers**
- **4.9 Average Rating**
- **25 Destinations**
- **1,200+ Happy Guests**
- **8 Years Experience**
- **98% Recommendation Rate**

### Environment Setup

Create a `.env` file based on `.env.example` for any environment-specific configurations.

## 🌐 Deployment

The site is configured for Vercel deployment with the included `vercel.json` configuration.

```bash
# Deploy to Vercel
vercel --prod
```

## 🆘 Troubleshooting

### If the site breaks or you need to restore:

1. **Quick restore to stable version:**
   ```bash
   git checkout v1.0.0-english-complete
   npm install
   npm run dev
   ```

2. **Check what changed:**
   ```bash
   git diff v1.0.0-english-complete
   ```

3. **Create a backup before making changes:**
   ```bash
   git checkout -b backup-$(date +%Y%m%d-%H%M%S)
   ```

### Common Issues

- **Node.js version**: Requires Node.js 20.19+ or 22.12+
- **Port conflicts**: Vite will automatically try different ports (5173, 5174, etc.)
- **Cache issues**: Clear browser cache with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

## 📞 Support

For any issues or questions, refer to the stable version tag `v1.0.0-english-complete` as your restore point.
