import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

const sampleTasks = [
  { _id: '1', title: 'First', completed: false },
  { _id: '2', title: 'Second', completed: true }
];

test('TaskList renders tasks and handles toggle/delete', () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  render(
    <TaskList
      tasks={sampleTasks}
      toggleTask={mockToggle}
      deleteTask={mockDelete}
    />
  );

  // Debe mostrar ambos títulos
  expect(screen.getByText('First')).toBeInTheDocument();
  expect(screen.getByText('Second')).toBeInTheDocument();

  // Al clicar sobre el texto, llama a toggleTask con el id correspondiente
  fireEvent.click(screen.getByText('First'));
  expect(mockToggle).toHaveBeenCalledWith('1');

  // Al clicar el botón de borrar, llama a deleteTask
  const deleteButtons = screen.getAllByRole('button', { name: /🗑/ });
  fireEvent.click(deleteButtons[1]);
  expect(mockDelete).toHaveBeenCalledWith('2');
});