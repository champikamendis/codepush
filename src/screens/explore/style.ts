import type {ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppTheme} from '../../shared/constants';

interface Style {
  container: ViewStyle;
}

export default (theme: AppTheme) => {
  const {colors} = theme;

  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.green,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
