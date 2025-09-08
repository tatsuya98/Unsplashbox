<script lang="ts">


    import {goto} from "$app/navigation";
    import {unsplashData, unsplashPageNumber} from "$lib/state.svelte";

    let queryToSearch:string = $state("")
    let response;
    const handleSearch = async (e:KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === 'Go' || e.key === 'Search') {
            if(Object.hasOwn(unsplashPageNumber, queryToSearch)){
                response = await fetch(`/api/externalApi/${queryToSearch}`, {
                    method: "POST",
                    body: JSON.stringify({
                        pageNumber: unsplashPageNumber[queryToSearch],
                    })
                })
            }else{
                response = await fetch(`/api/externalApi/${queryToSearch}`)
            }
            const data = await response.json()
            unsplashPageNumber[queryToSearch] = data.total_pages;
            unsplashData.images = data.results;
            await goto(`/?query=${queryToSearch}`);
        }
    }




</script>
<svelte:window onkeydown={handleSearch} />
    <input class={window.location.href.includes("query") ? "search-position" : ""} type="text"  inputmode="search"  bind:value={queryToSearch} placeholder="Enter your keywords...">

<style>
    input{
        width: 80%;
        padding: 15px;
        background-image: url("$lib/assets/Search.svg");
        background-repeat: no-repeat;
        background-position: 270px;
    }
    .search-position{
        position: absolute;
        right: 35px;
        top: 65px;
    }
</style>