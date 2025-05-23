import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CartScreen, CheckoutScreen, HomeScreen, ProductDetailsScreen, SaleOffScreen, ShopScreen } from '../screens';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { RootStackParamList, RootTabParamList } from '../types/navigation.types';

// Stack Navigator for Home tab
const ProductDetailsStack = createNativeStackNavigator<RootStackParamList>();

const ProductDetailsStackNavigator = () => {
  return (
    <ProductDetailsStack.Navigator initialRouteName="Home">
      <ProductDetailsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <ProductDetailsStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: 'Chi tiết sản phẩm' }}
      />
      <ProductDetailsStack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: 'Thanh toán' }}
      />
    </ProductDetailsStack.Navigator>
  );
};

// Stack Navigator for Cart tab
const CartStack = createNativeStackNavigator<RootStackParamList>();

const CartStackNavigator = () => {
  return (
    <CartStack.Navigator initialRouteName="Cart">
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: 'Thanh toán' }}
      />
    </CartStack.Navigator>
  );
};

// Bottom Tabs Navigator
const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        switch (route.name) {
          case 'Home':
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
          case 'Cart':
            return <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />;
          case 'Sale':
            return <Ionicons name={focused ? 'pricetags' : 'pricetags-outline'} size={size} color={color} />;
          case 'Shop':
            return <Ionicons name={focused ? 'storefront' : 'storefront-outline'} size={size} color={color} />;
          case 'Profile':
            return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
          default:
            return null;
        }
      },
      tabBarActiveTintColor: '#3eaef4',
      tabBarInactiveTintColor: 'black',
    })}
  >
    <Tab.Screen name="Home" component={ProductDetailsStackNavigator} options={{ title: 'Trang chủ' }} />
    <Tab.Screen name="Cart" component={CartStackNavigator} options={{ title: 'Giỏ hàng' }} />
    <Tab.Screen name="Sale" component={SaleOffScreen} options={{ title: 'Ưu đãi' }} />
    <Tab.Screen name="Shop" component={ShopScreen} options={{ title: 'Cửa hàng' }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ sơ' }} />
  </Tab.Navigator>
);