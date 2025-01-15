import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load ngôn ngữ qua backend
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Tích hợp với React
  .init({
    fallbackLng: 'en', // Ngôn ngữ mặc định
    debug: true, // Bật log để kiểm tra trong quá trình phát triển
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Đường dẫn file ngôn ngữ
    },
    interpolation: {
      escapeValue: false, // React đã xử lý XSS, không cần escape
    },
  });

export default i18n;
