import { render, screen } from '@test';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

test('renders with redux default initialState and increments and decrements corretly', () => {
  render(<Counter />);

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');

  userEvent.click(screen.getByText('+'));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2');

  userEvent.click(screen.getByText('-'));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
});

test('renders redux test initialState', () => {
  const { getByLabelText } = render(<Counter />, {
    initialState: { counter: { value: 3 } },
  });

  expect(getByLabelText(/count/i)).toHaveTextContent('3');
});

test('add input value', () => {
  render(<Counter />);
  const input = screen.getByLabelText(/input/i) as HTMLInputElement;

  userEvent.type(input, '9');
  expect(input.value).toBe('9');

  userEvent.click(screen.getByText(/add/i));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('10');
});
