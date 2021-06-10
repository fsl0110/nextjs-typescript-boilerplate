import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from '../../../../public/locales/en/common.json';
import home from '../../../../public/locales/en/home.json';
import contact from '../../../../public/locales/en/contact.json';
import counter from '../../../../public/locales/en/counter.json';

export const resources = {
  en: {
    common,
    home,
    contact,
    counter,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['common', 'home', 'contact', 'counter'],
  resources,
});

export default i18n;
