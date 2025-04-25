import { BakeryProduct } from "../../../types/products.types";

export const SAMPLE_PRODUCTS: BakeryProduct[] = [
  {
    id: "1",
    name: "Bánh Croissant",
    category: "Bánh ngọt",
    imageUrl: "https://placeholder.com/bakery/croissant.jpg",
    price: 35000,
    discount: 10,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Bánh Mì Hoa Cúc",
    category: "Bánh mì",
    imageUrl: "https://placeholder.com/bakery/bread.jpg",
    price: 20000,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Bánh Cupcake Socola",
    category: "Bánh ngọt",
    imageUrl: "https://placeholder.com/bakery/cupcake.jpg",
    price: 30000,
    discount: 15,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Bánh Tiramisu",
    category: "Bánh kem",
    imageUrl: "https://placeholder.com/bakery/tiramisu.jpg",
    price: 45000,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Bánh Donut",
    category: "Bánh ngọt",
    imageUrl: "https://placeholder.com/bakery/donut.jpg",
    price: 25000,
    discount: 20,
    isFavorite: true,
  },
  {
    id: "6",
    name: "Bánh Tart Trái Cây",
    category: "Bánh kem",
    imageUrl: "https://placeholder.com/bakery/fruit-tart.jpg",
    price: 40000,
    isFavorite: false,
  },
];

export const CATEGORIES: string[] = [
  "Tất cả",
  "Bánh mặn",
  "Bánh mì",
  "Bánh kem",
  "Bánh ngọt",
  "Bánh lạnh",
  "Tráng miệng",
];
