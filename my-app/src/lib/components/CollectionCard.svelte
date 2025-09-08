<script lang="ts">
    import type {Photo} from "$lib/types";

    const {collectionName, imageIds} = $props()
    let fetchedImages:Photo[] = [];
</script>

<div class="flex-container">
    <div class="grid-container">
        {#each fetchedImages as data}
            <img src={data.urls.small} alt="">
        {/each}
    </div>
    <p>{collectionName}</p>
    <p>{imageIds.length} images</p>
</div>



<style></style>