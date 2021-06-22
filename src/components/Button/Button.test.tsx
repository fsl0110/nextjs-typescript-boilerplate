import { render } from '@test';
import { Button } from './Button';

test('renders Button component', () => {
  render(<Button>Button</Button>);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Button>Button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
