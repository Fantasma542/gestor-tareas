import type { Request, Response } from 'express';
import * as TaskModel from '../models/taskModel.js';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas', error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = req.body;
    const result = await TaskModel.createTask(task);
    res.status(201).json({ message: 'Tarea creada', id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear tarea', error });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const idStr = req.params.id;
    if (!idStr) {
        return res.status(400).json({ message: 'ID de tarea no proporcionado' });
    }
    const id = parseInt(idStr);
    const taskData = req.body;
    await TaskModel.updateTask(id, taskData);
    res.json({ message: 'Tarea actualizada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tarea', error });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const idStr = req.params.id;
    if (!idStr) {
      return res.status(400).json({ message: 'ID de tarea no proporcionado' });
    }
    const id = parseInt(idStr);
    await TaskModel.deleteTask(id);
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tarea', error });
  }
};

export const getFilteredTasks = async (req: Request, res: Response) => {
  try {
    const completedStr = req.params.completed;
    if (completedStr !== '0' && completedStr !== '1') {
      return res.status(400).json({ message: 'El parámetro completed debe ser 0 o 1' });
    }
    const completed = completedStr === '1';
    const tasks = await TaskModel.getFilteredTasks(completed);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas filtradas', error });
  }
};

export const searchTasks = async (req: Request, res: Response) => {
  try {
    const { q } = req.query; // capturamos la query string ?q=algo
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Query no proporcionada o inválida' });
    }
    const tasks = await TaskModel.searchTasks(q);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar tareas', error });
  }
};


