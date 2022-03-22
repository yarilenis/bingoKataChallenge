import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleApp = screen.getByText('Bienvenido a Bingo Kata');
  expect(titleApp).toBeInTheDocument();
});
