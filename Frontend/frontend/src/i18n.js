import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {

        navbar: {
          mush: ".Mush",
          search: "Search"
        },

        App:{
          title:"Cultivator & Company Details",
        },
        
      },
    },
    ja: {
      translation: {
        navbar: {
          mush: ".マッシュ",
          search: "探す"
        },
        App:{
          title:"さいばいしゃ と かいしゃ の しょうさい",
        },
        
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false
  }
});

export default i18n;