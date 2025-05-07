import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('TaskForm calls addTask on submit with input value', () => {
  const mockAdd = jest.fn();
  render(<TaskForm addTask={mockAdd} />);

 
  const input = screen.getByPlaceholderText(/new task/i);
  const button = screen.getByRole('button', { name: /add/i });

 
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

 
  expect(mockAdd).toHaveBeenCalledWith('Test Task');
  
  expect(input).toHaveValue('');
});