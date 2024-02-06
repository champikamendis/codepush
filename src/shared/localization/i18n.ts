import i18n, {InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';

import EnglishTranslations from '../localization/language/language-dictionary-en.json';
import ArabicTranslations from '../localization/language/language-dictionary-ar.json';
import userSettings from '../../configuration/userSettings.ts';
import {LANGUAGES} from '../constants';

const resources = {
  [LANGUAGES.ENGLISH]: {translation: EnglishTranslations},
  [LANGUAGES.ARABIC]: {translation: ArabicTranslations},
};

const initiateObject: InitOptions = {
  compatibilityJSON: 'v3',
  resources: resources,
  lng: userSettings.customisation.defaultLanguage,
  fallbackLng: userSettings.supportedLanguages.map(obj => obj.code),
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(initiateObject);

export default i18n;
