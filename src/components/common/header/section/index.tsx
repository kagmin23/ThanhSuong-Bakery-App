import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import React, { useMemo } from "react";
import { FlatList, Image, Modal, TouchableOpacity, View } from "react-native";
import { HeaderSectionProps } from "../../../../types/notifications.types";
import styles from "./styles";

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  name,
  avatarUrl,
  notifications,
  onNotificationPress,
  onNotificationRead,
  onMarkAllAsRead,
  showAllNotifications,
  toggleShowAllNotifications,
}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  // Đếm số thông báo chưa đọc
  const unreadCount = useMemo(() => {
    return notifications.filter((item) => !item.isRead).length;
  }, [notifications]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      onMarkAllAsRead();
    }
  };

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case "urgent":
        return styles.urgentNotification;
      case "info":
        return styles.infoNotification;
      case "success":
        return styles.successNotification;
      default:
        return styles.defaultNotification;
    }
  };

  // Danh sách thông báo hiển thị
  const visibleNotifications = showAllNotifications
    ? notifications.slice(0, 15)
    : notifications.slice(0, 5);

  const handleNotificationPress = (id: string) => {
    onNotificationRead(id);
  };

  const formatNotificationTime = (date: Date) => {
    try {
      return formatDistanceToNow(date, { addSuffix: true, locale: vi });
    } catch (error) {
      console.error("Error formatting timestamp:", error);
      return "Vừa xong";
    }
  };

  return (
    <View style={styles.container}>
      {/* Avatar + Name */}
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text category="s1" style={styles.greetingText}>
          Welcome!
        </Text>
        <Text category="h6" style={styles.nameText}>
          {name}
        </Text>
      </View>

      {/* Notification Icon */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          toggleModal();
          onNotificationPress();
        }}
        style={styles.notificationIcon}
      >
        <MaterialIcons name="notifications-on" size={24} color="white" />
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Notification Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={[styles.modalOverlay]}>
          <View style={[styles.modalContainer, { backgroundColor: "#FFFFFF" }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Thông báo</Text>
            </View>

            {notifications.length > 0 && (
              <TouchableOpacity onPress={onMarkAllAsRead} style={styles.markAllReadButton}>
                <Text style={styles.markAllReadText}>Đánh dấu đã đọc</Text>
              </TouchableOpacity>
            )}

            <View style={[styles.notificationListContainer, { minHeight: 100 }]}>
              {notifications.length > 0 ? (
                <FlatList
                  data={visibleNotifications}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handleNotificationPress(item.id)}
                        style={[
                          styles.notificationCard,
                          getNotificationStyle(item.type),
                          !item.isRead && styles.unreadNotification,
                          { backgroundColor: "#F9F9F9" },
                        ]}
                      >
                        <View style={styles.notificationContent}>
                          <Text style={styles.notificationText}>
                            {item.message}
                          </Text>
                          <Text style={styles.notificationTime}>
                            {formatNotificationTime(item.timestamp)}
                          </Text>
                        </View>
                        {!item.isRead && <View style={styles.unreadIndicator} />}
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={true}
                  style={{ flexGrow: 1 }}
                />
              ) : (
                <View style={styles.emptyNotificationContainer}>
                  <MaterialIcons name="notifications-off" size={48} color="#ccc" />
                  <Text style={styles.emptyNotificationText}>Không có thông báo nào</Text>
                </View>
              )}
            </View>

            {/* Đảm bảo nút "Thu gọn" hoặc "Xem thêm" nằm trong ô */}
            {notifications.length > 5 && (
              <View style={styles.showMoreContainer}>
                <TouchableOpacity onPress={toggleShowAllNotifications} style={styles.showMoreButton}>
                  <Text style={styles.showMoreText}>
                    {showAllNotifications ? "Thu gọn" : "Xem thêm"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
