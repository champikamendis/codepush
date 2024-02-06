import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import createStyles from '../explore/style.ts';

const ExploreScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('labels.explore')}</Text>
    </View>
  );
};

export default ExploreScreen;
