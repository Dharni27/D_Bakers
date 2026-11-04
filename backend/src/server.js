import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/config.js';
import { db } from './db/store.js';

import productsRoutes from './routes/productsRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import quotesRoutes from './routes/quotesRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import eventsRoutes from './routes/eventsRoutes.js';
import dateClubRoutes from './routes/dateClubRoutes.js';
import { getCategories, getSampler } from './controllers/productsController.js';

const app = express();

// Security and utility middlewares
app.use(cors({
  origin: config.corsOrigin === '*' ? '*' : config.corsOrigin.split(','),
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root health & meta endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    name: config.bakeryName,
    message: "D' Bakers Artisanal Patisserie API is live and healthy",
    version: '1.0.0',
    documentation: {
      products: '/api/products',
      categories: '/api/categories',
      sampler: '/api/sampler',
      orders: '/api/orders',
      quotes: '/api/quotes',
      contact: '/api/contact',
      events: '/api/events',
      dateClub: '/api/date-club',
      info: '/api/info'
    }
  });
});

// Health check endpoint for monitoring / Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Bakery Information
app.get('/api/info', (req, res) => {
  try {
    const info = db.get('bakeryInfo');
    res.json({ success: true, data: info });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Aliases for quick access
app.get('/api/categories', getCategories);
app.get('/api/sampler', getSampler);

// API Route modules
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/date-club', dateClubRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start server on 0.0.0.0 so cloud hosts (Render, Railway, Fly.io) can bind properly
const PORT = config.port;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[D' Bakers Backend] Server listening on http://0.0.0.0:${PORT}`);
});

export default app;
