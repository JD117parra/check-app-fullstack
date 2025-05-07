import React, { useState } from 'react';
import './tasks.css';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim(), description.trim());         
    setTitle('');
    setDescription('');                                
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        className="task-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task..."
      />

      <textarea
        className="task-input"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Detalles"
      />

      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  );
}