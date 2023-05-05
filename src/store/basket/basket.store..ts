import {get, writable} from 'svelte/store';
import type {BasketItem} from "./basket-item";
import type {Product} from "../../models/product";

export const basketStore = writable<BasketItem[]>([]);

export function removeFromBasket(itemProduct: Product): void {
    basketStore.update(basketItems => {
        return basketItems.filter(i => i.product.id !== itemProduct.id);
    });
}

export function addToBasket(itemProduct: Product): void {
    basketStore.update(basketItems => {
        const index = basketItems.findIndex(basket => basket.product.id === itemProduct.id);

        if (index === -1) {
            basketItems.push({quantity: 1, product: itemProduct});
            return basketItems;
        } else {
            basketItems[index].quantity++;
            return basketItems;
        }
    });
}

export function changeQuantity(itemProduct: Product, newQuantity: number): void {
    basketStore.update(basketItems => {
        const index = basketItems.findIndex(i => i.product.id === itemProduct.id);

        if (index !== -1) {
            basketItems[index].quantity = newQuantity;
        }

        return basketItems;
    });
}

export function getBasketItems(): BasketItem[] {
    return get(basketStore);
}