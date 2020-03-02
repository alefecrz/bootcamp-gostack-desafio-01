const Project = require('../models/Project');
module.exports = {
  async index(req,res){
    const projects = await Project.find({});
    return res.json(projects);
  },
  show(req,res){
    return res.json({ message: 'Hello World'})
  },
  async store(req,res){
    const { title, task } = req.body;

    let project = await User.findOne({ title });

    if(project)
      return res.status(400).json({ error: 'Project already exits.'});

    if(!project)
      project = await User.create({
        title,
        tasks,
      });

    return res.json(project);
  },
  update(req,res){
    return res.json({ message: 'Hello World'})
  },
  destroy(req,res){
    return res.json({ message: 'Hello World'})
  },
}