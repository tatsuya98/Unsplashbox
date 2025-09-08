<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    const {collections: {collectionData, fetchedImages, imageData}} = data;
    const collectionObjects = collectionData[0];
    const formattedDate = new Date(imageData.created_at).toLocaleDateString();
</script>


<div class="grid-container">
    <img src={imageData.urls.regular} alt={imageData.alt_description}>
    <div class="flex-container">
        <div class="user">
            <img src={imageData.user.profile_image.small} alt={`profile picture of ${imageData.user.first_name} ${imageData.user.last_name}`}>
            <span>{`${imageData.user.first_name} ${imageData.user.last_name}`}</span>

        </div>
        <p>{`Published on ${formattedDate}`}</p>
        <div class="buttons">
            <button>
                <span><img src="$lib/assets/plus.svg" alt=""></span>
                <span>Add to collection</span>
            </button>
            <button>
                <span><img src="$lib/assets/down%20arrow.svg.svg" alt=""></span>
                <span>Download</span>
            </button>
        </div>
        <h2>Collections</h2>
        {#each collectionObjects as collection, index}
           <div class="collection-flex">
               <div class="small-flex">
                   <img src={fetchedImages[index].urls.small} alt="">
                   <div class="text-flex">
                       <p>{collection.collection_name}</p>
                       <span>{collectionData[1][index].number_of_photos} photos</span>
                   </div>
               </div>
               <div class="action">
                   <img src="$lib/assets/Remove.svg" alt="">
                   <span>Remove</span>
               </div>
           </div>
        {/each}
    </div>
</div>
<style></style>