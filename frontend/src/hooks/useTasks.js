import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify'
import client from '../api/client';


export default function useTasks() {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await client.get('/tasks');
      console.log('🔍 fetched tasks:', data);
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    if (!token) {
      setTasks([]);
      return;
    }
    fetchTasks();
  }, [token]);

  const addTask = async (title, description, priority = 'medium', dueDate) => {
    try {
      const { data } = await client.post('/tasks', { title, description, priority, dueDate });
      setTasks(prev => [data, ...prev]);  
      toast.success('✅ Tarea creada');  
    } catch (err) {
      console.error('Error creating task:', err);
      toast.error('❌ No se pudo crear la tarea');
    }
  };
  
  const toggleTask = async (id, completed) => {
    try {
      const tareaActual = tasks.find(t => t._id === id);
      const payload = {
        title:       tareaActual.title,
        description: tareaActual.description,
        priority:    tareaActual.priority,
        dueDate:     tareaActual.dueDate,
        completed    
      };
      const { data } = await client.put(`/tasks/${id}`, payload);
      setTasks(prev => prev.map(t => (t._id === id ? data : t)));
      toast.info(
        data.completed
          ? '✔️ Tarea marcada como completada'
          : '🔄 Tarea marcada como pendiente'
      );
    } catch (err) {
      console.error('Error en toggleTask:', err.response?.data || err);
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