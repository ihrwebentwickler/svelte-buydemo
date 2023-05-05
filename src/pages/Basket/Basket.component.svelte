<script lang="ts">
    import {onMount} from "svelte";
    import {basketStore, getBasketItems} from "../../store/basket/basket.store.";
    import type {BasketItem} from "../../store/basket/basket-item";

    export let location;
    let basketItems: BasketItem[] = [];
    // basketItems = getBasketItems();
    basketStore.subscribe(values => {
        console.log(values);
    })
</script>

<div>
    <h3>basket:</h3>
    <div>
        {#if basketItems.length > 0}
            {#each basketItems as item}
                <p>{item.product.name}</p>
            {/each}
        {:else}
            <p>No items in basket.</p>
        {/if}
    </div>
</div>