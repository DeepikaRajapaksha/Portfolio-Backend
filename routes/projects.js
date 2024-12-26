const express = require('express');
const { getProjects, addProject } = require('../controllers/projectController');
const router = express.Router();

// Get all projects
router.get('/', getProjects);

// Add a new project
router.post('/', addProject);

module.exports = router;
