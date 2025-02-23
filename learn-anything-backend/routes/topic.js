const express = require('express');
const Topic = require('../models/Topic');
const router = express.Router();

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find().populate('resources');
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new topic
router.post('/', async (req, res) => {
  const { name, description, parentTopic } = req.body;
  const topic = new Topic({ name, description, parentTopic });
  try {
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;