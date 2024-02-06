import type {TextStyle, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppTheme} from '../shared/constants';

interface Style {
  container: ViewStyle;
  item: ViewStyle;
  title: ViewStyle | TextStyle;
  input: ViewStyle;
}

export default (theme: AppTheme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 20,
      marginTop: 60,
    },
    title: {
      marginTop: 60,
      marginBottom: 20,
      width: '100%',
      fontSize: 40,
      color: theme.colors.text,
    },
    item: {
      marginTop: 10,
      width: '100%',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
};
