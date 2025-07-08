import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en_common from "./locales/en/common.json";
import en_login from "./locales/en/login.json";
import en_register from "./locales/en/register.json";
import en_tooltip from "./locales/en/tooltip.json";


import vi_common from "./locales/vi/common.json";
import vi_login from "./locales/vi/login.json";
import vi_register from "./locales/vi/register.json";
import vi_tooltip from "./locales/vi/tooltip.json";

i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
});
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en_common,
        login: en_login,
        register: en_register,
        tooltip: en_tooltip
      },
      vi: {
        common: vi_common,
        login: vi_login,
        register: vi_register,
        tooltip: en_tooltip

      },
    },
    // ngôn ngữ mặc định
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
    ns: ["common", "login", "register"],
    detection: {
      order: ['localStorage', 'navigator'], // ưu tiên đọc từ localStorage
      caches: ['localStorage'],             // lưu lại sau khi chọn
    },
  });


export default i18n;
