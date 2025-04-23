import { Layout, Text } from '@ui-kitten/components'; // UI Kitten imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';

export const ShopScreen = () => {
  // Basic animation using Reanimated for the title
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    color: '#8F9BB3',  // Using UI Kitten's gray10 color or adjust as needed
  },
});
