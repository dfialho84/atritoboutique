export type Photo = {
    productId: string;
    order: number;
    url: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};
