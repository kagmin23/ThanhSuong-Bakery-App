import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styles from './styles';

export const ShopScreen = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    };
  });

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={[styles.title, animatedStyle]}>
        Khuyến Mãi
      </Text>
      <Text category="s1" style={styles.subtitle}>
        Xem các sản phẩm đang giảm giá!
      </Text>
    </Layout>
  );
};

export default ShopScreen;
