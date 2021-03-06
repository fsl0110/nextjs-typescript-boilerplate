import '../src/app/styles/globals.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as nextImage from 'next/image';
import { withNextRouter } from '../src/app/utils/storybook/withNextRouter';
import { withI18next } from '../src/app/utils/storybook/withI18next';
import { withReduxProvider } from '../src/app/utils/storybook/withReduxProvider';

export const decorators = [withReduxProvider, withI18next, withNextRouter];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const customViewports = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    // https://github.com/storybookjs/storybook/blob/master/addons/viewport/src/defaults.ts#L3
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
