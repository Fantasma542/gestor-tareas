import { db } from '../config/db.js';

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

export const getTasks = async () => {
  const [rows] = await db.query('SELECT * FROM tasks');
  return rows;
};

export const createTask = async (task: Task) => {
  const [result] = await db.query(
    'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)',
    [task.title, task.description, task.completed]
  );
  return result;
};

export const updateTask = async (id: number, task: { title?: string; description?: string; completed?: boolean }) => {
  const fields = [];
  const values: any[] = [];

  if (task.title !== undefined) {
    fields.push('title = ?');
    values.push(task.title);
  }
  if (task.description !== undefined) {
    fields.push('description = ?');
    values.push(task.description);
  }
  if (task.completed !== undefined) {
    fields.push('completed = ?');
    values.push(task.completed);
  }

  values.push(id);

  const sql = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`;
  const [result] = await db.query(sql, values);
  return result;
};

export const deleteTask = async (id: number) => {
  const sql = 'DELETE FROM tasks WHERE id = ?';
  const [result] = await db.query(sql, [id]);
  return result;
};

export const getFilteredTasks = async (completed: boolean) => {
  const sql = 'SELECT * FROM tasks WHERE completed = ?';
  const [rows] = await db.query(sql, [completed ? 1 : 0]);
  return rows;
};


export const searchTasks = async (query: string) => {
  const sql = `SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?`;
  const searchTerm = `%${query}%`;
  const [rows] = await db.query(sql, [searchTerm, searchTerm]);
  return rows;
};


