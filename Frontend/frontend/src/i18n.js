import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          home: "Home",
          flashCards: "Flash Cards",
          quiz: "Quiz",
          settings: "Settings"
        },
        header: {
          title: "Let's Go!",
          subtitle: "KANJI"
        },
        app:{
          heading: "JLPT Kanji list"
        },
        flashCards:{
          heading: "Flash Card",
          button: "Next",
          reset: "Reset"
        },
        quiz:{
          heading: "Quiz"
        }
      }
    },
    ja: {
      translation: {
        navbar: {
          home: "ホーム",
          flashCards: "フラッシュカード",
          quiz: "クイズ",
          settings: "設定"
        },
        header: {
          title: "行こう！",
          subtitle: "漢字"
        },
        app:{
          heading: "JLPT漢字リスト"
        },
        flashCards:{
          heading: "フラッシュカード",
          button: "つぎ",
          reset: "リセット"
        },
        quiz:{
          heading: "クイズ"
        }
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false
  }
});

export default i18n;