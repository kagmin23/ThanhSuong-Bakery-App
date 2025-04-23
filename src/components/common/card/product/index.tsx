import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BakeryProduct } from "../../../../types/product.types";

// DiscountTag component
export const DiscountTag = ({ discount }: { discount: number }) => {
  return (
    <View style={styles.discountTag}>
      <Text style={styles.discountText}>-{discount}%</Text>
    </View>
  );
};

// ProductCard component
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
        source={{ uri: `/api/placeholder/160/120` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.productName} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.productCategory} numberOfLines={1}>
          {product.category}
        </Text>
        <View style={styles.priceContainer}>
          <View>
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

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 250,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 120,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  productCategory: {
    fontSize: 12,
    color: "#8F9BB3",
  },
  priceContainer: {
    marginTop: "auto",
    justifyContent: "space-between",
  },
  discountedPrice: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FF9A3C",
  },
  originalPrice: {
    fontSize: 12,
    color: "#8F9BB3",
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favoriteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF9A3C",
    justifyContent: "center",
    alignItems: "center",
  },
  discountTag: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF4F4F",
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ProductCard;
