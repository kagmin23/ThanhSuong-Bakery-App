import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
  },
  selectContainer: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    marginVertical: 12,
  },
  confirmButton: {
    backgroundColor: "#3EAEF4",
    marginTop: 16,
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 16,
  },
});

export default styles;