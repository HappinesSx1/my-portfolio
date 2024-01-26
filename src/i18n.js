import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import frTranslation from "./locales/fr.json";
import enTranslation from "./locales/en.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    loadPath: "/locales/{{lng}}.json",
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
  });

export default i18n;
