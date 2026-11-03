import { db } from '../db/store.js';

export const createOrder = (req, res) => {
  try {
    const { customerName, phone, items, totalAmount, deliveryType, address, notes } = req.body;

    const order = db.insert('orders', {
      customerName: customerName || 'Patron',
      phone: phone || '',
      items: items || [],
      totalAmount: Number(totalAmount) || 0,
      deliveryType: deliveryType || 'Doorstep Delivery',
      address: address || 'Model Town, Panipat',
      notes: notes || '',
      status: 'received'
    });

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOrders = (req, res) => {
  try {
    const orders = db.get('orders') || [];
    res.json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateOrderStatus = (req, res) => {
  try {
    const { status } = req.body;
    const updated = db.update('orders', req.params.id, { status });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
