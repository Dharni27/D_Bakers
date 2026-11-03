# D' Bakers - Artisanal Bakery & Patisserie

Welcome to the official repository for **D' Bakers** — an artisanal patisserie and bakery located in Panipat, Haryana. This project features a full-stack web application designed to showcase handcrafted cakes, artisanal pastries, workshop experiences, college stall pop-ups, and custom celebration cake orders.

---

## 🎂 Features

- **Artisanal Product Catalog**: Showcase signature cakes, pastries, croissants, and dessert boxes.
- **Custom Cake Builder**: Interactive custom cake inquiry and ordering interface.
- **Date Club & Workshops**: Experiences, baking masterclasses, and community events.
- **University Stalls & Pop-ups**: Schedule and information for campus events.
- **Seamless Ordering & Contact**: WhatsApp and direct quick order integration.
- **Responsive Design**: Warm, artisanal aesthetic crafted for mobile and desktop screens.

---

## 📁 Project Structure

```text
├── backend/                  # Express REST API
│   ├── src/
│   │   ├── controllers/      # Route controllers (orders, events, contact, etc.)
│   │   ├── routes/           # API routes
│   │   └── server.js         # Server entry point
│   └── package.json
├── frontend/                 # React (Vite + Tailwind CSS) client
│   ├── src/
│   │   ├── components/       # UI Components (Header, Footer, Modals)
│   │   ├── pages/            # Page Views (Home, Products, Custom Cakes, etc.)
│   │   └── App.jsx
│   └── package.json
└── ...                       # Design assets and mockups
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Setup Backend

```bash
cd backend
npm install
npm run dev
```

The backend server runs on `http://localhost:5000` (or configured `PORT`).

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend application runs on `http://localhost:5173`.

---

## 📄 License

This project is licensed under the MIT License.
