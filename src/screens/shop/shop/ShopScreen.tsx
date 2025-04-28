import { Ionicons } from '@expo/vector-icons';
import { Card, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import { ShopInfo } from '../../../types/shop.types';
import styles from './styles';

export const ShopScreen = () => {
  const shopInfo: ShopInfo = {
    name: 'Thanh Sương Bakery',
    address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    phone: '0123 456 789',
  };

  const openPhoneDialer = () => {
    Linking.openURL(`tel:${shopInfo.phone}`);
  };

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopInfo.address)}`;
    Linking.openURL(url);
  };

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cover Image with Overlay */}
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' }}
            style={styles.coverImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.shopName}>{shopInfo.name}</Text>
          </View>
        </View>

        {/* Info Card */}
        <Card style={styles.infoCard}>
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={28} color="#3366FF" style={styles.icon} />
              <Text style={styles.infoText}>{shopInfo.address}</Text>
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={openMap}>
              <Text style={styles.actionButtonText}>Xem bản đồ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Ionicons name="call-outline" size={28} color="#3366FF" style={styles.icon} />
              <Text style={styles.infoText}>{shopInfo.phone}</Text>
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={openPhoneDialer}>
              <Text style={styles.actionButtonText}>Gọi ngay</Text>
            </TouchableOpacity>
          </View>
        </Card>

        {/* Description Card */}
        <Card style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Giới thiệu</Text>
          <View style={styles.descriptionContent}>
            <Image
              source={{ uri: 'https://static.vinwonders.com/production/2025/02/tiem-banh-ngon-o-sai-gon-banner.jpg' }}
              style={styles.descriptionImage}
              resizeMode="cover"
            />
            <Text style={styles.descriptionText}>
              Thanh Sương Bakery chuyên cung cấp các loại bánh kem, bánh mì, bánh ngọt,.. cafe, trà sữa các loại.
              Với cam kết nguyên liệu sạch, dịch vụ tận tâm và giá cả hợp lý.
            </Text>
          </View>
        </Card>
      </ScrollView>
    </Layout>
  );
};

export default ShopScreen;