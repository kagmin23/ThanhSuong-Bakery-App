import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React, { useCallback, useState } from "react";
import {
  Animated,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../types/navigation.types";
import styles from "./styles";

export const ProductDetailsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ProductDetails">>();
  const { product, onToggleFavorite, onAddToCart } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const scrollY = new Animated.Value(0);

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const incrementQuantity = useCallback(
    () => setQuantity((prev) => prev + 1),
    []
  );
  const decrementQuantity = useCallback(
    () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)),
    []
  );

  const handleAddToCart = useCallback(() => {
    onAddToCart(product.id);
  }, [product.id, onAddToCart]);

  const handleCheckout = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: discountedPrice,
      quantity,
      category: product.category,
      imageUrl: product.imageUrl,
    };

    navigation.navigate("Checkout", {
      cartItems: [cartItem],
      totalPrice: discountedPrice * quantity,
    });
  };

  const imageUri = product.imageUrl || 'https://via.placeholder.com/300';

  return (
    <Layout style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Favorite Button */}
      <TouchableOpacity
        style={[styles.circleButton, styles.favoriteButton]}
        onPress={() => onToggleFavorite(product.id)}
      >
        <Ionicons
          name={product.isFavorite ? "heart" : "heart-outline"}
          size={22}
          color={product.isFavorite ? "#FF4F4F" : "#333"}
        />
      </TouchableOpacity>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          {isLoading && (
            <View style={styles.imagePlaceholder}>
              <Spinner size="large" />
            </View>
          )}
          {imageError && (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageErrorText}>Không thể tải ảnh</Text>
            </View>
          )}
          <Image
            source={{ uri: imageUri }}
            style={[styles.productImage, (isLoading || imageError) && { opacity: 0 }]}
            resizeMode="cover"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
          />

          {/* Discount Badge */}
          {(product.discount ?? 0) > 0 && (
            <View style={styles.discountBadge}>
              <Text style={[styles.discountText, { fontStyle: "italic" }]}>
                -{product.discount ?? 0}%
              </Text>
            </View>
          )}
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          {/* Product Name and Category */}
          <Text style={styles.productName}>{product.name}</Text>

          <View style={styles.categoryRatingContainer}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          </View>

          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>
              {discountedPrice.toLocaleString("vi-VN")}đ
            </Text>

            {(product.discount ?? 0) > 0 && (
              <Text style={styles.originalPrice}>
                {product.price.toLocaleString("vi-VN")}đ
              </Text>
            )}
          </View>

          {/* Description Section */}
          {product.description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
              <Text style={styles.descriptionText}>{product.description}</Text>
            </View>
          )}
        </View>
      </Animated.ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        {/* Left Column - Total */}
        <View style={styles.leftColumn}>
          <Text style={styles.totalLabel}>Tổng cộng</Text>
          <Text style={styles.totalPrice}>
            {(discountedPrice * quantity).toLocaleString("vi-VN")}đ
          </Text>
        </View>

        {/* Right Column - Quantity and Buttons */}
        <View style={styles.rightColumn}>
          <View style={styles.quantityWrapper}>
            <Text style={styles.quantityLabel}>Số lượng</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                onPress={decrementQuantity}
                style={styles.quantityButton}
              >
                <Ionicons name="remove" size={15} color="#333" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={incrementQuantity}
                style={styles.quantityButton}
              >
                <Ionicons name="add" size={15} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.buttonBar, { flexDirection: "row", gap: 10 }]}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={handleAddToCart}
            >
              <Ionicons name="cart-outline" size={15} color="white" />
              <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Ionicons name="wallet-outline" size={15} color="white" />
              <Text style={styles.checkoutText}>Mua ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default ProductDetailsScreen;