import { Text } from '@ui-kitten/components';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export const ShopScreen = () => (
  <Animated.View
    entering={FadeIn}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Cửa Hàng</Text>
    <Text category="s1">Xem danh sách bánh ngon!</Text>
  </Animated.View>
);
