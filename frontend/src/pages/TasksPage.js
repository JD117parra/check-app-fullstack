// src/pages/TasksPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { ToastContainer } from 'react-toastify';

export default function TasksPage({ tasks, addTask, toggleTask, deleteTask }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  return (
    <div className="app-container">
      <button
        onClick={handleLogout}
        style={{ position: 'absolute', top: 16, right: 16 }}
      >
        Logout
      </button>

      <h1 className="app-title">My To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        pauseOnHover={false}
      />
    </div>
  );
}