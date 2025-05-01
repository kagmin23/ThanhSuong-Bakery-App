import { Ionicons } from "@expo/vector-icons";
import { Card, Layout, Text } from "@ui-kitten/components";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Linking,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { ShopInfo } from "../../../types/shop.types";
import styles from "./styles";

export const ShopScreen = () => {
  const shopInfo: ShopInfo = {
    name: "Thanh Sương Bakery",
    address: "Trần Hưng Đạo, Hoàn Lão, Quảng Bình",
    phone: "0123 456 789",
    introduction:
      "Thanh Sương Bakery - Mang đến những chiếc bánh ngọt ngào, chất lượng cao!",
    description:
      "Thanh Sương Bakery chuyên cung cấp các loại bánh kem, bánh mì, bánh ngọt, cà phê, trà sữa các loại. Với cam kết nguyên liệu sạch, dịch vụ tận tâm và giá cả hợp lý.",
    review: "Bánh rất ngon, phục vụ nhiệt tình!",
    rating: 4.5,
    feedback:
      "Cảm ơn quý khách đã ủng hộ. Chúng tôi sẽ tiếp tục cải thiện dịch vụ!",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/4d/5e/38/khong-gian-ti-m-banh.jpg?w=600&h=-1&s=1",
  };

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const openPhoneDialer = () => {
    Linking.openURL(`tel:${shopInfo.phone}`);
  };

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      shopInfo.address
    )}`;
    Linking.openURL(url);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 1; i <= 5; i++) {
      let starName: "star-outline" | "star" | "star-half" = "star-outline";
      if (i <= fullStars) {
        starName = "star";
      } else if (i === fullStars + 1 && hasHalfStar) {
        starName = "star-half";
      }

      stars.push(
        <Ionicons
          key={i}
          name={starName}
          size={18}
          color="#FFD700"
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <Layout style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Cover Image with Overlay - Kept as requested */}
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: shopInfo.imageUrl }}
            style={styles.coverImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Animated.Text
              style={[
                styles.shopName,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              {shopInfo.name}
            </Animated.Text>
            <Animated.View
              style={[
                styles.ratingBadge,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <Text style={styles.ratingText}>{shopInfo.rating}</Text>
              <Ionicons name="star" size={16} color="#FFF" />
            </Animated.View>
          </View>
        </View>

        {/* Quick Info Bar */}
        <Animated.View
          style={[
            styles.quickInfoBar,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.quickInfoItem}
            onPress={openPhoneDialer}
          >
            <Ionicons name="call" size={24} color="#3366FF" />
            <Text style={styles.quickInfoText}>Gọi</Text>
          </TouchableOpacity>
          <View style={styles.quickInfoDivider} />
          <TouchableOpacity style={styles.quickInfoItem} onPress={openMap}>
            <Ionicons name="location" size={24} color="#3366FF" />
            <Text style={styles.quickInfoText}>Bản đồ</Text>
          </TouchableOpacity>
          <View style={styles.quickInfoDivider} />
          <TouchableOpacity style={styles.quickInfoItem}>
            <Ionicons name="share-social" size={24} color="#3366FF" />
            <Text style={styles.quickInfoText}>Chia sẻ</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Contact Information */}
        <Animated.View
          style={[
            styles.contentSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Card style={styles.contactCard}>
            <View style={styles.contactRow}>
              <Ionicons
                name="location-outline"
                size={22}
                color="#3366FF"
                style={styles.contactIcon}
              />
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Địa chỉ</Text>
                <Text style={styles.contactText}>{shopInfo.address}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.contactRow}>
              <Ionicons
                name="call-outline"
                size={22}
                color="#3366FF"
                style={styles.contactIcon}
              />
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Điện thoại</Text>
                <Text style={styles.contactText}>{shopInfo.phone}</Text>
              </View>
            </View>
          </Card>
        </Animated.View>

        {/* About Section */}
        <Animated.View
          style={[
            styles.contentSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Giới thiệu</Text>
          <Card style={styles.infoCard}>
            <Text style={styles.introText}>{shopInfo.introduction}</Text>
            <View style={styles.divider} />
            <Text style={styles.descriptionText}>{shopInfo.description}</Text>
          </Card>
        </Animated.View>

        {/* Gallery Section */}
        <Animated.View
          style={[
            styles.contentSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Hình ảnh</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.galleryScroll}
          >
            <Image
              source={{
                uri: "https://static.vinwonders.com/production/2025/02/tiem-banh-ngon-o-sai-gon-banner.jpg",
              }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
            <Image
              source={{
                uri: "https://banghegiare.com.vn/data/news/3322/cach-lam-tra-sua-tu-ca-phe.jpg",
              }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
            <Image
              source={{
                uri: "https://banhkemhana.com/wp-content/uploads/2023/12/top-tiem-banh-kem-sinh-nhat-tai-binh-thanh-658143e6c84d7.jpg",
              }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
          </ScrollView>
        </Animated.View>

        {/* Reviews Section */}
        <Animated.View
          style={[
            styles.contentSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Đánh giá</Text>
          <Card style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.reviewRating}>
                <Text style={styles.ratingNumber}>{shopInfo.rating}</Text>
                <View style={styles.starsContainer}>
                  {renderStars(shopInfo.rating)}
                </View>
              </View>
              <TouchableOpacity style={styles.addReviewButton}>
                <Text style={styles.addReviewText}>Viết đánh giá</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.reviewContent}>
              <View style={styles.reviewItem}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Ionicons name="person" size={18} color="#FFF" />
                  </View>
                  <Text style={styles.reviewerName}>Khách hàng</Text>
                </View>
                <View style={styles.reviewStars}>
                  {renderStars(shopInfo.rating)}
                </View>
                <Text style={styles.reviewText}>"{shopInfo.review}"</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.shopResponse}>
                <Text style={styles.shopResponseLabel}>
                  Phản hồi từ cửa hàng:
                </Text>
                <Text style={styles.shopResponseText}>
                  "{shopInfo.feedback}"
                </Text>
              </View>
            </View>
          </Card>
        </Animated.View>
      </ScrollView>
    </Layout>
  );
};
