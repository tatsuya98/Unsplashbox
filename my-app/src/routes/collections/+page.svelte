<script lang="ts">
import {unsplashData} from "$lib/state.svelte";
import CollectionCard from "$lib/components/CollectionCard.svelte";
</script>



<div>
    <h1>Collections</h1>
    <p>Explore the world through collections of beautiful photos free to use under the <span>Unsplash License</span>.</p>

    <div class="grid-container">
        {#each unsplashData.collections as collection }
            <CollectionCard collectionName={collection.collectionName} imageIds={collection.photoIds}  />
        {/each}
    </div>
</div>


<style></style>