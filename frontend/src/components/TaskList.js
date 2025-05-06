// src/components/TaskList.js
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './tasks.css';

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <TransitionGroup component="ul" className="task-list">
      {tasks.map(task => {
       
        const nodeRef = React.createRef();

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
              <span onClick={() => toggleTask(task._id)}>
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task._id)}
                className="task-delete"
              >
                🗑
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}