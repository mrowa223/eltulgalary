import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from './locales/ru/translation.json';
import kzTranslation from './locales/kz/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    
      ru: { translation: ruTranslation },
      kz: { translation: kzTranslation }
    },
    lng: "kz", // Язык по умолчанию
    fallbackLng: "kz",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
