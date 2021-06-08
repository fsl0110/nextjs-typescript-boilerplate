import { render } from 'tests';
import { Button } from 'components';

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button label="My Button" />);
    /*     screen.debug(); */
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Button label="My Button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
