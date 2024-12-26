const express = require('express');
const { sendMessage } = require('../controllers/contactController');
const router = express.Router();

// Submit a message
router.post('/', sendMessage);

module.exports = router;
