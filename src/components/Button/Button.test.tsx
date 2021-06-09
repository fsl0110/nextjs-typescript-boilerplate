import { render } from 'app';
import { Button } from './Button';

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button label="My Button" />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Button label="My Button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
