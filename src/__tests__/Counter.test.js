import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../components/Counter'

beforeEach(() => {
  document.body.innerHTML = '';
}) 

test('counter increases, decreases, and resets when buttons are clicked', () => {
  const div = document.createElement('div');
  document.body.append(div);

  ReactDOM.render(<Counter />, div);

  // const decrease = buttons[0];
  // const increase = buttons[1];
  // const reset = buttons[2];
  const [decrease, increase, reset] = div.querySelectorAll('button'); // [decrease btn, increase btn, reset btn]
  const count = div.querySelector('p'); // stores the p tag's HTML node reference

  expect(count.textContent).toBe('0');

  increase.click();
  increase.click();
  expect(count.textContent).toBe('2');

  decrease.click();
  expect(count.textContent).toBe('1');
  
  reset.click();
  expect(count.textContent).toBe('0');
})

test('counter increases, decreases, and resets when buttons are clicked (2nd)', () => {
  const div = document.createElement('div');
  document.body.append(div);

  ReactDOM.render(<Counter />, div);

  // const decrease = buttons[0];
  // const increase = buttons[1];
  // const reset = buttons[2];
  const [decrease, increase, reset] = div.querySelectorAll('button'); // [decrease btn, increase btn, reset btn]
  const count = div.querySelector('p'); // stores the p tag's HTML node reference
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  })

  expect(count.textContent).toBe('0');

  increase.dispatchEvent(clickEvent);
  increase.dispatchEvent(clickEvent);
  expect(count.textContent).toBe('2');

  decrease.dispatchEvent(clickEvent);
  expect(count.textContent).toBe('1');
  
  reset.dispatchEvent(clickEvent);
  expect(count.textContent).toBe('0');
})
