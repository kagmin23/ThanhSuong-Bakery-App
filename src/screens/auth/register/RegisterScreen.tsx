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
import { Register } from "../../../types/auth.types";
import { RootStackParamList } from "../../../types/navigation.types";
import styles from "./styles";

export const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [form, setForm] = useState<Register>({
    name: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState<{
    name: string;
    phone: string;
    password: string;
    confirm_password: string;
  }>({
    name: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    let hasError = false;
    const newErrors = {
      name: "",
      phone: "",
      password: "",
      confirm_password: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập tên của bạn!";
      hasError = true;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại!";
      hasError = true;
    } else if (!/^[0-9]{9,11}$/.test(form.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
      hasError = true;
    }

    if (!form.password.trim()) {
      newErrors.password = "Vui lòng nhập mật khẩu!";
      hasError = true;
    } else if (form.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
      hasError = true;
    }

    if (!form.confirm_password.trim()) {
      newErrors.confirm_password = "Vui lòng xác nhận mật khẩu!";
      hasError = true;
    } else if (form.confirm_password !== form.password) {
      newErrors.confirm_password = "Mật khẩu xác nhận không khớp!";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      navigation.replace("Login");
      setIsLoading(false);
    }, 1500);
  };

  const handleLogin = () => {
    navigation.navigate("Login");
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
            <Text style={styles.subtitle}>Đăng ký tài khoản mới</Text>
          </View>

          {/* Tên */}
          <View style={styles.inputContainer}>
            <Icon name="person-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Tên của bạn"
              placeholderTextColor="#ccc"
              keyboardType="default"
              value={form.name}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
                if (text.trim()) setErrors((prev) => ({ ...prev, name: "" }));
              }}
            />
          </View>
          {errors.name ? (
            <Text style={styles.errorName}>
              <Text style={{ color: "red", fontSize: 20 }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>{errors.name}</Text>
            </Text>
          ) : null}

          {/* Số điện thoại */}
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
                if (text.trim()) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
            />
          </View>
          {errors.phone ? (
            <Text style={styles.errorPhone}>
              <Text style={{ color: "red", fontSize: 20 }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>{errors.phone}</Text>
            </Text>
          ) : null}

          {/* Địa chỉ */}
          <View style={styles.inputContainer}>
            <Icon name="home-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Địa chỉ (có thể cập nhật sau)"
              placeholderTextColor="#ccc"
              keyboardType="default"
              value={(form as any).address || ""}
              onChangeText={(text) => {
                setForm({ ...form, address: text });
              }}
            />
          </View>

          {/* Mật khẩu */}
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
                if (text.trim())
                  setErrors((prev) => ({ ...prev, password: "" }));
              }}
            />
          </View>
          {errors.password ? (
            <Text style={styles.errorPassword}>
              <Text style={{ color: "red", fontSize: 20 }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>{errors.password}</Text>
            </Text>
          ) : null}

          {/* Xác nhận mật khẩu */}
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={form.confirm_password}
              onChangeText={(text) => {
                setForm({ ...form, confirm_password: text });
                if (text.trim())
                  setErrors((prev) => ({ ...prev, confirm_password: "" }));
              }}
            />
          </View>
          {errors.confirm_password ? (
            <Text style={styles.errorConfirmPassword}>
              <Text style={{ color: "red", fontSize: 20 }}>* </Text>
              <Text style={{ fontStyle: "italic" }}>
                {errors.confirm_password}
              </Text>
            </Text>
          ) : null}
          {/* Nút đăng ký */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Đăng ký</Text>
          </TouchableOpacity>

          {/* Chuyển sang đăng nhập */}
          <View style={styles.bottomContainer}>
            <Text style={styles.loginPrompt}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Đăng nhập ngay</Text>
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
