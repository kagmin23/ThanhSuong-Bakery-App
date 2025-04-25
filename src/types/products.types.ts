export interface BakeryProduct {
    id: string;
    name: string;
    category: string;
    imageUrl: string;
    price: number;
    discount?: number;
    isFavorite: boolean;
}

export type Category = string;

export interface CartProduct {
    id: string;
    name: string;
    price: number;
    discount?: number;
    category: string;
    quantity: number;
    imageUrl: string;
}

export interface SaleOffProduct {
    id: string;
    name: string;
    price: number;
    discount: number;
    category: string;
    imageUrl: string;
    isFavorite: boolean;
}

export interface SaleOffFilter {
    category: string | null;
    minDiscount: number | null;
    sortBy: 'discount' | 'price' | 'popularity' | null;
}