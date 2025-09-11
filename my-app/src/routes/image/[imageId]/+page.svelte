<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    const {collectionData, fetchedImages, imageData} = data;
    const formattedDate = new Date(imageData.created_at).toLocaleDateString(navigator.language,{
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    import Plus from "$lib/assets/Plus.svg"
    import DownArrow from "$lib/assets/down-arrow.svg"

</script>


<div class="grid-container">
    <img id="main-image" src={imageData.urls.small} alt={imageData.alt_description}>
    <div class="flex-container">
        <div class="user">
            <img id="profile-icon" src={imageData.user.profile_image.medium} 
                 alt={`profile picture of ${imageData.user.first_name} ${imageData.user.last_name}`}
                 width="50px"
            >
            <span>{`${imageData.user.first_name} ${imageData.user.last_name}`}</span>

        </div>
        <p>{`Published on ${formattedDate}`}</p>
        <div class="buttons">
            <button>
                <span><img src={Plus} alt=""></span>
                <span>Add to collection</span>
            </button>
            <button>
                <span><img src={DownArrow} alt=""></span>
                <span>Download</span>
            </button>
        </div>
        <h2>Collections</h2>
        {#each collectionData as collection, index}
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
<style>
    .grid-container{
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 30px;
        margin-top: 30px;
        gap: 20px;
    }
    .flex-container, .user{
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
    }
    #main-image{
        width: 80%;
    }
    #profile-icon{
        border-radius: 100%;
    }
    button{
        padding: 15px 20px;
        color: black;
        border-radius: 5px;
        font-weight: 600
    }
    img + span{
        align-self: center;
        margin-left: 10px;
    }
</style>