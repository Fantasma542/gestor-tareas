import { Router } from 'express';
import * as TaskController from '../controllers/taskController.js';

const router = Router();

router.get('/tasks', TaskController.getTasks);
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:id', TaskController.updateTaskController);
router.delete('/tasks/:id', TaskController.deleteTaskController);
router.get('/tasks/filter/:completed', TaskController.getFilteredTasks);
router.get('/tasks/search', TaskController.searchTasks);



export default router;
