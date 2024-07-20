<script lang="ts">
    import { timeStore } from "$lib/store";
    import type { dateType } from "$lib/types";
    let stats: dateType;

    timeStore.subscribe(value => value = stats);
</script>

<div class="phone bg-orange-400 w-11/12 mx-auto rounded-3xl" style="min-height: 450px;">
    <header class="flex items-center justify-between px-3 pt-2">
        <div class="date">
            <span>{stats}</span>
            <span class="ml-1">20:04</span>
        </div>
        <div class="icons">
            <i class="fa-solid fa-bell-slash"></i>
            <i class="fa-solid fa-signal mx-1"></i>
            <i class="fa-solid fa-wifi mr-1"></i>
            <i class="fa-solid fa-battery-three-quarters"></i>
        </div>
    </header>
</div>

<style lang="postcss">

</style>
