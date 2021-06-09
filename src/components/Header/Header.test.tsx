import { render, mockUseRouter } from 'app';
import { Header } from './Header';

describe('Header', () => {
  it('renders Header component', () => {
    mockUseRouter.mockImplementationOnce(() => ({
      locale: 'en',
    }));

    render(<Header />);
  });

  it('matches snapshot', () => {
    mockUseRouter.mockImplementationOnce(() => ({
      locale: 'en',
    }));

    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
