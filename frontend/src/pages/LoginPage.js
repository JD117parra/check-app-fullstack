// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LoginPage.css'; 

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      toast.success('Logged in!');
      navigate('/tasks');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Log In</button>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            Don't have an account? <Link to="/register">Sign up</Link>
       </p>
      </form>
    </div>
  );
}