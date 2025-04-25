import { StyleSheet } from "react-native";

// Định nghĩa các màu chính để dễ bảo trì
const COLORS = {
  primary: "#3498db",      // Màu xanh trời chủ đạo
  white: "#ffffff",        // Màu trắng
  background: "#f8f9fa",   // Màu nền
  text: {
    dark: "#333333",       // Màu chữ đậm
    medium: "#666666",     // Màu chữ vừa
    light: "#777777",      // Màu chữ nhạt
    dimmed: "#999999",     // Màu chữ mờ
  },
  border: "#e1e8ed",       // Màu viền
  discount: "#ff6b6b",     // Màu badge giảm giá
  removeButton: "#fff0f0", // Màu nút xóa
  shadow: "#000000",       // Màu bóng đổ
  quantityBg: "#f0f8ff",   // Màu nền nút số lượng
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  listContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  cardItem: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    padding: 12,
  },
  imageContainer: {
    position: "relative",
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  discountBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.discount,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomLeftRadius: 6,
  },
  discountText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text.dark,
    marginBottom: 2,
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.text.light,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: COLORS.text.dimmed,
    marginRight: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.quantityBg,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  quantityValue: {
    width: 40,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: "500",
  },
  actionContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 8,
  },
  totalItemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  removeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.removeButton,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 12,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 14,
    color: COLORS.text.medium,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text.dark,
  },
  divider: {
    marginVertical: 12,
    backgroundColor: COLORS.border,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text.dark,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    color: COLORS.text.dark,
  },
  emptySubtext: {
    fontSize: 14,
    color: COLORS.text.light,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  continueShopping: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 0,
    marginTop: 8,
  },
});

export default styles;