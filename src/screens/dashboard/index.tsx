import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import createStyles from './style.ts';
import {useTheme} from '@react-navigation/native';

const DashboardScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('labels.dashboard')}</Text>
    </View>
  );
};

export default DashboardScreen;
