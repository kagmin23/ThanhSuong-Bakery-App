import { Ionicons } from '@expo/vector-icons';
import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CategoryPills,
  HeaderBackground,
  HeaderSection,
  ProductCard,
  SearchBar,
} from '../../components';
import { LoadingSpinner } from '../../components/common/loading';
import { notifications } from '../../data/notifications';
import { CATEGORIES, SAMPLE_PRODUCTS } from '../../data/products/products';
import { Notification } from '../../types/notifications.types';
import { BakeryProduct } from '../../types/products.types';
import styles from './styles';

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [products, setProducts] = useState<BakeryProduct[]>(SAMPLE_PRODUCTS);
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [notificationsList, setNotificationsList] = useState<Notification[]>(notifications);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
  }, [notificationsList]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Tất cả' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggleFavorite = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const handleAddToCart = (id: string) => {
  };

  const handleNotificationPress = () => {
  };

  const handleNotificationRead = (id: string) => {
    setNotificationsList(
      notificationsList.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotificationsList(
      notificationsList.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const toggleShowAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
  };

  return (
    <Layout style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      {/* Header Section */}
      <Layout style={styles.header}>
        <HeaderSection
          name="Phan Kang Min"
          avatarUrl="https://i.pravatar.cc/150?img=12"
          notifications={notificationsList}
          onNotificationPress={handleNotificationPress}
          onNotificationRead={handleNotificationRead}
          onMarkAllAsRead={handleMarkAllAsRead}
          showAllNotifications={showAllNotifications}
          toggleShowAllNotifications={toggleShowAllNotifications}
          onLogout={handleLogout}
        />
      </Layout>

      {/* Fixed Search Bar */}
      <Layout style={styles.searchContainer}>
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      </Layout>

      {/* Scrollable Content */}
      <FlatList
        ListHeaderComponent={
          <>
            <HeaderBackground />
            <Layout style={styles.categoryContainer}>
              <CategoryPills
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </Layout>
          </>
        }
        data={filteredProducts}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 142,
          paddingBottom: insets.bottom + 16,
        }}
        ListEmptyComponent={
          <Layout style={styles.noResultsContainer}>
            <Ionicons name="search-outline" size={60} color="#ccc" />
            <Text style={styles.noResultsText}>
              Không tìm thấy sản phẩm nào
            </Text>
          </Layout>
        }
      />

      {/* Full-Screen Loading Spinner */}
      {isLoggingOut && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingOverlay} />
          <LoadingSpinner />
        </View>
      )}
    </Layout>
  );
};

export default HomeScreen;