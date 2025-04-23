import { Text } from '@ui-kitten/components';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export const HomeScreen = () => (
  <Animated.View
    entering={FadeIn}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Trang Chủ - Tiệm Bánh Thanh Sương</Text>
    <Text category="s1">Chào mừng bạn đến với tiệm bánh!</Text>
  </Animated.View>
);
