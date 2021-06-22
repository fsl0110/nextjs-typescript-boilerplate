import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTests';
/* import i18n from '../i18n/i18n'; */
import { Provider } from 'react-redux';
import { rootReducer } from '@store';
import { createStore } from 'redux';

const customRender = (
  ui: ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...rtlOptions
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = {},
) => {
  const Wrapper: FC = ({ children }) => (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...rtlOptions }),
    store,
  };
};

export * from '@testing-library/react';

export { customRender as render };
