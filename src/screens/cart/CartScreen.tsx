import { Layout, Text } from '@ui-kitten/components'; // UI Kitten imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'; // Reanimated imports

export const CartScreen = () => {
  // Reanimated: Animation for the title
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    };
  });

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={[styles.title, animatedStyle]}>
        Giỏ Hàng
      </Text>
      <Text category="s1" style={styles.subtitle}>
        Các sản phẩm bạn đã chọn sẽ hiển thị ở đây.
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
    color: '#8F9BB3', // UI Kitten's gray10 equivalent or adjust as necessary
  },
});
