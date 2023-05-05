<script lang="ts">
    import {Router, Route} from "svelte-routing";

    import Basket from "./pages/Basket/Basket.component.svelte";
    import Error from "./pages/Error/Error.component.svelte";
    import Header from "./pages/Header/Header.component.svelte";
    import Products from "./pages/Products/Products.component.svelte";
</script>

<Header/>
<main>
    <Router>
        <Route path='*' component="{Error}"/>
        <Route path='/' component="{Products}"/>
        <Route path="/products" component="{Products}"/>
        <Route path="/basket" component="{Basket}"/>
    </Router>
</main>
