<script lang="ts">
    import {onMount} from "svelte";
    import type {Product} from "../../models/product";
    import {addToBasket} from "../../store/basket/basket.store.";

    let products: Product[] = [];

    onMount(async () => {
        try {
            products = await fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json());
            products.map(item => item.price = 122);
        } catch (error: any) {
            console.error(error.message);
        }
    });

    function onClickAddToBasket(item: Product) {
        addToBasket(item);
    }
</script>

<style lang="scss">
  p {
    line-height: 1.5;
  }

  .grid {
    div {
      padding: 8px;
      border: 2px solid silver;
      border-radius: 2px;
    }
  }
</style>

<div>
    <h3>Products:</h3>
</div>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2 mt-6">
    {#await products}
        <p>...Loading</p>
    {:then products }
        {#each products as item, index}
            <div>
                <p>ArtNr: {item.id}</p>
                <p>ArtName: {item.name}</p>
                <p>ArtPreis: {item.price} €</p>
                <p>ArtHersteller: {item.username}</p>
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
