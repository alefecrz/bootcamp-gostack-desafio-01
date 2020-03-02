const Project = require('../models/Project');

module.exports = {
  async index(req,res){
    const projects = await Project.find({});

    return res.json(projects);
  },
  async show(req,res){
    let project = req.project;
    return res.json(project);
  },
  async store(req,res){
    const { id, title, tasks } = req.body;

    let project = await Project.findOne({ title });

    if(project)
      return res.status(400).json({ error: 'Project already exits.'});

    if(!project)
      project = await Project.create({
        id,
        title,
        tasks,
      });

    return res.json(project);
  },
  async update(req,res){
    const { id } = req.params;
    const { title } = req.body;

    await Project.updateOne({ id },{
      title,
    });

    return res.json({ success: 'Project updated.'});
  },
  async destroy(req,res){
    const { id } = req.params;

    await Project.deleteOne({ id });

    return res.json({ success: 'Project removed.'});
  },
  async storeTasks(req, res){
    const { id } = req.params;
    const { tasks } = req.body;
    let project = req.project;

    await Project.updateOne({ id },{
      $push: { tasks },
    });

    return res.json({ success: 'Task added.'});
  }
}