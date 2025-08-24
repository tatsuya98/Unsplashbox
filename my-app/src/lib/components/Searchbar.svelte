<script lang="ts">


    import {goto} from "$app/navigation";
    import {unsplashData} from "$lib/state.svelte";
    import {ACCESS_KEY} from "$env/static/private";

    let queryToSearch:string = $state("")
    const handleSearch = async (e:KeyboardEvent) => {
        if (e.key === "Enter") {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${queryToSearch}`,{
                method: "GET",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": ` Client-ID ${ACCESS_KEY}`
                })
            });
            const data = await response.json();
            unsplashData.images = data.results;
            goto(`/?query=${queryToSearch}`);
        }
    }
</script>
<svelte:window onkeydown={handleSearch} />
    <input type="text"  value={queryToSearch} placeholder="Enter your keywords...">

<style></style>