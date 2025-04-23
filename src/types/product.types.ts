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