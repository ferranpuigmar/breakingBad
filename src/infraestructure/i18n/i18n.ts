import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from 'infraestructure/i18n/locales/en/translations.json';
import es from 'infraestructure/i18n/locales/es/translations.json';
const languages = ['es', 'en'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translations: en
      },
      es: {
        translations: es
      }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  });

i18n.languages = ['en', 'es'];

export default i18n;
