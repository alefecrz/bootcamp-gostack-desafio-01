const Project = require('./models/Project');

module.exports = {
  async existProject(req, res, next) {
    const { id } = req.params;
    let project = await Project.findOne({ id });
    
    if(!project)
      return res.status(400).json({ error: 'Project does not exits.'});

    req.project = project;
    next();
  }
}