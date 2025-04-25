import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CART_ITEMS } from "../../data/cart";
import { CartProduct } from "../../types/products.types";
import styles from "./styles";

// Define the param list for the navigation stack
type RootStackParamList = {
  Cart: undefined;
  Checkout: { cartItems: CartProduct[]; totalPrice: number };
};

// Type the navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const [cartItems, setCartItems] = useState<CartProduct[]>(CART_ITEMS);
  const navigation = useNavigation<NavigationProp>();

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const finalPrice = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      return total + finalPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const renderItem = ({ item }: { item: CartProduct }) => {
    const hasDiscount = item.discount && item.discount > 0;
    const finalPrice = hasDiscount
      ? item.price - (item.price * item.discount!) / 100
      : item.price;
    const totalItemPrice = finalPrice * item.quantity;

    return (
      <View style={styles.cardItem}>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            {hasDiscount && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>-{item.discount ?? 0}%</Text>
              </View>
            )}
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.categoryText}>{item.category}</Text>

            <View style={styles.priceContainer}>
              {hasDiscount && (
                <Text style={styles.oldPrice}>
                  {item.price.toLocaleString()}đ
                </Text>
              )}
              <Text style={styles.price}>{finalPrice.toLocaleString()}đ</Text>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Ionicons name="remove" size={16} color="#3498db" />
              </TouchableOpacity>

              <View style={styles.quantityValue}>
                <Text style={styles.quantityText}>{item.quantity}</Text>
              </View>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Ionicons name="add" size={16} color="#3498db" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <Text style={styles.totalItemPrice}>
              {totalItemPrice.toLocaleString()}đ
            </Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemove(item.id)}
            >
              <Ionicons name="trash-outline" size={22} color="#ff6b6b" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="cart-outline" size={80} color="#3498db" />
      <Text style={styles.emptyText}>Giỏ hàng trống</Text>
      <Text style={styles.emptySubtext}>
        Hãy thêm sản phẩm vào giỏ hàng của bạn
      </Text>
      <Button style={styles.continueShopping}>Tiếp tục mua sắm</Button>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Giỏ hàng của bạn</Text>
      <Text style={styles.headerSubtitle}>{totalItems} sản phẩm</Text>
    </View>
  );

  const ListFooterComponent = () =>
    cartItems.length > 0 ? (
      <View style={styles.footer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Tạm tính</Text>
          <Text style={styles.summaryValue}>
            {totalPrice.toLocaleString()}đ
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Tổng thanh toán</Text>
          <Text style={styles.totalValue}>
            {totalPrice.toLocaleString()}đ
          </Text>
        </View>
        <Button
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate("Checkout", { cartItems, totalPrice })
          }
        >
          Đặt hàng ngay
        </Button>
      </View>
    ) : null;

  return (
    <Layout style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={ListFooterComponent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </Layout>
  );
};