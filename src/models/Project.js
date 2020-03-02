const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  tasks: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);