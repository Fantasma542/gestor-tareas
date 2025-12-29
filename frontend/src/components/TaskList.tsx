import { useEffect, useState } from 'react';
import { getTasks } from '../services/TasksService';

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error cargando tareas', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Cargando tareas...</p>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mis tareas</h2>

        {tasks.length === 0 ? (
          <p className="text-center">No hay tareas</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map(task => (
              <li
                key={task.id}
                className="p-4 border rounded flex justify-between items-center bg-white"
              >
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>

                <span
                  className={
                    task.completed
                      ? 'text-green-600 font-semibold'
                      : 'text-yellow-600 font-semibold'
                  }
                >
                  {task.completed ? 'Hecha' : 'Pendiente'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TaskList;
