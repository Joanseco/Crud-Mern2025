import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskDeleteButton from './TaskDeleteButton';
import TaskUpdateForm from './TaskUpdateForm'; // Importa el nuevo componente

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      // O usa la URL proxy:
      // const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Hubo un error al obtener las tareas:', error);
    }
  };

  const handleTaskDeleted = () => {
    fetchTasks(); // Vuelve a obtener las tareas después de la eliminación
  };

  const handleEditClick = (task) => {
    setEditingTask(task); // Establece la tarea que se está editando
  };

  const handleTaskUpdated = () => {
    setEditingTask(null); // Oculta el formulario al finalizar la edición
    fetchTasks();        // Vuelve a obtener las tareas
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTask && editingTask.id === task.id ? (
              <TaskUpdateForm
                task={task}
                onTaskUpdated={handleTaskUpdated}
                onCancel={() => setEditingTask(null)}
              />
            ) : (
              <>
                <strong>{task.title}</strong>: {task.description}
                <button onClick={() => handleEditClick(task)}>Editar</button>
                <TaskDeleteButton
                  taskId={task.id}
                  onTaskDeleted={handleTaskDeleted}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;