<script>
    const {images} = $props()
</script>


<div class="grid-container">
    {#each images as image}
        <a href="/image/{image.id}">
            <img src={image.urls.regular} alt="">
        </a>
    {/each}
</div>


<style></style>