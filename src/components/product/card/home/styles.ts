import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 186,
    height: 250, // Cố định chiều cao
    margin: 10,
    marginLeft: 10.6,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center", // Căn giữa các phần tử trong card
    alignItems: "center", // Căn giữa các phần tử trong card
    borderWidth: 0.8, // Thêm viền cho Card
    borderColor: "#E0E0E0", // Màu viền, có thể thay đổi màu theo ý muốn
  },

  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    width: "100%", // Đảm bảo cardContent chiếm toàn bộ chiều rộng của card
  },
  productName: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: "#8F9BB3",
    marginBottom: 8,
  },
  priceContainer: {
    marginTop: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  discountedPrice: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FF9A3C",
  },
  originalPrice: {
    fontSize: 12,
    color: "#8F9BB3",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8, // tạo khoảng cách với giá
  },
  favoriteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF9A3C",
    justifyContent: "center",
    alignItems: "center",
  },
  discountTag: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF4F4F",
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
