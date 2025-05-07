// src/components/TaskList.js
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './tasks.css';

export default function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
 
  const [editingId, setEditingId] = useState(null);
  const [draftTitle, setDraftTitle]       = useState('');
  const [draftDescription, setDraftDescription] = useState('');

  const startEdit = task => {
       setEditingId(task._id);
       setDraftTitle(task.title);
       setDraftDescription(task.description || '');
     };

     const saveEdit = id => {
         const title = draftTitle.trim();
         const description = draftDescription.trim();
         if (title) {
           updateTask(id, { title, description });
         }
         setEditingId(null);
       };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <TransitionGroup component="ul" className="task-list">
      {tasks.map(task => {
        const nodeRef = React.createRef();
        const isEditing = editingId === task._id;

        return (
          <CSSTransition
            key={task._id}
            nodeRef={nodeRef}
            timeout={300}
            classNames="task"
          >
            <li
              ref={nodeRef}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              {isEditing ? (
                <>
                  <input
                    className="task-input"
                    value={draftTitle}
                    onChange={e => setDraftTitle(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveEdit(task._id)}
                    placeholder="Título"
                  />               
                  {/* Textarea para descripción */}
                  <textarea
                    className="task-input"
                    value={draftDescription}
                    onChange={e => setDraftDescription(e.target.value)}
                    placeholder="Descripción"
                  />
                  <button onClick={() => saveEdit(task._id)}>💾</button>
                  <button onClick={cancelEdit}>❌</button>
                </>
              ) : (
                <>
                  <span onClick={() => toggleTask(task._id)}>
                    {task.title}
                  </span>
                  <p className="task-desc">{task.description}</p>

                  <div>
                    <button onClick={() => startEdit(task)}>✏️</button>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="task-delete"
                    >
                      🗑️
                    </button>
                  </div>
                </>
              )}
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
