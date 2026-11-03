import { db } from '../db/store.js';

export const registerDateClub = (req, res) => {
  try {
    const { name, phone, celebrationType, recipientName, date, favFlavor } = req.body;

    if (!name || !phone || !date) {
      return res.status(400).json({ success: false, message: 'Name, phone, and date are required' });
    }

    const member = db.insert('dateClub', {
      name,
      phone,
      celebrationType: celebrationType || 'Birthday',
      recipientName: recipientName || name,
      date,
      favFlavor: favFlavor || 'Belgian Chocolate Truffle'
    });

    res.status(201).json({
      success: true,
      message: 'Successfully registered in The Date Club!',
      data: member
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getDateClubMembers = (req, res) => {
  try {
    const members = db.get('dateClub') || [];
    res.json({ success: true, count: members.length, data: members });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUpcomingCelebrations = (req, res) => {
  try {
    const members = db.get('dateClub') || [];
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    // Check celebration dates within next 30 days
    const upcoming = members.filter(m => {
      if (!m.date) return false;
      const target = new Date(m.date);
      const targetMonth = target.getMonth() + 1;
      const targetDay = target.getDate();

      // Check if within current month or next month
      return (
        targetMonth === currentMonth ||
        targetMonth === (currentMonth % 12) + 1
      );
    });

    res.json({
      success: true,
      count: upcoming.length,
      data: upcoming
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
