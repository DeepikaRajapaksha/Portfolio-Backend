const Project = require('../models/project');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new project
const addProject = async (req, res) => {
  const { title, description, category, image, link } = req.body;
  try {
    const newProject = new Project({ title, description, category, image, link });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

module.exports = { getProjects, addProject };
