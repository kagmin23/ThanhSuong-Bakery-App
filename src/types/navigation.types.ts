import { BakeryProduct } from "./products.types";

export type CartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string; // Add missing property
  imageUrl: string; // Add missing property
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainApp: undefined;
  Home: undefined;
  Cart: undefined;
  Checkout: { cartItems: CartProduct[]; totalPrice: number };
  Sale: undefined;
  Shop: undefined;
  Profile: undefined;
  ProductDetails: {
    product: BakeryProduct;
    onToggleFavorite: (id: string) => void;
    onAddToCart: (id: string) => void;
  };
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Sale: undefined;
  Shop: undefined;
  Profile: undefined;
};