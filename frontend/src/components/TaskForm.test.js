import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('TaskForm calls addTask on submit with input value', () => {
  const mockAdd = jest.fn();
  render(<TaskForm addTask={mockAdd} />);

  // Encuentra el input y el botón
  const input = screen.getByPlaceholderText(/new task/i);
  const button = screen.getByRole('button', { name: /add/i });

  // Escribe en el input y envía
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

  // Comprueba que addTask se llamó con 'Test Task'
  expect(mockAdd).toHaveBeenCalledWith('Test Task');
  // Y que el input se ha vaciado
  expect(input).toHaveValue('');
});