<script lang="ts">
    import user from '$lib/assets/pictures/bg/user.png';
    import { setToastState } from '$lib/store';
</script>

<div class="sidebarRight h-full w-14 flex flex-col items-center">
    <i class="fa-solid fa-users mt-10"></i>
    <hr class="relative rounded-full w-10/12 my-5" style="background: rgba(var(--color-tertiary-500)/1);height: 2px;">
    <div class="friends flex justify-center items-center flex-col">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="{user}" alt="user" class="w-8 mb-5" on:click={() => setToastState('success')}>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="{user}" alt="user" class="w-8 mb-5" on:click={() => setToastState('warning')}>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="{user}" alt="user" class="w-8 mb-5" on:click={() => setToastState('error')}>
        <img src="{user}" alt="user" class="w-8 mb-5">
        <img src="{user}" alt="user" class="w-8 mb-5">
    </div>
</div>

<style lang="postcss">

</style>
