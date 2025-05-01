import { CartProduct } from "../../types/products.types";

export const CART_ITEMS: CartProduct[] = [
  {
    id: "1",
    name: "Bánh mì bơ tỏi",
    price: 30000,
    discount: 10,
    category: "Bánh mặn",
    quantity: 2,
    imageUrl: "https://lh5.googleusercontent.com/proxy/HK1KVJFWYepwMkWXDqL3GCD9HRY8v3GIPG03fCRSJrmCMBRcHBOn0xKm6zI_TculAJjbZx--8R1BaNgAK95Bd1PcH6kC5KWj2snBP0juRYqvWNZZDRIia-fEUMH86oByzupnKlQnn15Ofq8RHqHtWUyF80U",
  },
  {
    id: "2",
    name: "Bánh kem socola",
    price: 50000,
    category: "Bánh ngọt",
    quantity: 1,
    imageUrl: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fcms.4handy.vn%2Fapi%2Fmedia%2Ffile%2Fbanh-kem-triple-choco-400x398.png&w=1024&q=75",
  },
  {
    id: "3",
    name: "Bánh flan",
    price: 20000,
    discount: 5,
    category: "Tráng miệng",
    quantity: 3,
    imageUrl: "https://shop.annam-gourmet.com/pub/media/wysiwyg/Tarts_Annam_Gourmet.jpg",
  },
];
