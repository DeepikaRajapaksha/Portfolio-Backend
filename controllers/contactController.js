const Contact = require('../models/contact');

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

module.exports = { sendMessage };
