import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

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

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  button: {
    marginRight: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: "#FF8C00", // Replace with your color for selected
    borderColor: "#FF8C00", // Replace with your color for selected border
  },
  unselectedButton: {
    backgroundColor: "transparent",
    borderColor: "#B0B0B0", // Replace with your color for unselected border
  },
  text: {
    fontSize: 14,
  },
  selectedText: {
    color: "white", // White text for selected category
  },
  unselectedText: {
    color: "#B0B0B0", // Gray text for unselected category
  },
});

export default CategoryPills;
