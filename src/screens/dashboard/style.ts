import type {ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppTheme} from '../../shared/constants';
import {Theme} from '@react-navigation/native';

interface Style {
  container: ViewStyle;
}

export default (theme: AppTheme | Theme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
