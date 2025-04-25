import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    Button,
    Divider,
    IndexPath,
    Input,
    Layout,
    Select,
    SelectItem,
    Text,
} from "@ui-kitten/components";
import React, { useCallback, useMemo, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PaymentModal } from "../../components/modal/checkout";
import { RootStackParamList } from "../../types/navigation.types";
import { CartProduct } from "../../types/products.types";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">;

export const CheckoutScreen = ({ route }: Props) => {
  const { cartItems, totalPrice } = route.params;
  const insets = useSafeAreaInsets();

  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [distance, setDistance] = useState<number | null>(null); // Simulated distance
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Store selected image URI

  const distanceOptions = ["Dưới 3 km", "3 - 5 km", "5 - 10 km"];

  const shippingFee = useMemo(() => {
    if (deliveryMethod === "pickup" || !distance) return 0;
    if (distance <= 1) return 0; // Dưới 3 km
    if (distance <= 3) return 10000; // 3 - 5 km
    return 20000; // 5 - 10 km
  }, [deliveryMethod, distance]);

  const totalPayment = totalPrice + shippingFee;

  const handleDeliveryMethodSelect = useCallback(
    (index: IndexPath | IndexPath[]) => {
      if ("row" in index) {
        setDeliveryMethod(index.row === 0 ? "delivery" : "pickup");
      }
    },
    []
  );

  const handleDistanceSelect = useCallback((index: IndexPath | IndexPath[]) => {
    if ("row" in index) {
      const distanceValues = [1, 3, 5]; // Map to Dưới 3 km, 3 - 5 km, 5 - 10 km
      setDistance(distanceValues[index.row]);
    }
  }, []);

  const handlePaymentMethodSelect = useCallback(
    (index: IndexPath | IndexPath[]) => {
      if ("row" in index) {
        setPaymentMethod(index.row === 0 ? "cash" : "online");
      }
    },
    []
  );

  const getDistanceDisplay = useMemo(() => {
    if (!distance) return "Chọn khoảng cách";
    if (distance <= 1) return "Dưới 3 km";
    if (distance <= 3) return "3 - 5 km";
    return "5 - 10 km";
  }, [distance]);

  const renderItem = ({ item }: { item: CartProduct }) => {
    const hasDiscount = item.discount && item.discount > 0;
    const finalPrice = hasDiscount
      ? item.price - (item.price * item.discount!) / 100
      : item.price;
    const totalItemPrice = finalPrice * item.quantity;

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>
            {finalPrice.toLocaleString()}đ x {item.quantity} ={" "}
            {totalItemPrice.toLocaleString()}đ
          </Text>
        </View>
      </View>
    );
  };

  const handleConfirm = () => {
    // Handle order confirmation (e.g., send to backend)
    console.log({
      cartItems,
      totalPrice,
      deliveryMethod,
      recipientName,
      address,
      phone,
      notes,
      shippingFee,
      paymentMethod,
      selectedImage, // Include uploaded image URI in confirmation
    });
    alert("Đơn hàng đã được xác nhận!");
  };

  return (
    <Layout style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tổng đơn hàng</Text>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </View>

        {/* Delivery Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phương thức nhận hàng</Text>
          <Select
            style={styles.selectContainer}
            value={deliveryMethod === "delivery" ? "Ship ngay" : "Ghé tiệm"}
            onSelect={handleDeliveryMethodSelect}
          >
            <SelectItem title="Ship ngay" />
            <SelectItem title="Ghé tiệm" />
          </Select>

          {deliveryMethod === "delivery" && (
            <>
              <Input
                style={styles.input}
                placeholder="Tên người nhận"
                value={recipientName}
                onChangeText={setRecipientName}
              />
              <Input
                style={styles.input}
                placeholder="Địa chỉ"
                value={address}
                onChangeText={setAddress}
              />
              <Input
                style={styles.input}
                placeholder="Số điện thoại"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
              <Input
                style={styles.input}
                placeholder="Ghi chú"
                value={notes}
                onChangeText={setNotes}
                multiline
              />
              <Select
                style={styles.selectContainer}
                placeholder="Chọn khoảng cách"
                value={getDistanceDisplay}
                onSelect={handleDistanceSelect}
              >
                <SelectItem title="Dưới 3 km" />
                <SelectItem title="3 - 5 km" />
                <SelectItem title="5 - 10 km" />
              </Select>
            </>
          )}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
          <Select
            style={styles.selectContainer}
            value={paymentMethod === "cash" ? "Tiền mặt" : "Thanh toán ngay"}
            onSelect={handlePaymentMethodSelect}
          >
            <SelectItem title="Tiền mặt" />
            <SelectItem title="Thanh toán ngay" />
          </Select>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tóm tắt thanh toán</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Tạm tính</Text>
            <Text style={styles.summaryValue}>
              {totalPrice.toLocaleString()}đ
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Phí vận chuyển</Text>
            <Text style={styles.summaryValue}>
              {shippingFee.toLocaleString()}đ
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Tổng thanh toán</Text>
            <Text style={styles.summaryValue}>
              {totalPayment.toLocaleString()}đ
            </Text>
          </View>
        </View>

        {/* Confirm/Payment Button */}
        <Button
          style={styles.confirmButton}
          onPress={paymentMethod === "cash" ? handleConfirm : () => setIsModalVisible(true)}
        >
          {paymentMethod === "cash" ? "Xác nhận" : "Thanh toán"}
        </Button>
      </ScrollView>

      {/* Payment Modal */}
      <PaymentModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </Layout>
  );
};