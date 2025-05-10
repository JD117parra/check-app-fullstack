import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from './TaskForm';

test('TaskForm llama addTask y resetea inputs', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);

  fireEvent.change(screen.getByPlaceholderText(/New task/i), {
    target: { value: 'Título' }
  });
  fireEvent.change(screen.getByPlaceholderText(/Details/i), {
    target: { value: 'Descripción' }
  });
  fireEvent.click(screen.getByText(/Add/i));

  expect(addTask).toHaveBeenCalledWith('Título','Descripción','medium','');
  expect(screen.getByPlaceholderText(/New task/i)).toHaveValue('');
  expect(screen.getByPlaceholderText(/Details/i)).toHaveValue('');
});
