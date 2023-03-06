import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translations
import EN from './en'
import FR from './fr'

// Utilities
import {
  getDefaultLocale,
  getFallbackLocale,
  getSupportedLocales,
} from 'utils/helpers/language'

i18n.use(initReactI18next).init({
  // Language Configuration
  lng: getDefaultLocale(),
  fallbackLng: getFallbackLocale(),
  supportedLngs: getSupportedLocales(),

  // Translations
  resources: {
    en: EN,
    fr: FR,
  },

  // Options
  saveMissing: true,
  interpolation: {
    escapeValue: false,
  },
})
