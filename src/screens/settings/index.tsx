import React, {useMemo} from 'react';
import {Button, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import createStyles from './style.ts';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch} from '../../shared/hooks';
import {setTheme} from '../../redux/slicess/userSettings/userSettingsSlice.ts';
import {THEME} from '../../shared/constants';

const DashboardScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {t} = useTranslation();
  const selectTheme = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button
          onPress={() => selectTheme(setTheme(THEME.DARK))}
          title={t('messages.changeThemeToDark')}
        />
      </View>
      <View style={styles.item}>
        <Button
          onPress={() => selectTheme(setTheme(THEME.LIGHT))}
          title={t('messages.changeThemeToLight')}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
