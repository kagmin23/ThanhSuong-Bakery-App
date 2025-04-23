import { Layout, Text } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient'; // You can use expo-linear-gradient or any gradient library
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window'); // Get screen width
const height = 200; // Fixed height for the header

export const HeaderBackground = () => {
  // Reanimated: Animation for the title (e.g., scale effect)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(1.2) }], // Apply a slight scale effect for animation
    };
  });

  return (
    <Layout style={[styles.header, { width, height }]}>
      {/* Gradient background */}
      <LinearGradient
        style={styles.gradient}
        colors={['#FF9A3C', '#FF5757']} // Gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      {/* Title with animation */}
      <Text style={[styles.title, animatedStyle]}>Khuyến Mãi</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden', // To ensure the rounded corners are visible
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, // Make gradient fill the entire Layout
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});