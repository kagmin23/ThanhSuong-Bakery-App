import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { BakeryProduct } from "../../../../types/products.types";
import { styles } from "./styles";

export const DiscountTag = ({ discount }: { discount: number }) => {
  return (
    <View style={styles.discountTag}>
      <Text style={styles.discountText}>-{discount}%</Text>
    </View>
  );
};

interface ProductCardProps {
  product: BakeryProduct;
  onToggleFavorite: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export const ProductCard = ({
  product,
  onToggleFavorite,
  onAddToCart,
}: ProductCardProps) => {
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <View style={styles.card}>
      {product.discount && <DiscountTag discount={product.discount} />}
      <Image
        source={{
          uri: `https://i0.wp.com/hatinhtoplist.vn/wp-content/uploads/2022/10/Tiem-banh-sinh-nhat-tai-Ha-Tinh-2.jpg?resize=1200%2C1600&ssl=1`,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.productName} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.productCategory} numberOfLines={1}>
          Loại: {product.category}
        </Text>
        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.discountedPrice}>
              {discountedPrice.toLocaleString("vi-VN")}đ
            </Text>
            {product.discount && (
              <Text style={styles.originalPrice}>
                {product.price.toLocaleString("vi-VN")}đ
              </Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.favoriteButton,
                {
                  backgroundColor: product.isFavorite ? "#FF4F4F" : "#D3D3D3",
                },
              ]}
              onPress={() => onToggleFavorite(product.id)}
            >
              <Ionicons
                name={product.isFavorite ? "heart" : "heart-outline"}
                size={18}
                color={product.isFavorite ? "white" : "#333"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => onAddToCart(product.id)}
            >
              <Ionicons name="cart-outline" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
