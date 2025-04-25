import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryPills = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryPillsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.button,
            selectedCategory === category ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === category ? styles.selectedText : styles.unselectedText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryPills;
