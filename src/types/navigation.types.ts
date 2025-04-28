import { CartProduct } from "./products.types";

export type RootStackParamList = {
  Cart: undefined;
  Checkout: { cartItems: CartProduct[]; totalPrice: number };
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Sale: undefined;
  Shop: undefined;
  Profile: undefined;
};