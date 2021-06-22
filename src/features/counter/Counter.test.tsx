import { fireEvent, render } from 'app';
import { Counter } from './Counter';

test('renders with redux defaults and increments and decrements corretly', () => {
  const { getByLabelText, getByText } = render(<Counter />);

  expect(getByLabelText(/count/i)).toHaveTextContent('1');

  fireEvent.click(getByText('+'));
  expect(getByLabelText(/count/i)).toHaveTextContent('2');

  fireEvent.click(getByText('-'));
  expect(getByLabelText(/count/i)).toHaveTextContent('1');
});

test('renders redux test initialState', () => {
  const { getByLabelText } = render(<Counter />, {
    initialState: { counter: { value: 3 } },
  });

  expect(getByLabelText(/count/i)).toHaveTextContent('3');
});

test('add input value', () => {
  const { getByLabelText, getByText } = render(<Counter />);
  const input = getByLabelText(/input/i) as HTMLInputElement;

  fireEvent.change(input, {
    target: { value: '9' },
  });
  expect(input.value).toBe('9');

  fireEvent.click(getByText(/add/i));
  expect(getByLabelText(/count/i)).toHaveTextContent('10');
});
