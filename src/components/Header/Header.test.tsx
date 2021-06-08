import { render } from 'app';
import { Header } from 'components';

describe('Header', () => {
  it('renders Header component', () => {
    render(
      <Header
        onLogin={() => null}
        onLogout={() => null}
        onCreateAccount={() => null}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Header
        onLogin={() => null}
        onLogout={() => null}
        onCreateAccount={() => null}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
