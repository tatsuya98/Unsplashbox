<script lang="ts">


    import {replaceState} from "$app/navigation";
    import {page} from "$app/state";
    import {unsplashData, unsplashPageNumber} from "$lib/state.svelte";
    import {onMount} from "svelte";

    let queryToSearch:string = $state("")
    let windowHasMounted: boolean = $state(false);
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
            localStorage.setItem("pages", JSON.stringify(unsplashPageNumber));
            unsplashData.images = data.results;
            replaceState(`/?query=${queryToSearch}`, page.state);
        }
    }
    onMount(() => {
        windowHasMounted = true;
    })
</script>
<svelte:window onkeydown={handleSearch} />
    <input class={windowHasMounted && window.location.href.includes("query") ? "search-position" : ""} type="text"  inputmode="search"  bind:value={queryToSearch} placeholder="Enter your keywords...">

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