import type { ProductProps } from "./ProductProps";

export interface OrderProps extends ProductProps {
    amount: number;
    clientNote: string;
}