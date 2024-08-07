import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(initReactI18next)
.use(LanguageDetector)
.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    en: {
      translation: {
        "i18n": "Internationalization",
        "i18n_short": "i18n"
      }
    },
    es: {
      translation: {
        "i18n": "Internacionalización",
        "i18n_short": "i18n"
      }
    }
  }
});

