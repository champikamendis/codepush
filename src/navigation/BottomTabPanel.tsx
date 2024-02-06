import {SCREENS} from '../shared/constants';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {PropsWithChildren} from 'react';

import DashboardScreen from '../screens/dashboard';
import ExploreScreen from '../screens/explore';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

type TabIconProps = PropsWithChildren<{
  route: any;
  focused: boolean;
  color: string;
  size: number;
}>;

const TabIcon = ({
  route,
  focused,
  color,
  size,
}: TabIconProps): React.JSX.Element => {
  let iconName = 'home';
  switch (route.name) {
    case SCREENS.DASHBOARD:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case SCREENS.EXPLORE:
      iconName = focused ? 'search' : 'search-outline';
      break;
    case SCREENS.SETTINGS:
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    default:
      iconName = focused ? 'home' : 'home-outline';
      break;
  }
  return (
    <Icon name={iconName} type={IconType.Ionicons} size={size} color={color} />
  );
};

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        ),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name={SCREENS.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={SCREENS.EXPLORE} component={ExploreScreen} />
      <Tab.Screen name={SCREENS.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
