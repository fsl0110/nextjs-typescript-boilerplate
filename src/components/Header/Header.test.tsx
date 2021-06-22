import { render } from 'app';
import { Header } from './Header';

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');

test('renders Header component', () => {
  mockUseRouter.mockImplementationOnce(() => ({
    locale: 'en',
  }));

  render(<Header />);

  mockUseRouter.mockReset();
});

test('matches snapshot', () => {
  mockUseRouter.mockImplementationOnce(() => ({
    locale: 'en',
  }));

  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();

  mockUseRouter.mockReset();
});
