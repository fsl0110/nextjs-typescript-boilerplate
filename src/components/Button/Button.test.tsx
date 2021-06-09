import { render } from 'app';
import { Button } from './Button';

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button>Button</Button>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Button>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
