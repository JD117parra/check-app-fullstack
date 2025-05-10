// src/pages/TasksPage.js
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { ToastContainer, toast } from 'react-toastify';

export default function TasksPage({ tasks, addTask, toggleTask, deleteTask, updateTask }) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const [remindedIds, setRemindedIds] = useState(new Set());

   useEffect(() => {
    if ('Notification' in window) { Notification.requestPermission(); }}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      tasks.forEach(task => {
        if (!task.dueDate) return;
        if (remindedIds.has(task._id)) return;

        const due = new Date(task.dueDate);
        if (due <= now) {
          // 1) Toast
          toast.info(`⌛ Tarea vencida: "${task.title}"`);

          if (Notification.permission === 'granted') {
            new Notification('Tarea vencida', { body: task.title });
          }

          setRemindedIds(prev => new Set(prev).add(task._id));
        }
      });
    }, 60_000);

    return () => clearInterval(interval);
  }, [tasks, remindedIds]);

  const handleLogout = () => {
    logout();               
    navigate('/login');
  };

  return (
    <div className="app-container">
      {user && (
       <p className="welcome">
       Hola, <strong>{user.username}</strong> 
       </p>
      )}
      <button
        onClick={handleLogout}
        className="logout-button"
      >
          Logout
      </button>

      <h1 className="app-title">My To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}