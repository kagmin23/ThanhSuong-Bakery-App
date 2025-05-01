import { Ionicons } from "@expo/vector-icons";
import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryPills, SaleOffCard } from "../../../components";
import { CATEGORIES } from "../../../data/products/products";
import { SALE_OFF_ITEMS } from "../../../data/products/sale-off";
import { SaleOffProduct } from "../../../types/products.types";
import styles from "./styles";

export const SaleOffScreen = () => {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [products, setProducts] = useState<SaleOffProduct[]>(SALE_OFF_ITEMS);
  const [searchQuery, setSearchQuery] = useState("");

  // Debug để theo dõi khi category thay đổi
  useEffect(() => {
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || product.category === selectedCategory;
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

  // Xử lý riêng để theo dõi khi category được chọn
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Layout style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <Text
        category="h5"
        style={[
          styles.title,
          {
            fontSize: 30,
            fontWeight: "700",
            textAlign: "center",
            color: "#3EAEF4",
            textTransform: "uppercase",
            textShadowColor: "#6ec2f7",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 4,
            marginBottom: 8,
          },
        ]}
      >
        Khuyến mãi hấp dẫn
      </Text>

      <Layout
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
        }}
      >
        <CategoryPills
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </Layout>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        numColumns={2}
        renderItem={({ item }) => (
          <SaleOffCard
            product={item}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
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
    </Layout>
  );
};
