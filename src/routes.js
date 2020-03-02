const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');

routes.get('/', (req, res)=>{
  return res.sendFile(__dirname + '/public/views/index.html');
});

routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', ProjectController.show);
routes.put('/projects/:id', ProjectController.update);
routes.post('/projects', ProjectController.store);
routes.delete('/projects/:id', ProjectController.destroy);

module.exports = routes;
  
