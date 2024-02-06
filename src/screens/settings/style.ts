import type {ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppTheme} from '../../shared/constants';
import {Theme} from '@react-navigation/native';

interface Style {
  container: ViewStyle;
  item: ViewStyle;
}

export default (theme: AppTheme | Theme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    item: {
      marginTop: 10,
      width: '100%',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'red',
    },
  });
};
