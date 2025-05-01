import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

  // Header Styles
  floatingHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 15,
    color: "#333",
  },

  // Navigation Button Styles
  circleButton: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 5,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 5,
  },

  // Image Styles
  imageContainer: {
    width: width,
    height: width * 0.9,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },

  discountBadge: {
    position: "absolute",
    bottom: 15,
    right: 30,
    backgroundColor: "#FF4F4F",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 10, // Thêm dòng này để hiển thị phía trên
  },
  discountText: {
    color: "white",
    fontSize: 20
  },

  // Details Container Styles
  detailsContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },

  // Category Styles
  categoryRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryBadge: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
  },

  // Price Styles
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  discountedPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4F4F",
  },
  originalPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },

  // Section title style
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },

  // Description Styles
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionText: {
    marginBottom: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },

  // Quantity Styles
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    width: 100,
    height: 25,
    justifyContent: "space-between",
  },
  quantityButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
  },

  // Bottom Bar - Phiên bản mới với layout 2 cột
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row", // Thay đổi thành row để chia làm 2 phần ngang
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    justifyContent: "space-between", // Căn chỉnh các phần tử con
  },
  
  // Cột bên trái - Tổng cộng
  leftColumn: {
    justifyContent: "center",
    flex: 1,
  },
  totalLabel: {
    fontSize: 15,
    color: "#666",
    marginBottom: 4,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4F4F",
  },
  
  // Cột bên phải - Số lượng và nút thêm vào giỏ
  rightColumn: {
    flex: 1.5,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 107,
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 12,
    color: "#666",
  },
  addToCartButton: {
    backgroundColor: "#FF4F4F",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "55%", // Sử dụng toàn bộ chiều rộng của cột phải
  },
  checkoutButton: {
    backgroundColor: "#3eaef4",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "55%", // Sử dụng toàn bộ chiều rộng của cột phải
  },
  buttonBar: {
    flexDirection: "row"
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 13,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 13,
  },
  imagePlaceholder: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imageErrorText: {
    color: '#333',
    fontSize: 16,
  },
});