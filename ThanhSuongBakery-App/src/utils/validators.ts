import { Login, Register } from "../types/auth.types";


export const validateRegister = (form: Register) => {
  if (!form.name.trim()) {
    return "Vui lòng nhập tên!";
  }
  if (!form.phone.trim()) {
    return "Vui lòng nhập số điện thoại!";
  }
  if (!form.password.trim()) {
    return "Vui lòng nhập mật khẩu.";
  }
  if (!form.confirm_password.trim()) {
    return "Vui lòng xác nhận mật khẩu!";
  }
  if (form.password !== form.confirm_password) {
    return "Mật khẩu và xác nhận mật khẩu không khớp!";
  }
  return null; // Không có lỗi
};

export const validateLogin = (form: Login) => {
  if (!form.phone.trim()) {
    return "Vui lòng nhập số điện thoại!";
  }
  if (!form.password.trim()) {
    return "Vui lòng nhập mật khẩu!";
  }
  return null; // Không có lỗi
};
