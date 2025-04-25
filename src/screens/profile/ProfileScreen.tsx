import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styles from './styles';

export const ProfileScreen = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    };
  });

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={[styles.title, animatedStyle]}>
        Trang Cá Nhân
      </Text>
      <Text category="s1" style={styles.subtitle}>
        Thông tin của bạn sẽ hiển thị tại đây.
      </Text>
    </Layout>
  );
};

export default ProfileScreen;
