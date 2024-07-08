<script lang="ts">
    import { routeData } from "$lib/store";

    $: header = $routeData.routeName;
    $: subHeader = $routeData.routeSubText;
    $: text = $routeData.subHeader;
</script>

<div class="pageHeader relative mt-5 overflow-hidden ml-3 min-h-52 mr-6 px-10 pt-4 rounded-3xl" style="background: linear-gradient(90deg, rgba(var(--color-primary-700)/1), rgba(var(--color-secondary-500)/1) );">
    <h6 class="mb-4 italic" style="color: #eee7ff;font-size: clamp(12px,4vw,17px);">{subHeader}</h6>
    <h1 class="uppercase tracking-widest" style="font-family: Anton, sans-serif;font-size: clamp(20px,4vw,37px);">{header || 'Einfach Orangensaft'}</h1>
    <p class="mt-5" style="font-size: clamp(10px,4vw,17px);color: #eee7ff;width: 80%;">{text}</p>
    <div class="ghostTexts absolute top-10 -right-60 flex flex-col cursor-default select-none" style="font-family: Anton;">
        <span class="uppercase font-bold" style="color: #18171b;font-size: clamp(30px,4vw,40px);">EXPLORE ALL GAMES</span>
        <span class="ml-20 uppercase font-bold mt-5" style="color: #18171b;font-size: clamp(30px,4vw,40px);">EXPLORE ALL GAMES</span>
        <span class="ml-40 uppercase font-bold mt-5" style="color: #18171b;font-size: clamp(30px,4vw,40px);">EXPLORE ALL GAMES</span>
    </div>
</div>

<style lang="postcss">

</style>
