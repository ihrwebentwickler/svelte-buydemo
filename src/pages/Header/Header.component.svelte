<script lang="ts">
    import {basketStore} from "../../store/basket/basket.store.";

    let basketInfo: { productAmount: number } = {productAmount: 0};

    basketStore.subscribe((basketItems: basketStore[]) => {
        basketInfo = {productAmount: basketItems.length};
    });
</script>

<style lang="scss">
  header {
    nav {
      a {
        color: blue;
      }

      .basketinfo {
        margin-left: 12%;
      }
    }

    hr {
      color: black;
      margin: 4px 0 20px 0;
    }
  }
</style>

<header>
    <nav class="mt-1">
        <a href="/products">Products</a>
        <a class="basketinfo" href="/basket">Basket (contains {basketInfo.productAmount} products)</a>
    </nav>
    <hr>
</header>
