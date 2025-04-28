import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Input,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { RootTabParamList } from "../../types/navigation.types";
import { ProfileUser } from "../../types/user.types";
import { styles } from "./styles";

export const ProfileScreen = () => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState<ProfileUser>({
    id: "user123",
    name: "Phan Kang Min",
    phone: "0342 555 702",
    address: "Thủ Đức, TP. Hồ Chí Minh",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: new Date(2003, 7, 17),
    create_at: new Date(2023, 2, 10),
    update_at: new Date(2023, 10, 5),
  });
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  // Animations
  const [fadeIn] = useState(new Animated.Value(0));
  const [slideUp] = useState(new Animated.Value(50));
  const [cardSlideIn] = useState(new Animated.Value(30));

  useEffect(() => {
    const animations = [
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(avatarScale, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(cardSlideIn, {
        toValue: 0,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
    ];

    Animated.stagger(150, animations).start(() => {
      console.log('AvatarSection animation completed'); // Debug
    });
  }, []);

  const formatDate = (date: Date): string => {
    return format(date, "dd/MM/yyyy");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setUserInfo((prev) => ({
        ...prev,
        update_at: new Date(),
      }));
      Alert.alert("Thông báo", "Thông tin đã được lưu thành công");
    }
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setUserInfo({
      id: "userId1",
      name: "Phan Kang Min",
      phone: "0123 456 789",
      address: "Thủ Đức, TP. Hồ Chí Minh",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      dob: new Date(2003, 7, 17),
      create_at: new Date(2023, 2, 10),
      update_at: new Date(2023, 10, 5),
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    Alert.alert("Xác nhận đăng xuất", "Bạn có chắc chắn muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => console.log("User logged out"),
      },
    ]);
  };

  const updateUserInfo = (field: keyof ProfileUser, value: any) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateInput = (field: "dob", dateString: string) => {
    try {
      const parts = dateString.split("/");
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
          const newDate = new Date(year, month, day);
          updateUserInfo(field, newDate);
        }
      }
    } catch (error) {
      console.error("Invalid date format", error);
    }
  };

  const renderInfoField = (
    icon: string,
    label: string,
    field: keyof ProfileUser,
    keyboardType: any = "default",
    multiline: boolean = false,
    isDateField: boolean = false
  ) => (
    <>
      <View style={styles.infoRow}>
        <Ionicons
          name={icon as any}
          size={22}
          color={theme["color-primary-500"]}
          style={styles.icon}
        />
        <View style={styles.infoContent}>
          <Text category="label" style={styles.label}>
            {label}
          </Text>
          {isEditing ? (
            isDateField ? (
              <Input
                value={formatDate(userInfo[field] as Date)}
                onChangeText={(value) => handleDateInput(field as "dob", value)}
                style={styles.input}
                size="small"
                placeholder="DD/MM/YYYY"
                keyboardType="numeric"
              />
            ) : (
              <Input
                value={
                  field === "dob"
                    ? formatDate(userInfo.dob)
                    : (userInfo[field] as string)
                }
                onChangeText={(value) => updateUserInfo(field, value)}
                style={styles.input}
                size="small"
                keyboardType={keyboardType}
                multiline={multiline}
                textStyle={multiline ? { minHeight: 40 } : {}}
                placeholder={`Nhập ${label.toLowerCase()}`}
              />
            )
          ) : (
            <Text category="s1" style={styles.value}>
              {field === "dob" || field === "create_at" || field === "update_at"
                ? formatDate(userInfo[field] as Date)
                : (userInfo[field] as string)}
            </Text>
          )}
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );

  const BackIcon = () => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate("Home")}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <Layout style={styles.container}>
      {/* Fixed Header Section - Doesn't scroll */}
      <View style={[styles.fixedHeaderContainer, { zIndex: 10 }]}>
        <Animated.View style={[styles.headerContainer, { opacity: fadeIn }]}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
            }}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay} />
          <TopNavigation
            title={() => <Text style={styles.headerTitle}>Hồ sơ Cá nhân</Text>}
            alignment="center"
            style={styles.topNavigation}
            accessoryLeft={BackIcon}
          />
        </Animated.View>

        {/* Avatar and Username Section - Also fixed */}
        <Animated.View
          style={[
            styles.avatarSection,
            {
              transform: [{ scale: avatarScale }],
            },
          ]}
          onLayout={() => console.log('AvatarSection rendered')} // Debug
        >
          <Avatar
            source={{ uri: userInfo.avatar }}
            style={styles.avatar}
            ImageComponent={Image}
          />
          <Text category="h5" style={styles.userName}>
            {userInfo.name}
          </Text>
          <View style={styles.userTag}>
            <Ionicons
              name="checkmark-circle"
              size={16}
              color={theme["color-primary-500"]}
            />
            <Text category="c1" style={styles.userTagText}>
              Đã xác thực
            </Text>
          </View>
        </Animated.View>
      </View>

      {/* Scrollable Content */}
      <View style={styles.scrollViewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Animated.View
            style={[
              styles.infoSection,
              {
                opacity: fadeIn,
                transform: [{ translateY: cardSlideIn }],
              },
            ]}
          >
            <Card style={styles.infoCard}>
              <View style={styles.infoContentCard}>
                {renderInfoField("person-outline", "Họ tên", "name")}
                {renderInfoField(
                  "call-outline",
                  "Số điện thoại",
                  "phone",
                  "phone-pad"
                )}
                {renderInfoField(
                  "calendar-outline",
                  "Ngày sinh",
                  "dob",
                  "default",
                  false,
                  true
                )}
                {renderInfoField(
                  "location-outline",
                  "Địa chỉ",
                  "address",
                  "default",
                  true
                )}
              </View>

              <View style={styles.metaInfoContainer}>
                <Text
                  category="c1"
                  appearance="hint"
                  style={styles.metaInfoText}
                >
                  Tạo lúc: {formatDate(userInfo.create_at)}
                </Text>
                <Text
                  category="c1"
                  appearance="hint"
                  style={styles.metaInfoText}
                >
                  Cập nhật: {formatDate(userInfo.update_at)}
                </Text>
              </View>

              <View style={styles.buttonGroup}>
                <Button
                  style={[
                    styles.actionButton,
                    {
                      backgroundColor: isEditing ? "#28a745" : "#3eaef4",
                      marginRight: isEditing ? 8 : 0,
                    },
                  ]}
                  onPress={handleEditToggle}
                  accessoryLeft={(props) => (
                    <Ionicons
                      name={isEditing ? "save-outline" : "create-outline"}
                      size={18}
                      color="white"
                    />
                  )}
                >
                  {isEditing ? "Lưu thông tin" : "Chỉnh sửa"}
                </Button>

                {isEditing && (
                  <Button
                    status="basic"
                    style={styles.cancelButton}
                    onPress={handleCancelEdit}
                    accessoryLeft={(props) => (
                      <Ionicons
                        name="close-outline"
                        size={20}
                        color="#dc3545"
                      />
                    )}
                  >
                    HỦY
                  </Button>
                )}
              </View>
            </Card>

            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={20}
                  color={theme["color-danger-500"]}
                />
                <Text
                  style={{
                    color: theme["color-danger-500"],
                    marginLeft: 8,
                    fontWeight: "600",
                    textDecorationLine: "underline",
                  }}
                >
                  ĐĂNG XUẤT
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.versionInfo}>
              <Text category="c1" appearance="hint">
                Phiên bản 1.2.0
              </Text>
              <Text category="c2" appearance="hint" style={styles.idText}>
                ID: {userInfo.id}
              </Text>
            </View>
          </Animated.View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ProfileScreen;