import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  button: {
    marginRight: 8,
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: "#3eaef4",
    borderColor: "#3eaef4",
  },
  unselectedButton: {
    backgroundColor: "transparent",
    borderColor: "#B0B0B0",
  },
  text: {
    fontSize: 14,
  },
  selectedText: {
    color: "white",
  },
  unselectedText: {
    color: "#B0B0B0",
  },
});

export default styles;
