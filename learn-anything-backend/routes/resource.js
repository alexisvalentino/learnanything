const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

// Add a new resource
router.post('/', async (req, res) => {
  const { title, url, description, topic } = req.body;
  const resource = new Resource({ title, url, description, topic });
  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;