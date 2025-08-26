import React from 'react';
import axios from 'axios';

const TaskDeleteButton = ({ taskId, onTaskDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      // O usa la URL proxy:
      // await axios.delete(`/api/tasks/${taskId}`);
      
      alert('Tarea eliminada con éxito.');
      onTaskDeleted(); // Llama a esta función para actualizar la lista de tareas
    } catch (error) {
      console.error('Hubo un error al eliminar la tarea:', error);
      alert('Hubo un error al eliminar la tarea.');
    }
  };

  return (
    <button onClick={handleDelete}>Eliminar</button>
  );
};

export default TaskDeleteButton;