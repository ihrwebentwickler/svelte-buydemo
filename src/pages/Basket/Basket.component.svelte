<script lang="ts">
    import type {BasketItem} from "../../store/basket/basket-item";
    import {basketStore, changeQuantity, removeFromBasket} from "../../store/basket/basket.store.";

    let basketItems: BasketItem[] = [];
    let totalPrice: number = 0;

    basketStore.subscribe(values => {
        basketItems = values;
        calculateTotalPrice();
    })

    function calculateTotalPrice(): void {
        if (basketItems.length > 0) {
            totalPrice = basketItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
        }
    }

    function onClickAddAmount(item: BasketItem): void {
        if (item.quantity < 100) {
            changeQuantity(item.product, item.quantity + 1);
        }
    }

    function onClickSubstractAmount(item: BasketItem): void {
        if (item.quantity > 0) {
            changeQuantity(item.product, item.quantity - 1);
        }
    }

    function onClickRemoveProduct(item: BasketItem): void {
        removeFromBasket(item.product);
    }
</script>

<div>
    <h3>Your current basket:</h3>
    <div class="mt-2">
        {#if basketItems.length > 0}
            {#each basketItems as item}
                <div class="box">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div>
                            <span class="align-sub">{item.product.name}</span>
                        </div>
                        <div>
                            <button on:click={() => onClickAddAmount(item)}>Add</button>
                            <button on:click={() => onClickSubstractAmount(item)}>Del</button>
                            {#if item.quantity === 0}
                                <button on:click={() => onClickRemoveProduct(item)}>RM</button>
                            {/if}
                        </div>
                        <div>
                            <span class="align-sub">
                                Amount: {item.quantity}, SP: {item.product.price}
                                €, TP: {item.quantity * item.product.price} €
                            </span>
                        </div>
                    </div>
                </div>
            {/each}
            <div class="mt-2">
                <p><b>Total: {totalPrice} €</b></p>
            </div>
        {:else}
            <p>No items in basket.</p>
        {/if}
    </div>
</div>