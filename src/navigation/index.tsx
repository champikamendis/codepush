import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appearance} from 'react-native';

import BottomTabNavigation from './BottomTabPanel.tsx';
import DarkTheme from '../shared/themes/darkTheme.ts';
import LightTheme from '../shared/themes/lightTheme.ts';
import {selectedUserSettings} from '../redux/slicess/userSettings/userSettingsSlice.ts';
import {useAppSelector} from '../shared/hooks';
import {useEffect} from 'react';
import {THEME} from '../shared/constants';
import {selectedTradeUser} from '../redux/slicess/tradeUser/tradeUserSlice.ts';
import {LoginPage} from '../authorization/LoginPanel.tsx';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const userSettings = useAppSelector(selectedUserSettings);
  const isLogin = useAppSelector(selectedTradeUser);

  useEffect(() => {
    Appearance.setColorScheme(userSettings.customisation.defaultTheme);
  }, [userSettings.customisation.defaultTheme]);

  if (isLogin) {
    return <LoginPage />;
  }

  return (
    <NavigationContainer
      theme={
        userSettings.customisation.defaultTheme === THEME.DARK
          ? DarkTheme
          : LightTheme
      }>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="tabScreen" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
