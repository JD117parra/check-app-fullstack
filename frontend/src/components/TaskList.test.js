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

  
  expect(screen.getByText('First')).toBeInTheDocument();
  expect(screen.getByText('Second')).toBeInTheDocument();

  
  fireEvent.click(screen.getByText('First'));
  expect(mockToggle).toHaveBeenCalledWith('1');

 
  const deleteButtons = screen.getAllByRole('button', { name: /🗑/ });
  fireEvent.click(deleteButtons[1]);
  expect(mockDelete).toHaveBeenCalledWith('2');
});