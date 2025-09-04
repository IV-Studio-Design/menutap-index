export interface ProductProps {
    [key: string]: any;
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    image?: any;
    visible?: boolean,
    shopId: number;
    categoryId?: number;
}