<script lang="ts">
import {unsplashData} from "$lib/state.svelte";
import CollectionCard from "$lib/components/CollectionCard.svelte";
import Plus from "$lib/assets/Plus.svg";
</script>



<div>
    <h1>Collections</h1>
    <p>Explore the world through collections of beautiful photos free to use under the <a href="https://unsplash.com/license">Unsplash License</a>.</p>

    <div class="grid-container">
        {#each unsplashData.collections as collection }
            <CollectionCard collectionName={collection.collectionName} imageIds={collection.photoIds}  />
        {/each}
        <div class="addCollection">
            <img src={Plus} alt="add Collection icon">
            <p>Add new collection</p>
        </div>
    </div>
</div>


<style>
    h1,  h1 + p{
        text-align: center;
    }
    h1{
        background: linear-gradient(to right, #F2C593, #8A3282);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    img{
        fill: #6C727F;
    }
    a{
        color: black;
        font-weight: bold;
    }
    .addCollection{
        background-color: #E5E7EBCC;
        color: #6C727F;
    }
</style>