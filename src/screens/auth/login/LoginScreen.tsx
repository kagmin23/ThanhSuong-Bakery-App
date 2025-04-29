import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingSpinner } from "../../../components/common/loading";
import { Login } from "../../../types/auth.types";
import { RootStackLoginParamList } from "../../../types/navigation.types";
import styles from "./styles";

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackLoginParamList>>();
  const [form, setForm] = useState<Login>({ phone: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!form.phone || !form.password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ số điện thoại và mật khẩu.");
      return;
    }

    setIsLoading(true);

    const hardcodedPhone = "0123456789";
    const hardcodedPassword = "123";

    setTimeout(() => {
      if (form.phone === hardcodedPhone && form.password === hardcodedPassword) {
        navigation.replace('MainApp');
      } else {
        Alert.alert("Lỗi", "Số điện thoại hoặc mật khẩu không đúng.");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={{ uri: "https://toplist.vn/images/800px/nguyen-son-bakery-1161923.jpg" }} // Bakery-themed image
      style={styles.background}
    >
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Thanh Sương Bakery</Text>
            <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="phone-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor="#ccc"
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Text style={styles.registerPrompt}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <View style={styles.loadingOverlay} />
            <LoadingSpinner />
          </View>
        )}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};