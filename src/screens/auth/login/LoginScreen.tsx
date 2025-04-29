import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { LoadingSpinner } from "../../../components/common/loading";
import { Login } from "../../../types/auth.types";
import { RootStackLoginParamList } from "../../../types/navigation.types";
import styles from "./styles";

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackLoginParamList>>();
  const [form, setForm] = useState<Login>({ phone: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  // 👉 Thêm state lỗi
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    let hasError = false;

    if (!form.phone.trim()) {
      setPhoneError("Vui lòng nhập số điện thoại!");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!form.password.trim()) {
      setPasswordError("Vui lòng nhập mật khẩu!");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return; // Ngưng không thực hiện login nếu có lỗi
    }

    setIsLoading(true);

    const hardcodedPhone = "0123456789";
    const hardcodedPassword = "123";

    setTimeout(() => {
      if (
        form.phone === hardcodedPhone &&
        form.password === hardcodedPassword
      ) {
        navigation.replace("MainApp");
      } else {
        setPasswordError("Số điện thoại hoặc mật khẩu không đúng");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://toplist.vn/images/800px/nguyen-son-bakery-1161923.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Thanh Sương Bakery</Text>
            <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>
          </View>

          {/* Input số điện thoại */}
          <View style={styles.inputContainer}>
            <Icon name="phone-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor="#ccc"
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(text) => {
                setForm({ ...form, phone: text });
                if (text.trim()) setPhoneError("");
              }}
            />
          </View>
          {phoneError ? (
            <Text style={styles.errorPhone}>
              <Text style={{ color: "red", fontSize: 20 }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>{phoneError}</Text>
            </Text>
          ) : null}
          {/* Input mật khẩu */}
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={form.password}
              onChangeText={(text) => {
                setForm({ ...form, password: text });
                if (text.trim()) setPasswordError("");
              }}
            />
          </View>
          {passwordError ? (
            <Text style={styles.errorPassword}>
              <Text style={{ color: "red",  fontSize: 20  }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>{passwordError}</Text>
            </Text>
          ) : null}

          {/* Nút đăng nhập */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          {/* Nút chuyển qua đăng ký */}
          <View style={styles.bottomContainer}>
            <Text style={styles.registerPrompt}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Loading */}
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
