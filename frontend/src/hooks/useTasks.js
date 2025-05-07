import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify'
import client from '../api/client';

/**
 * Hook para gestionar tareas y reaccionar al cambio de usuario (token)
 */
export default function useTasks() {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // Función que trae las tareas del backend
  const fetchTasks = async () => {
    try {
      const { data } = await client.get('/tasks');
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  // Cada vez que cambie el token (login/logout), recarga o limpia
  useEffect(() => {
    if (!token) {
      // Si no hay token, limpiamos las tareas
      setTasks([]);
      return;
    }
    // Si hay token, traemos las tareas del usuario actual
    fetchTasks();
  }, [token]);

  const addTask = async (title, description) => {
    try {
      const { data } = await client.post('/tasks', { title, description });
      setTasks(prev => [data, ...prev]);
      toast.success('✅ Tarea creada');
    } catch (err) {
      console.error('Error creating task:', err);
      toast.error('❌ No se pudo crear la tarea');
    }
  };
  
  const toggleTask = async (id, completed) => {
    try {
      const { data } = await client.put(`/tasks/${id}`, { completed });
      setTasks(prev => prev.map(t => (t._id === id ? data : t)));
      toast.info(
        data.completed
          ? '✔️ Tarea marcada como completada'
          : '🔄 Tarea marcada como pendiente'
      );
    } catch (err) {
      console.error(err);
      toast.error('❌ Error al actualizar tarea');
    }
  };
  
  const deleteTask = async id => {
    try {
      await client.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
      toast.warn('🗑️ Tarea eliminada');
    } catch (err) {
      console.error(err);
      toast.error('❌ Error al eliminar tarea');
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const { data } = await client.put(`/tasks/${id}`, updates);
      setTasks(prev => prev.map(t => (t._id === id ? data : t)));
      toast.info('✏️ Tarea actualizada');
    } catch (err) {
      console.error('Error updating task:', err);
      toast.error('❌ Error al editar tarea');
    }
  };

  return { tasks, addTask, toggleTask, deleteTask, updateTask };
}