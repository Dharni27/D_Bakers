import { db } from '../db/store.js';

export const getProducts = (req, res) => {
  try {
    let products = db.get('products') || [];
    const { category, search, eggless } = req.query;

    if (category && category !== 'all') {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    if (eggless === 'true') {
      products = products.filter(p => p.isEggless === true);
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getProductById = (req, res) => {
  try {
    const product = db.findById('products', req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createProduct = (req, res) => {
  try {
    const { name, category, price, priceNote, description, isEggless, image, tags, badge } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ success: false, message: 'Name, price, and category are required' });
    }

    const newProduct = db.insert('products', {
      name,
      category,
      price: Number(price),
      priceNote: priceNote || 'Single',
      description: description || '',
      isEggless: isEggless !== false,
      image: image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
      tags: tags || [],
      badge: badge || null,
      available: true
    });

    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = (req, res) => {
  try {
    const updated = db.update('products', req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const deleted = db.delete('products', req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCategories = (req, res) => {
  try {
    const categories = db.get('categories') || [];
    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getSampler = (req, res) => {
  try {
    const sampler = db.get('sampler');
    res.json({ success: true, data: sampler });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
