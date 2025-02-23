const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  parentTopic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
});

module.exports = mongoose.model('Topic', TopicSchema);