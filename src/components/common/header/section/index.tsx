import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "@ui-kitten/components";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import React, { useMemo } from "react";
import { FlatList, Image, Modal, TouchableOpacity, View } from "react-native";
import { RootStackLoginParamList } from "../../../../types/navigation.types";
import { HeaderSectionProps } from "../../../../types/notifications.types";
import styles from "./styles";

export const HeaderSection: React.FC<HeaderSectionProps & {
  onLogout: () => void;
}> = ({
  name,
  avatarUrl,
  notifications,
  onNotificationPress,
  onNotificationRead,
  onMarkAllAsRead,
  showAllNotifications,
  toggleShowAllNotifications,
  onLogout,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackLoginParamList>>();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isAvatarModalVisible, setIsAvatarModalVisible] = React.useState(false);

  // Đếm số thông báo chưa đọc
  const unreadCount = useMemo(() => {
    return notifications.filter((item) => !item.isRead).length;
  }, [notifications]);

  const toggleNotificationModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      onMarkAllAsRead();
    }
  };

  const toggleAvatarModal = () => {
    setIsAvatarModalVisible(!isAvatarModalVisible);
  };

  const handleProfilePress = () => {
    toggleAvatarModal();
    navigation.navigate('Profile');
  };

  const handleLogoutPress = () => {
    toggleAvatarModal();
    onLogout();
    setTimeout(() => {
      navigation.replace('Login'); // Replace with actual logout logic if needed
    }, 1500);
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
      <TouchableOpacity onPress={toggleAvatarModal} activeOpacity={0.7}>
        <Image
          source={{ uri: avatarUrl || "https://toplist.vn/images/800px/nguyen-son-bakery-1161923.jpg" }}
          style={styles.avatar}
        />
      </TouchableOpacity>
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
          toggleNotificationModal();
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
        onRequestClose={toggleNotificationModal}
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

            {notifications.length > 5 && (
              <View style={styles.showMoreContainer}>
                <TouchableOpacity onPress={toggleShowAllNotifications} style={styles.showMoreButton}>
                  <Text style={styles.showMoreText}>
                    {showAllNotifications ? "Thu gọn" : "Xem thêm"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity onPress={toggleNotificationModal} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Avatar Popup Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isAvatarModalVisible}
        onRequestClose={toggleAvatarModal}
      >
        <TouchableOpacity
          style={styles.avatarModalOverlay}
          activeOpacity={1}
          onPress={toggleAvatarModal}
        >
          <View style={styles.avatarModalContainer}>
            <TouchableOpacity style={styles.avatarModalButton} onPress={handleProfilePress}>
              <MaterialIcons name="person" size={20} color="#3eaef4" />
              <Text style={styles.avatarModalText}>Xem hồ sơ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarModalButton} onPress={handleLogoutPress}>
              <MaterialIcons name="logout" size={20} color="#3eaef4" />
              <Text style={styles.avatarModalText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};