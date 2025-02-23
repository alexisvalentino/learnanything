const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: String,
  rating: { type: Number, default: 0 },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
});

module.exports = mongoose.model('Resource', ResourceSchema);