// src/pages/TasksPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { ToastContainer } from 'react-toastify';

export default function TasksPage({ tasks, addTask, toggleTask, deleteTask, updateTask }) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

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