import { BakeryProduct } from "./products.types";

export type RootStackOrderParamList = {
  ProductDetails: {
    product: BakeryProduct;
    onToggleFavorite: (id: string) => void;
    onAddToCart: (id: string) => void;
  };
  Checkout: {
    productId: string;
    quantity: number;
    discountedPrice: number;
  };
};
