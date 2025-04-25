import Entypo from "@expo/vector-icons/Entypo";
import { Button, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import styles from "./styles";

type PaymentModalProps = {
  isVisible: boolean;
  onClose: () => void;
  selectedImage: string | null;
  setSelectedImage: (uri: string | null) => void;
};

export const PaymentModal = ({
  isVisible,
  onClose,
  selectedImage,
  setSelectedImage,
}: PaymentModalProps) => {
  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.log("ImagePicker Error: ", response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setSelectedImage(response.assets[0].uri || null);
        }
      }
    );
  };

  return (
    <Modal
      visible={isVisible}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Nút X để đóng modal */}
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <Entypo name="cross" size={24} color="gray" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Thông tin thanh toán</Text>

        <Image
          source={{
            uri:
              selectedImage ||
              "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com",
          }}
          style={styles.qrImage}
        />

        <Text style={styles.modalText}>Chủ tài khoản: Phan Thi Thanh Suong</Text>
        <Text style={styles.modalText}>Ngân hàng: BIDV</Text>
        <Text style={styles.modalText}>Số tài khoản: 5311000001</Text>

        <Button style={styles.closeButton} onPress={handleImageUpload}>
          {() => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Entypo name="upload" size={17} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>
                Tải lên ảnh Bill để xác nhận
              </Text>
            </View>
          )}
        </Button>
      </View>
    </Modal>
  );
};
