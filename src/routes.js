const express = require('express');
const routes = express.Router();

const Middleware = require('./middlewares');

const ProjectController = require('./controllers/ProjectController');

routes.get('/', (req, res)=>{
  return res.sendFile(__dirname + '/public/views/index.html');
});

routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', Middleware.existProject, ProjectController.show);
routes.put('/projects/:id', Middleware.existProject, ProjectController.update);
routes.post('/projects', ProjectController.store);
routes.delete('/projects/:id', Middleware.existProject, ProjectController.destroy);
routes.post('/projects/:id/tasks', Middleware.existProject, ProjectController.storeTasks);
module.exports = routes;
  
