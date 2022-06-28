import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/log in/i);
  expect(linkElement).toBeInTheDocument();
});

test('logs in and renders dashboard page with "User List"', async () => {
  render(<App />);
  const usernameInput = screen.getByTestId('username');
  const passwordInput = screen.getByTestId('password');
  const buttonElement = screen.getByRole('button', {name: 'Sign in'});

  fireEvent.change(usernameInput, { target: { value: 'eparini'}});
  fireEvent.change(passwordInput, { target: { value: 'IamAtest99'}});
  fireEvent.click(buttonElement);
  
  await new Promise((r) => setTimeout(r, 2000));

  expect(screen.getByText(/User List/i)).toBeInTheDocument();
});
