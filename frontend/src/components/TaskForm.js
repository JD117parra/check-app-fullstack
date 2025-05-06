import React, { useState } from 'react';
import './tasks.css';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
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
      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  );
}