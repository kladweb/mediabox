import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ru from "../locales/ru/translation.json";
import en from "../locales/en/translation.json";

// const en =  fetch ("/locales/en/translation.json");
// const ru =  fetch ("/locales/ru/translation.json");

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    debug: false,
    fallbackLng: 'en'
  });

export default i18n;
