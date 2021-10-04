import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event'

// test('counter increases, decreases, and resets when buttons are clicked', () => {
//   const { container } = render(<Counter />);
//   // const container = object.container;

//   const [decrease, increase, reset] = container.querySelectorAll('button'); // [decrease btn, increase btn, reset btn]
//   const count = container.querySelector('p'); // stores the p tag's HTML node reference

//   expect(count.textContent).toBe('0');

//   fireEvent.click(increase);
//   fireEvent.click(increase);
//   expect(count.textContent).toBe('2');

//   fireEvent.click(decrease);
//   expect(count.textContent).toBe('1');
  
//   fireEvent.click(reset);
//   expect(count.textContent).toBe('0');
// })

test('counter increases, decreases, and resets when buttons are clicked', () => {
  render(<Counter />);

  const increase = screen.getByRole('button', {name: /increase/i});
  const decrease = screen.getByRole('button', {name: /decrease/i});
  const reset = screen.getByRole('button', {name: /reset/i});
  const count = screen.getByText(/\d/);

  expect(count).toHaveTextContent('0');

  userEvent.click(increase);
  userEvent.click(increase);
  expect(count).toHaveTextContent('2');

  userEvent.click(decrease);
  expect(count).toHaveTextContent('1');
  
  userEvent.click(reset);
  expect(count).toHaveTextContent('0');
})
