import { db } from '../db/store.js';

export const createQuote = (req, res) => {
  try {
    const {
      customerName,
      phone,
      item,
      weight,
      flavor,
      style,
      isEggless,
      occasion,
      date,
      pipingMessage,
      estimatedPrice
    } = req.body;

    if (!weight || !flavor) {
      return res.status(400).json({ success: false, message: 'Weight and flavor are required' });
    }

    const newQuote = db.insert('quotes', {
      customerName: customerName || 'Patron',
      phone: phone || '',
      item: item || 'Custom Celebration Cake',
      weight,
      flavor,
      style: style || 'Vintage Lambeth Ruffles',
      isEggless: isEggless !== false,
      occasion: occasion || 'Birthday',
      date: date || '',
      pipingMessage: pipingMessage || '',
      estimatedPrice: Number(estimatedPrice) || 750,
      status: 'pending'
    });

    res.status(201).json({
      success: true,
      message: 'Custom cake quote created successfully',
      data: newQuote
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getQuotes = (req, res) => {
  try {
    const quotes = db.get('quotes') || [];
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateQuoteStatus = (req, res) => {
  try {
    const { status } = req.body;
    const updated = db.update('quotes', req.params.id, { status });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Quote not found' });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
