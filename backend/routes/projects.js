// backend/routes/projects.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Project = require('../models/project');
const auth = require('../middlewares/auth');


// multer setup
const storage = multer.diskStorage({
destination: function (req, file, cb) { cb(null, 'uploads/'); },
filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage });


// get all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create project (protected)
router.post('/', auth, upload.single('image'), async (req, res) => {
try {
const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl || '';
const tags = req.body.tags ? req.body.tags.split(',').map(t => t.trim()) : [];
const project = new Project({
title: req.body.title,
description: req.body.description,
imageUrl,
link: req.body.link,
tags
});
await project.save();
res.json(project);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// update and delete routes (similar, protected)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
try {
const update = { ...req.body };
if (req.file) update.imageUrl = `/uploads/${req.file.filename}`;
if (update.tags) update.tags = update.tags.split(',').map(t => t.trim());
const project = await Project.findByIdAndUpdate(req.params.id, update, { new: true });
res.json(project);
} catch (err) { res.status(500).json({ error: err.message }); }
});


router.delete('/:id', auth, async (req, res) => {
try {
await Project.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) { res.status(500).json({ error: err.message }); }
});


module.exports = router;