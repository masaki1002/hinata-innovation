import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translate/en/en.json";
import ja from "./translate/ja/ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
  debug: process.env.NODE_ENV === "development",
  fallbackLng: "ja", // デフォルトの言語を設定する
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;