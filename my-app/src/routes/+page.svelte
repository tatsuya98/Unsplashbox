<script lang="ts">
import Searchbar from "$lib/components/Searchbar.svelte";
import {unsplashData} from "$lib/state.svelte";
</script>


<div class="flex-container">
    {#if unsplashData.images.length === 0}
    <div class="hero">
        <h1>Search</h1>
        <p>high-resolution images from Unsplash</p>
        <Searchbar />
    </div>
    {:else}
        <div class="flex-container">
            <div class="banner">
                <Searchbar />
            </div>
            <div class="column">
                {#each unsplashData.images as imageData}
                    <a  href={`/image/${imageData.id}`} aria-label="Go to image page">
                        <img src={imageData.urls.small} alt="">
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</div>


<style>
    p{
        font-size: .875rem;
    }
    .hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
    }
    .banner{
        width: 100%;
        height: 100px;
        text-align: center;
        margin-bottom: 50px;
        background-image: url("$lib/assets/gradiend-bg.svg");
        background-repeat: no-repeat;
        background-position: 45%;
        position: relative;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        font-family: 'Be Vietnam+Pro',sans-serif;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
        min-height: 80vh;
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }
    .hero{
        text-align: center;
        margin-bottom: 10px;
    }
    h1{
        margin: 0;
    }
</style>