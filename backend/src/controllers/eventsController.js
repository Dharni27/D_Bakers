import { db } from '../db/store.js';

export const getEvents = (req, res) => {
  try {
    const events = db.get('campusEvents') || [];
    res.json({ success: true, count: events.length, data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const subscribeAlert = (req, res) => {
  try {
    const { campus, phone } = req.body;
    if (!campus || !phone) {
      return res.status(400).json({ success: false, message: 'Campus and phone number are required' });
    }

    const alert = db.insert('campusAlerts', {
      campus,
      phone
    });

    res.status(201).json({
      success: true,
      message: 'Subscribed to 24-hour advance campus alert!',
      data: alert
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAlertSubscribers = (req, res) => {
  try {
    const alerts = db.get('campusAlerts') || [];
    res.json({ success: true, count: alerts.length, data: alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
