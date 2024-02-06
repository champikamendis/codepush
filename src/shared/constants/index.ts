import Colors from '../themes/typography/colors/Colors.ts';
import Sizes from '../themes/typography/sizes/Sizes.ts';
import {Theme} from '@react-navigation/native';
export enum SCREENS {
  DASHBOARD = 'Dashboard',
  EXPLORE = 'Explore',
  SETTINGS = 'Settings',
}

export enum LANGUAGES {
  ENGLISH = 'english',
  ARABIC = 'arabic',
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface UserSettings {
  customisation: {
    defaultTheme: THEME;
    defaultLanguage: LANGUAGES;
  };
  supportedLanguages: Array<{code: LANGUAGES; desc: string}>;
  supportedThemes: Array<{code: THEME; desc: string}>;
}
export type AppTheme = {
  dark: boolean;
  colors: Colors;
  sizes?: Sizes;
} & Theme;

export interface TradeUser {
  isLogin: boolean;
}
