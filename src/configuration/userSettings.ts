import {LANGUAGES, THEME, UserSettings} from '../shared/constants';

const settings: UserSettings = {
  customisation: {
    defaultTheme: THEME.DARK,
    defaultLanguage: LANGUAGES.ENGLISH,
  },

  supportedLanguages: [
    {code: LANGUAGES.ENGLISH, desc: 'English'},
    {code: LANGUAGES.ARABIC, desc: 'عربي'},
  ],

  supportedThemes: [
    {code: THEME.LIGHT, desc: 'Light'},
    {code: THEME.DARK, desc: 'Dark'},
  ],
};

export default settings as UserSettings;
