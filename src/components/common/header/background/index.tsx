import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, ImageBackground, View } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const images = [
  'https://banhsinhnhatmini.com/wp-content/uploads/2024/04/bento.jpg',
  'https://mms.img.susercontent.com/vn-11134513-7r98o-lstyskmhmffd37@resize_ss1242x600!@crop_w1242_h600_cT',
  'https://1phutsaigon.vn/wp-content/uploads/2022/08/Lipi-Cake-1.jpg',
  'https://cdn.tgdd.vn/2020/09/CookProduct/1260-1200x676-52.jpg'
];

export const HeaderBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      Animated.timing(slideAnim, {
        toValue: -nextIndex * width,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Layout style={[styles.header, { width, overflow: "hidden" }]}>
      <Animated.View
        style={{
          flexDirection: "row",
          width: '100%',
          height: 150,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {images.map((img, index) => (
          <ImageBackground
            key={index}
            source={{ uri: img }}
            style={{ width, height: "100%" }}
            imageStyle={{ borderRadius: 0 }}
            blurRadius={0}
          >
            <View style={styles.overlay} />
          </ImageBackground>
        ))}
      </Animated.View>

      {/* Text title ở trên ảnh */}
      <View style={[styles.overlay, { position: "absolute", width, height: "100%" }]} />
      <Text category="h1" style={[styles.title, { position: "absolute" }]}>
        Thanh Sương Bakery
      </Text>
    </Layout>
  );
};

export default HeaderBackground;
