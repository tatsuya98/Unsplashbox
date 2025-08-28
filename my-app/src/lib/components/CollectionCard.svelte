<script lang="ts">
    import type {Photo} from "$lib/types";
    import {onMount} from "svelte";

    const {collectionName, imageIds} = $props()
    let fetchedImages:Photo[] = [];
    function fetchImage(id:string){
        fetch()
    }
    onMount(() => {
        for (let i = 0; i < 3; i++){
            fetchImage(imageIds[i])
        }
    })
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