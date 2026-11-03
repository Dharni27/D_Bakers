# D' Bakers — Artisanal Patisserie Frontend

A high-fidelity React application transformed from Google Stitch designs, adhering to the **Warm Artisanal Patisserie** design system (`DESIGN.md`).

## 🍰 Architecture Overview

The frontend is structured in modern, modular React (Vite + Tailwind CSS):

```
frontend/
├── public/
│   └── assets/                     # High-res local assets and concept screens
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Responsive header with branding, desktop tabs, quick quote CTA
│   │   ├── BottomNav.jsx           # Fixed bottom navigation matching Google Stitch mobile UI
│   │   ├── Footer.jsx              # Tactile brand footer with studio hours and links
│   │   └── QuickOrderModal.jsx     # Interactive custom quote modal with WhatsApp generator
│   ├── data/
│   │   └── bakeryData.js           # Central data repository (products, categories, reviews, events, FAQs)
│   ├── pages/
│   │   ├── HomePage.jsx            # Hero, Morning oven ticker, Philosophy, Snap carousel, Quick customizer, Reviews
│   │   ├── ProductsPage.jsx        # Bakes catalog with real-time category filtering & Sampler Platter accordion
│   │   ├── CustomCakesPage.jsx     # Interactive 4-step Bespoke Cake Builder with dynamic pricing
│   │   ├── DateClubPage.jsx        # The Date Club VIP registration & anniversary reminder system
│   │   ├── UniversityStallsPage.jsx# Campus pop-up schedule, student WhatsApp early bird alert, FAQs
│   │   └── ContactPage.jsx         # Kitchen studio location, baking hours, directions, & inquiry form
│   ├── App.jsx                     # Top-level routing, modal state, and page layout
│   ├── index.css                   # Custom font declarations, safe area padding, and animations
│   └── main.jsx                    # React 18 / 19 DOM entry point
├── tailwind.config.js              # Full design system tokens (Colors, Typography, Border radiuses, Shadows)
└── vite.config.js                  # Vite configuration (port 5173, host 127.0.0.1)
```

## 🚀 Running Locally

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser:
   ```
   http://127.0.0.1:5173/
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Design Tokens & Aesthetics
- **Palette**: Rich Dark Cocoa (`#250f03`), Strawberry Rose (`#9e3b60` / `#fc86ac`), Warm Vanilla Cream (`#fbf9f5`), Toasted Butter Amber (`#d97706`).
- **Typography**: Editorial Serif (`Playfair Display`) paired with crisp Modern Sans (`Plus Jakarta Sans`).
- **Micro-interactions**: Interactive weight & eggless selectors, category filter tabs, expandable accordions, and WhatsApp quote generators.
- **Full-Stack Ready**: All static data is isolated in `src/data/bakeryData.js`, ready to be replaced with REST/GraphQL API endpoints.
