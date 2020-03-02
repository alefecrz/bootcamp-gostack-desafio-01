const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  tasks: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);