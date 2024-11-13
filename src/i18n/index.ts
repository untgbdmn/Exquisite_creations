import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import id from './translations/id.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: 'en', // bahasa default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react sudah aman dari XSS
    },
  });

export default i18n;
