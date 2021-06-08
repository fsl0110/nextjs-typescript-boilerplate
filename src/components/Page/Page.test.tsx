import { render } from 'app';
import { Page } from 'components';

describe('Page', () => {
  it('renders Page component', () => {
    render(
      <Page
        onLogin={() => null}
        onLogout={() => null}
        onCreateAccount={() => null}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Page
        onLogin={() => null}
        onLogout={() => null}
        onCreateAccount={() => null}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
