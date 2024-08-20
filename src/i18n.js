import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./Components/Language/English/en";
import jp from "./Components/Language/Japanese/jp";

const resources = {
  jp: jp,
  en: en,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "jp", // default language
    fallbackLng: ["en", "jp"],
    preload: ["en", "jp"],
    whitelist: ["en", "jp"],
    debug: true,
    initImmediate: false,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: ".",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
