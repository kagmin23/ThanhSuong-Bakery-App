// src/navigation/BottomTabs.navigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components';
import React from 'react';
import { HomeScreen, ShopScreen } from '../screens';

export type RootTabParamList = {
  Home: undefined;
  Shop: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        // Bạn có thể custom icon theo route.name
        const iconName = route.name === 'Home' ? 'home-outline' : 'shopping-bag-outline';
        return <Icon name={iconName} fill={color} style={{ width: size, height: size }} />;
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
    <Tab.Screen name="Shop" component={ShopScreen} options={{ title: 'Cửa hàng' }} />
  </Tab.Navigator>
);
