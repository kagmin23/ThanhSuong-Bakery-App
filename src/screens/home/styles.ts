import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0, // Tùy chỉnh theo kích thước header
    left: 0,
    right: 0,
    zIndex: 10,
  },
  searchContainer: {
    position: "absolute",
    top: 110, // Tùy chỉnh theo kích thước header
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#9fd7f9", // hoặc theme-based
    elevation: 5, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerSection: {
  color: "#3EAEF4",
  },
  categoryContainer: {
    paddingTop: 15,
  },
  productListContainer: {
    flex: 1,
    paddingHorizontal: 4,
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
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Highest elevation
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay for loading
  },
});

export default styles;
