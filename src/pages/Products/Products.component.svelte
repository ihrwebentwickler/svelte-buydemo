<script lang="ts">
    import {onMount} from "svelte";

    import {addToBasket} from "../../store/basket/basket.store.";
    import type {Product} from "../../models/product";

    let products: Product[] = [];

    onMount(async () => {
        try {
            products = await fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json());
            products.map(item => item.price = 100);
        } catch (error: any) {
            console.error(error.message);
        }
    });

    function onClickAddToBasket(item: Product): void {
        addToBasket(item);
    }
</script>

<div>
    <h3>Products:</h3>
</div>

<div class="grid grid-cols-1 md:grid-cols-4 gap-3 gap-x-4 gap-y-1">
    {#await products}
        <p>...Loading</p>
    {:then products }
        {#each products as item, index}
            <div class="box">
                <p>ArtNb: {item.id}</p>
                <p>ArtName: {item.name}</p>
                <p>ArtPrice: {item.price} €</p>
                <p>Manufacturer: {item.username}</p>
                <p>
                    <button on:click={() => onClickAddToBasket(item)}>Add to basket</button>
                </p>
            </div>
        {:else}
            <div>There are no products.</div>
        {/each}
    {:catch error}
        <p>occur error.</p>
    {/await}
</div>
