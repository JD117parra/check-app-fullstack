
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import TasksPage from './pages/TasksPage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';


const token = localStorage.getItem('token');
if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

function App() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const userId = 'testUser';

  // Load tasks when component mounts
  useEffect(() => {
    axios
      .get('/api/tasks')
      .then(res => setTasks(res.data))
      .catch(console.error);
  }, []);

  // Add a new task
  const addTask = title => {
       axios
         .post('/api/tasks', { title })
         .then(res => {
           setTasks(prev => [...prev, res.data]);
           toast.success('Task added!');
         })
         .catch(err => {
           console.error(err);
           toast.error('Error adding task');
         });
     };

  // Toggle completed state
  const toggleTask = id => {
       const task = tasks.find(t => t._id === id);
       axios
         .put(`/api/tasks/${id}`, { completed: !task.completed })
         .then(res => {
           setTasks(prev => prev.map(t => (t._id === id ? res.data : t)));
        
           toast.info(
             res.data.completed
               ? 'Task marked as completed!'
               : 'Task marked as uncompleted!'
           );
         })
         .catch(err => {
           console.error(err);
           toast.error('Error updating task');
         });
     };

  // Delete a task
  const deleteTask = id => {
       axios
         .delete(`/api/tasks/${id}`)
         .then(() => {
           setTasks(prev => prev.filter(t => t._id !== id));
          
           toast.warn('Task deleted');
         })
         .catch(err => {
           console.error(err);
           toast.error('Error deleting task');
         });
     };

     return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
        path="/tasks"
        element={
          localStorage.getItem('token')
            ? (
                <TasksPage
                  tasks={tasks}
                  addTask={addTask}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              )
            : <Navigate to="/login" replace />
        }
      />
        <Route path="/" element={<Navigate to="/tasks" replace />} />
      </Routes>
    );
  } 
  
  export default App;