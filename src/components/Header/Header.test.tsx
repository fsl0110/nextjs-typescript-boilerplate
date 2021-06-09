import { render } from 'app';
import { Header } from './Header';

describe('Header', () => {
  it('renders Button component', () => {
    render(<Header />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
