<script lang="ts">
import logo from "$lib/assets/Logo.svg"
import { page } from '$app/state'
</script>

<nav>
    <div class="flex-container">
        <a href="/">
            <img src={logo} alt="website logo">
        </a>
        <ul class="links">
            <li><a href="/" class:active={page.url.pathname=== "/"}>Home</a></li>
            <li><a href="/collections" class:active={page.url.pathname === "/collections"}>Collections</a></li>
        </ul>
    </div>
</nav>


<style>
nav{
    padding-inline: 20px;
}
.flex-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Be Vietnam+Pro',sans-serif;

}

.links{
    display: flex;
    gap: 10px;
}
.links a{
    text-decoration: none;
    color: #6C727F;
    padding: 7px 15px;
    border-radius: 5px ;

}
a.active{
    color: #121826;
    background-color: #E5E7EB;
}
</style>