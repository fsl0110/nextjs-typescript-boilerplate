import { makeDecorator } from '@storybook/addons';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

export const withI18next = makeDecorator({
  name: 'I18next',
  parameterName: 'i18next',
  wrapper(getStory, context) {
    return <I18nextProvider i18n={i18n}>{getStory(context)}</I18nextProvider>;
  },
});
