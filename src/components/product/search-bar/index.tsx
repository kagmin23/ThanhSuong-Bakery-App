import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
      <Ionicons name="search-outline" size={20} color="#3eaef4" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#6ec2f7"
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

export default SearchBar;
