import {ScrollView, Text, View, TextInput, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import createStyles from './style.ts';
import {useTranslation} from 'react-i18next';

export const LoginPage = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {t} = useTranslation();

  const [password, onChangePassword] = useState('');
  const [userName, onChangeUserName] = useState('');

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{t('labels.loginTitle')}</Text>
        </View>
        <View style={styles.item}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUserName}
            value={userName}
            placeholder={t('labels.userName')}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder={t('labels.password')}
          />
        </View>
        <View style={styles.item}>
          <Button title={t('labels.login')} />
        </View>
      </View>
    </ScrollView>
  );
};
