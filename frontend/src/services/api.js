// API Client for D' Bakers backend services
// Works seamlessly both locally and deployed on Vercel + Render

const RAW_URL = import.meta.env.VITE_API_URL || 'https://d-bakers.onrender.com';
// Normalize URL to safely remove any trailing slash
export const API_BASE_URL = RAW_URL.replace(/\/+$/, '');

export const api = {
  // Fetch product catalog
  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE_URL}/api/products${query ? `?${query}` : ''}`);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getProducts fallback:', err);
      return null;
    }
  },

  // Fetch product categories
  async getCategories() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/categories`);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getCategories fallback:', err);
      return null;
    }
  },

  // Submit Quick Order
  async createOrder(orderData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      return await res.json();
    } catch (err) {
      console.warn('API createOrder error:', err);
      return null;
    }
  },

  // Submit Custom Cake Quote Inquiry
  async createQuote(quoteData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData)
      });
      return await res.json();
    } catch (err) {
      console.warn('API createQuote error:', err);
      return null;
    }
  },

  // Submit Contact Inquiry
  async submitContact(contactData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      return await res.json();
    } catch (err) {
      console.warn('API submitContact error:', err);
      return null;
    }
  },

  // Register for Date Club
  async registerDateClub(clubData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/date-club`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clubData)
      });
      return await res.json();
    } catch (err) {
      console.warn('API registerDateClub error:', err);
      return null;
    }
  },

  // Subscribe to University Pop-up Alerts
  async subscribeAlert(alertData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/events/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alertData)
      });
      return await res.json();
    } catch (err) {
      console.warn('API subscribeAlert error:', err);
      return null;
    }
  }
};
