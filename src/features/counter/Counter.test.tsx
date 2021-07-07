import { render, screen } from '@test';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';
import { axe } from 'jest-axe';

test('renders with redux default initialState and increments and decrements corretly', () => {
  render(<Counter />);

  expect(screen.getByLabelText('count')).toHaveTextContent('0');

  userEvent.click(screen.getByText('+'));
  expect(screen.getByLabelText('count')).toHaveTextContent('1');

  userEvent.click(screen.getByText('-'));
  expect(screen.getByLabelText('count')).toHaveTextContent('0');
});

test('renders redux test initialState', () => {
  render(<Counter />, {
    initialState: { counter: { value: 3 } },
  });

  expect(screen.getByLabelText('count')).toHaveTextContent('3');
});

test('add input value', () => {
  render(<Counter />);
  const input = screen.getByTestId('count-input') as HTMLInputElement;

  userEvent.type(input, '9');
  expect(input.value).toBe('9');

  userEvent.click(screen.getByText('add'));
  expect(screen.getByLabelText('count')).toHaveTextContent('9');
});

test('counter is accessible', async () => {
  const { container } = render(<Counter />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
