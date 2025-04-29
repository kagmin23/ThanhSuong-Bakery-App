import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingSpinner } from "../../../components/common/loading";
import { Register } from "../../../types/auth.types";
import { RootStackLoginParamList } from "../../../types/navigation.types";
import styles from "./styles";

export const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackLoginParamList>>();
  const [form, setForm] = useState<Register>({ phone: "", password: "", confirm_password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (!form.phone || !form.password || !form.confirm_password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ số điện thoại, mật khẩu và xác nhận mật khẩu.");
      return;
    }

    if (form.password !== form.confirm_password) {
      Alert.alert("Lỗi", "Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    setIsLoading(true);

    const hardcodedPhone = "0123456789";
    const hardcodedPassword = "123";

    setTimeout(() => {
      if (form.phone === hardcodedPhone && form.password === hardcodedPassword) {
        Alert.alert("Thành công", "Đăng ký thành công! Vui lòng đăng nhập.");
        navigation.replace('Login');
      } else {
        Alert.alert("Lỗi", "Số điện thoại đã tồn tại hoặc mật khẩu không hợp lệ.");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
            <Text style={styles.subtitle}>Đăng ký tài khoản mới</Text>
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

          <View style={styles.inputContainer}>
            <Icon name="lock-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={form.confirm_password}
              onChangeText={(text) => setForm({ ...form, confirm_password: text })}
            />
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Đăng ký</Text>
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Text style={styles.loginPrompt}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Đăng nhập ngay</Text>
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