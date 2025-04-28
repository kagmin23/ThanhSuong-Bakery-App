import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 11,
    paddingBottom: 10,
    backgroundColor: "#3eaef4",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 10,
    color: "#fff",
  },
  nameText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  notificationIcon: {
    marginLeft: 16,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 10,
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    position: "absolute",
    top: 90,
    right: 10,
    backgroundColor: '',  // Xóa hoặc làm nền trong suốt
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: 300,
    maxHeight: 700,
  
    // Các thuộc tính bóng
    shadowColor: "#000", // Màu bóng
    shadowOffset: { width: 0, height: 2 }, // Độ nghiêng bóng
    shadowOpacity: 0.25, // Độ mờ của bóng
    shadowRadius: 4, // Kích thước bóng
    elevation: 10, // Để bóng hiển thị trên Android
    flexDirection: "column",
    flexGrow: 1, // Cho phép modal mở rộng với nội dung
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  markAllReadButton: {
    marginTop: 5,
    marginBottom: 2,
    alignSelf: "flex-end",
  },
  markAllReadText: {
    fontSize: 12,
    color: "#3eaef4",
  },
  notificationListContainer: {
    height: "auto", // Đảm bảo rằng chiều cao của list không bị giới hạn
    maxHeight: 500,
  },
  notificationCard: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#777",
  },
  unreadNotification: {
    borderLeftWidth: 4,
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3eaef4",
    marginLeft: 8,
  },
  showMoreContainer: {
    alignItems: "center", // Căn giữa nút
    justifyContent: "center",
  },
  showMoreButton: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    marginTop: 10,
  },
  showMoreText: {
    color: "#3eaef4",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 10,
  },
  urgentNotification: {
    backgroundColor: "#ffeeee",
    borderLeftColor: "red",
  },
  infoNotification: {
    backgroundColor: "#f0f8ff",
    borderLeftColor: "#3eaef4",
  },
  successNotification: {
    backgroundColor: "#f0fff0",
    borderLeftColor: "#00cc66",
  },
  defaultNotification: {
    backgroundColor: "#f8f8f8",
    borderLeftColor: "#888",
  },
  emptyNotificationContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emptyNotificationText: {
    marginTop: 12,
    color: "#777",
    textAlign: "center",
  },
});

export default styles;
