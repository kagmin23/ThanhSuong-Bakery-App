import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Tìm kiếm bánh yêu thích...",
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#666" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888" // Slightly darker for better accessibility
        value={value}
        onChangeText={onChangeText}
      />
      {value !== "" && (
        <TouchableOpacity onPress={() => onChangeText("")} style={styles.clearButton}>
          <Ionicons name="close" size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    backgroundColor: "transparent",
    paddingLeft: 10,
  },
  clearButton: {
    paddingHorizontal: 8, // Add padding to clear button for better alignment
  },
});

export default SearchBar;
