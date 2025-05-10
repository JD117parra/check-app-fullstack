import React, { useState } from 'react';
import './tasks.css';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(
      title.trim(),
      description.trim(),
      priority,
      dueDate              
    );
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');       
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
        placeholder="Details..."
      />

      <select
        className="task-input"
        value={priority}
        onChange={e => setPriority(e.target.value)}>
        <option value="low">low priority</option>
        <option value="medium">medium priority</option>
        <option value="high">high priority</option>
      </select>

      <input
     type="date"
     className="task-input"
     value={dueDate}
     onChange={e => setDueDate(e.target.value)}
     />

      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  );
}