import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  expect(screen.getByText(/my to-do list/i)).toBeInTheDocument();
});