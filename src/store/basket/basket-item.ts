import type {Product} from "../../models/product";

export interface BasketItem {
    quantity: number;
    product: Product;
}