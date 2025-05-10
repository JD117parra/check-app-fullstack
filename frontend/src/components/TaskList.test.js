import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

const sample = {
  _id: '1',
  title: 'Tarea',
  description: 'Desc',
  priority: 'low',
  dueDate: '2025-05-22T00:00:00.000Z',
  completed: false
};

test('TaskList renderiza y toggleTask al click', () => {
  const toggle = jest.fn();
  render(<TaskList 
    tasks={[sample]} 
    toggleTask={toggle} 
    deleteTask={()=>{}} 
    updateTask={()=>{}} 
  />);
  expect(screen.getByText(/Tarea/i)).toBeInTheDocument();
  const cb = screen.getByRole('checkbox');
  fireEvent.click(cb);
  expect(toggle).toHaveBeenCalledWith('1', true);
});
