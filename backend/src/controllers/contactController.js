import { db } from '../db/store.js';

export const submitContact = (req, res) => {
  try {
    const { name, phone, occasion, date, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone are required' });
    }

    const entry = db.insert('contactMessages', {
      name,
      phone,
      occasion: occasion || 'General Inquiry',
      date: date || '',
      message: message || '',
      status: 'unread'
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry received. The baker will contact you shortly.',
      data: entry
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getContactMessages = (req, res) => {
  try {
    const messages = db.get('contactMessages') || [];
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
