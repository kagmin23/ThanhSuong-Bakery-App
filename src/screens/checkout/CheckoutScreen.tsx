import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Card,
  Divider,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PaymentModal } from '../../components/modal/checkout';
import { RootStackParamList } from '../../types/navigation.types';
import { CartProduct } from '../../types/products.types';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

export const CheckoutScreen = ({ route }: Props) => {
  const { cartItems, totalPrice } = route.params;
  const insets = useSafeAreaInsets();

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [recipientName, setRecipientName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const [isDistanceModalOpen, setIsDistanceModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Animation for sections
  const [sectionOpacity] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(sectionOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const distanceOptions = [
    { label: 'Dưới 3 km', value: 1 },
    { label: '3 - 5 km', value: 3 },
    { label: '5 - 10 km', value: 5 },
  ];

  const shippingFee = useMemo(() => {
    if (deliveryMethod === 'pickup' || !distance) return 0;
    if (distance <= 1) return 0;
    if (distance <= 3) return 10000;
    return 20000;
  }, [deliveryMethod, distance]);

  const totalPayment = totalPrice + shippingFee;

  const handleDeliveryMethodSelect = useCallback((method: 'delivery' | 'pickup') => {
    setDeliveryMethod(method);
    setIsDeliveryModalOpen(false);
  }, []);

  const handleDistanceSelect = useCallback((value: number) => {
    setDistance(value);
    setIsDistanceModalOpen(false);
  }, []);

  const handlePaymentMethodSelect = useCallback((method: 'cash' | 'online') => {
    setPaymentMethod(method);
    setIsPaymentModalOpen(false);
  }, []);

  const getDistanceDisplay = useMemo(() => {
    if (!distance) return 'Chọn khoảng cách';
    if (distance <= 1) return 'Dưới 3 km';
    if (distance <= 3) return '3 - 5 km';
    return '5 - 10 km';
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
            {finalPrice.toLocaleString()}đ x {item.quantity} = {totalItemPrice.toLocaleString()}đ
          </Text>
        </View>
      </View>
    );
  };

  const handleConfirm = () => {
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
      selectedImage,
    });
    alert('Đơn hàng đã được xác nhận!');
  };

  const renderDropdownModal = (
    isOpen: boolean,
    onClose: () => void,
    options: { label: string; value: any }[],
    onSelect: (value: any) => void,
    title: string
  ) => (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          {options.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.modalItem}
              onPress={() => onSelect(option.value)}
            >
              <Text style={styles.modalItemText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <Button
            style={styles.modalCloseButton}
            onPress={onClose}
            appearance="outline"
          >
            Đóng
          </Button>
        </View>
      </View>
    </Modal>
  );

  return (
    <Layout style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Order Summary */}
        <Animated.View style={[styles.section, { opacity: sectionOpacity }]}>
          <Text style={styles.sectionTitle}>Tổng đơn hàng</Text>
          <Card style={styles.card}>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              scrollEnabled={false}
            />
          </Card>
        </Animated.View>

        {/* Delivery Method */}
        <Animated.View style={[styles.section, { opacity: sectionOpacity }]}>
          <Text style={styles.sectionTitle}>Phương thức nhận hàng</Text>
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setIsDeliveryModalOpen(true)}
            >
              <Ionicons name="car-outline" size={24} color="#3366FF" style={styles.icon} />
              <Text style={styles.dropdownText}>
                {deliveryMethod === 'delivery' ? 'Ship ngay' : 'Ghé tiệm'}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#333333" />
            </TouchableOpacity>
            {deliveryMethod === 'delivery' && (
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
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={() => setIsDistanceModalOpen(true)}
                >
                  <Ionicons name="map-outline" size={24} color="#3366FF" style={styles.icon} />
                  <Text style={styles.dropdownText}>{getDistanceDisplay}</Text>
                  <Ionicons name="chevron-down" size={20} color="#333333" />
                </TouchableOpacity>
              </>
            )}
          </Card>
        </Animated.View>

        {/* Payment Method */}
        <Animated.View style={[styles.section, { opacity: sectionOpacity }]}>
          <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setIsPaymentModalOpen(true)}
            >
              <Ionicons name="card-outline" size={24} color="#3366FF" style={styles.icon} />
              <Text style={styles.dropdownText}>
                {paymentMethod === 'cash' ? 'Tiền mặt' : 'Thanh toán ngay'}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#333333" />
            </TouchableOpacity>
          </Card>
        </Animated.View>

        {/* Summary */}
        <Animated.View style={[styles.section, { opacity: sectionOpacity }]}>
          <Text style={styles.sectionTitle}>Tóm tắt thanh toán</Text>
          <Card style={styles.card}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Tạm tính</Text>
              <Text style={styles.summaryValue}>{totalPrice.toLocaleString()}đ</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Phí vận chuyển</Text>
              <Text style={styles.summaryValue}>{shippingFee.toLocaleString()}đ</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Tổng thanh toán</Text>
              <Text style={styles.summaryValue}>{totalPayment.toLocaleString()}đ</Text>
            </View>
          </Card>
        </Animated.View>

        {/* Confirm/Payment Button */}
        <Button
          style={styles.confirmButton}
          onPress={paymentMethod === 'cash' ? handleConfirm : () => setIsModalVisible(true)}
        >
          {paymentMethod === 'cash' ? 'Xác nhận' : 'Thanh toán'}
        </Button>
      </ScrollView>

      {/* Dropdown Modals */}
      {renderDropdownModal(
        isDeliveryModalOpen,
        () => setIsDeliveryModalOpen(false),
        [
          { label: 'Ship ngay', value: 'delivery' },
          { label: 'Ghé tiệm', value: 'pickup' },
        ],
        handleDeliveryMethodSelect,
        'Chọn phương thức nhận hàng'
      )}
      {renderDropdownModal(
        isDistanceModalOpen,
        () => setIsDistanceModalOpen(false),
        distanceOptions,
        handleDistanceSelect,
        'Chọn khoảng cách'
      )}
      {renderDropdownModal(
        isPaymentModalOpen,
        () => setIsPaymentModalOpen(false),
        [
          { label: 'Tiền mặt', value: 'cash' },
          { label: 'Thanh toán ngay', value: 'online' },
        ],
        handlePaymentMethodSelect,
        'Chọn phương thức thanh toán'
      )}

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