import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene que la página se recargue

    const newTask = {
      title,
      description,
      completed: false, // Las nuevas tareas inician como no completadas
    };

    try {
      await axios.post('http://localhost:5000/tasks', newTask);
      // O usa la URL proxy si la configuraste en vite.config.js:
      // await axios.post('/api/tasks', newTask);
      
      // Limpia el formulario después de enviar los datos
      setTitle('');
      setDescription('');
      
      alert('Tarea agregada con éxito!');
      // Aquí podrías agregar lógica para actualizar la lista de tareas
    } catch (error) {
      console.error('Hubo un error al agregar la tarea:', error);
      alert('Hubo un error al agregar la tarea.');
    }
  };

  return (
    <div>
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;