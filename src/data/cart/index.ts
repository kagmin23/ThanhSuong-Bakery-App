import { CartProduct } from "../../types/products.types";

export const CART_ITEMS: CartProduct[] = [
  {
    id: "1",
    name: "Bánh mì bơ tỏi",
    price: 30000,
    discount: 10,
    category: "Bánh mặn",
    quantity: 2,
    imageUrl: "https://i0.wp.com/hatinhtoplist.vn/wp-content/uploads/2022/10/Tiem-banh-sinh-nhat-tai-Ha-Tinh-2.jpg?resize=1200%2C1600&ssl=1",
  },
  {
    id: "2",
    name: "Bánh kem socola",
    price: 50000,
    category: "Bánh ngọt",
    quantity: 1,
    imageUrl: "https://i0.wp.com/hatinhtoplist.vn/wp-content/uploads/2022/10/Tiem-banh-sinh-nhat-tai-Ha-Tinh-2.jpg?resize=1200%2C1600&ssl=1",
  },
  {
    id: "3",
    name: "Bánh flan",
    price: 20000,
    discount: 5,
    category: "Tráng miệng",
    quantity: 3,
    imageUrl: "https://i0.wp.com/hatinhtoplist.vn/wp-content/uploads/2022/10/Tiem-banh-sinh-nhat-tai-Ha-Tinh-2.jpg?resize=1200%2C1600&ssl=1",
  },
];
