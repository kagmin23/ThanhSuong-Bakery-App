import { Ionicons } from "@expo/vector-icons";
import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useAnimatedStyle, withSpring } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryPills, HeaderBackground, ProductCard, SearchBar } from "../../components/common";
import { CATEGORIES, SAMPLE_PRODUCTS } from "../../data/products";
import { BakeryProduct } from "../../types/product.types";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [products, setProducts] = useState<BakeryProduct[]>(SAMPLE_PRODUCTS);

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle favorite status
  const handleToggleFavorite = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  // Add product to cart
  const handleAddToCart = (id: string) => {
    console.log(`Thêm sản phẩm ${id} vào giỏ hàng`);
  };

  // Animated style for the header title
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    };
  });

  return (
    <Layout style={[styles.container, { paddingTop: insets.top + 16 }]}>
      {/* Header with gradient */}
      <HeaderBackground />

      {/* Header content */}
      <Layout style={styles.header}>
        <Text category="h1" style={[styles.title, animatedStyle]}>
          Tiệm Bánh Thanh Sương
        </Text>
        {/* Search bar */}
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      </Layout>

      {/* Category pills */}
      <Layout style={styles.categoryContainer}>
        <CategoryPills
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </Layout>

      {/* Product list */}
      <Layout style={styles.productListContainer}>
        {filteredProducts.length > 0 ? (
          <FlatList
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
            contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
          />
        ) : (
          <Layout style={styles.noResultsContainer}>
            <Ionicons name="search-outline" size={60} color="#ccc" />
            <Text style={styles.noResultsText}>
              Không tìm thấy sản phẩm nào
            </Text>
          </Layout>
        )}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  categoryContainer: {
    paddingTop: 10,
  },
  productListContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  noResultsText: {
    fontSize: 18,
    color: "#8F9BB3",
    marginTop: 16,
  },
});
