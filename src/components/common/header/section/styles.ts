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
    top: 50,
    right: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: 250,
    maxHeight: 300,
    overflow: "scroll",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },
  modalScrollView: {
    maxHeight: 250, // Giới hạn chiều cao của phần nội dung để cuộn được
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 14,
  },
  noNotificationsText: {
    fontSize: 14,
    color: "gray",
  },
  viewMoreButton: {
    marginTop: 10,
    alignItems: "center",
  },
  viewMoreText: {
    color: "#3eaef4",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  closeButton: {
    bottom: 245,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  notificationList: {
    maxHeight: 300,
  },
  showMoreButton: {
    marginBottom: -35,
    marginTop: 10,
    alignItems: "center",
  },
  showMoreText: {
    color: "#000000",
  },
  notificationCard: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  urgentNotification: {
    backgroundColor: "red",
    color: "white",
  },
  infoNotification: {
    backgroundColor: "#cfe8fc",
    color: "white",
  },
  successNotification: {
    backgroundColor: "#00ff7f",
    color: "white",
  },
  defaultNotification: {
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
});

export default styles;
