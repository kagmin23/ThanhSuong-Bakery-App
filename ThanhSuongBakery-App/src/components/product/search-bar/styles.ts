import { StyleSheet } from "react-native";

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
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    backgroundColor: "transparent",
    paddingLeft: 10,
  },
  clearButton: {
    paddingHorizontal: 8,
  },
});

export default styles;
