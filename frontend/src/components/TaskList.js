import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './tasks.css';

function parseLocalDate(dateString) {
  const [ymd] = dateString.split('T');
  const [year, month, day] = ymd.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export default function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
 
  const [editingId, setEditingId] = useState(null);
  const [draftTitle, setDraftTitle] = useState('');
  const [titleExpandedIds, setTitleExpandedIds] = useState(new Set());
  const [draftDescription, setDraftDescription] = useState('');
  const [draftPriority,   setDraftPriority]   = useState('medium');
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleTitle = id => {
    setTitleExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleExpand = id => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const startEdit = task => {
       setEditingId(task._id);
       setDraftTitle(task.title);
       setDraftDescription(task.description || '');
       setDraftPriority(task.priority); 
     };

     const saveEdit = id => {
         const title = draftTitle.trim();
         const description = draftDescription.trim(); 
         const priority = draftPriority; 
         if (title) {
           updateTask(id, { title, description, priority });
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
        const due = task.dueDate ? parseLocalDate(task.dueDate) : null;
        const now = new Date();
        const isOverdue = due && due < now;
        const isSoon    = due && (due - now) < 3 * 24 * 60 * 60 * 1000;
        const isEditing = editingId === task._id;
        const expanded = expandedIds.has(task._id);
        const titleExpanded = titleExpandedIds.has(task._id);

        return (
          <CSSTransition key={task._id} nodeRef={nodeRef} timeout={300} classNames="task">
      
            <li ref={nodeRef} className={`task-item ${task.completed ? 'completed' : ''}`}> {isEditing ? (
                <>
                  <input type="checkbox"  checked={task.completed} onChange={() => toggleTask(task._id, !task.completed)} className="task-checkbox"/>

                  <input className="task-input" value={draftTitle} onChange={e => setDraftTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && saveEdit(task._id)} 
                  placeholder="Título"/>               
          
                  <textarea className="task-input" value={draftDescription} onChange={e => setDraftDescription(e.target.value)} placeholder="Descripción"/>

                  <select className="task-input" value={draftPriority} onChange={e => setDraftPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <button onClick={() => saveEdit(task._id)}>💾</button>
                  <button onClick={cancelEdit}>❌</button>
                </>
              ) : (
                <>
                  <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task._id, !task.completed)} className="task-checkbox" />


                  <div className="task-header"> 
                    <span className={`task-title ${titleExpanded ? '' : 'truncated'}`} onClick={() => toggleTitle(task._id)}> {task.title} </span>
                  </div>

                  <span className={`priority-badge ${task.priority}`}> {task.priority[0].toUpperCase() + task.priority.slice(1)} </span>
                  
                  <p className={`task-desc ${expanded ? '' : 'truncated'}`} onClick={() => toggleExpand(task._id)} > {task.description} </p>
                  
                  {task.dueDate && (
                    <p className={`task-dueDate ` + (isOverdue ? 'overdue' : isSoon ? 'soon' : '') }>
                      Vence: {due.toLocaleDateString()}
                    </p>
                  )}

                  <div className="task-actions">
                    <button onClick={() => startEdit(task)}>✏️</button>
                    <button onClick={() => deleteTask(task._id)} className="task-delete" > 🗑️ </button>
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
