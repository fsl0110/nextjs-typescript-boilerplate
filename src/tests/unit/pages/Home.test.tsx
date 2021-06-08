import { render } from 'tests';
import Home from 'pages';

describe('Home', () => {
  it('renders Home component', () => {
    render(<Home />);
    /*     screen.debug(); */
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
