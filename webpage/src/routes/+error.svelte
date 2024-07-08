<script lang="ts">
    import { error } from '@sveltejs/kit';
    import { page } from '$app/stores';
	import { goto } from '$app/navigation';

    let testing = $page.error?.message;
    let trrrr = $page.status;
    
</script>

<main>
    <div class="container flex justify-center items-center flex-col mt-20">
        <h1 class="font-bold" style="font-size: clamp(30px,10vw,150px);">{trrrr}</h1>
        <h2 class="mt-20">Page {testing}</h2>
        <p>Sorry, we couldn't find the page you are looking for</p>
        <button on:click={() => goto('/')} class="btn bg-purple-600">Go to homepage</button>
    </div>
</main>

<style lang="postcss">

</style>
