import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      min:"الصغري",
      max:"الكبري",
      lang:"الانجليزية",
      hello: "اهلا بالعالم",
      city: "القاهرة",
      english: "English",
      arabic: "Arabic"
    }
  },
  en: {
    translation: {
      min:"min",
       max:"max",
      lang:"arabic",
      hello: "Hello World",
      city: "Cairo",
      english: "English",
      arabic: "Arabic"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    debug: true
  });

export default i18n;
