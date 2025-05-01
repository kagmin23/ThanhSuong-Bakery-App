import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginVertical: 12,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#f7f9fc",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  categoryContainer: {
    paddingTop: 20,
    marginTop: -75,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    marginTop: 4,
    color: "#FF6B6B",
    fontWeight: "600",
  },
  discount: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  noResultsText: {
    fontSize: 18,
    color: "#8F9BB3",
    marginTop: 16,
  },
});

export default styles;
