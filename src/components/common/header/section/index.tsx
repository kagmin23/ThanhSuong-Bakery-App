import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { FlatList, Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface HeaderSectionProps {
  name: string;
  avatarUrl: string;
  notifications: { type: string; message: string }[]; // Thay đổi cấu trúc thông báo
  onNotificationPress: () => void;
  showAllNotifications: boolean;
  toggleShowAllNotifications: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  name,
  avatarUrl,
  notifications,
  onNotificationPress,
  showAllNotifications,
  toggleShowAllNotifications,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const unreadCount = notifications.length;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text category="s1" style={styles.greetingText}>
          Welcome!
        </Text>
        <Text category="h6" style={styles.nameText}>
          {name}
        </Text>
      </View>

      <TouchableOpacity onPress={() => { toggleModal(); onNotificationPress(); }} style={styles.notificationIcon}>
        <MaterialIcons name="notifications-on" size={24} color="white" />
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Thông báo</Text>

            <FlatList
              data={notifications}
              renderItem={({ item }) => (
                <View style={[styles.notificationCard, getNotificationStyle(item.type)]}>
                  <Text style={styles.notificationText}>{item.message}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              style={styles.notificationList}
            />

            {notifications.length > 5 && (
              <TouchableOpacity onPress={toggleShowAllNotifications} style={styles.showMoreButton}>
                <Text style={styles.showMoreText}>
                  {showAllNotifications ? "Thu gọn" : "Xem thêm"}
                </Text>
              </TouchableOpacity>
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

export default HeaderSection;
