import React, { useState } from 'react';
import axios from 'axios';

const TaskUpdateForm = ({ task, onTaskUpdated, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      description,
    };

    try {
      await axios.put(`http://localhost:5000/tasks/${task.id}`, updatedTask);
      // O usa la URL proxy:
      // await axios.put(`/api/tasks/${task.id}`, updatedTask);
      
      onTaskUpdated(); // Llama a la función para actualizar la lista
      onCancel();      // Oculta el formulario de edición
    } catch (error) {
      console.error('Hubo un error al actualizar la tarea:', error);
      alert('Hubo un error al actualizar la tarea.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar Tarea</h3>
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
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default TaskUpdateForm;