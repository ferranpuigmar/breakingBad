import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEN from 'infraestructure/i18n/locales/en/translations.json';
import translationsES from 'infraestructure/i18n/locales/es/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: translationsEN
    },
    es: {
      translations: translationsES
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es'];

export default i18n;
