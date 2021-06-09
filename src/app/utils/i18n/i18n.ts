import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from '../../../../public/locales/en/common.json';
import home from '../../../../public/locales/en/home.json';

export const resources = {
  en: {
    common,
    home,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['common', 'home'],
  resources,
});

export default i18n;
