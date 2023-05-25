import * as express from 'express';
import TasksController from '../controller/taskController';

const tasksRouter = express.Router();
const tasksController = new TasksController();

tasksRouter.get('/tasks', tasksController.getAllTask);
tasksRouter.post('/tasks', tasksController.createTask);
tasksRouter.patch('/tasks/:id', tasksController.updateTask);
tasksRouter.delete('/tasks/:id', tasksController.deleteTask);

export default tasksRouter;
