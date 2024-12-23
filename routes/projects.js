const express = require('express');
const Project = require('../models/project');
const router = express.Router();

// Fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
