import 'src/app/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@store';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
