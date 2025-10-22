import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import de from "./locales/de.json";
import ar from "./locales/ar.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      de: { translation: de },
      ar: { translation: ar },
      ru: { translation: ru },
    },
    fallbackLng: "tr",
    lng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
