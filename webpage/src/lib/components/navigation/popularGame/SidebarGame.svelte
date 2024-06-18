<script lang="ts">
    import { gameListPopularGames } from "$lib/gameListFilePopularGames";

    const randomGame = gameListPopularGames[Math.floor(Math.random() * gameListPopularGames.length)];
</script>

<div class="box ml-2 rounded-xl" style="width: 90%; background-color: rgba(var(--color-tertiary-500)/1);">
    <div class="imgBx rounded-lg p-2">
        <img src="{randomGame.image}" alt="img" class="w-full h-full object-cover rounded-lg" draggable="false">
    </div>
    <div class="details">
        <header class="ml-5 mt-1">
            <div class="flex items-center">
                <img src="{randomGame.icon}" alt="icons" class="w-5" draggable="false">
                <span class="ml-2 text-sm" style="color: rgba(var(--color-tertiary-300)/1);">{randomGame.company}</span>
            </div>
            <h1 class="uppercase font-bold mt-1">{randomGame.title}</h1>
        </header>
        <div class="btnContainer flex justify-between items-center px-3 pb-3 mt-3">
            <button class="px-3 py-1 rounded-xl" style="background: rgba(var(--color-secondary-700)/1);">
                <a href="{randomGame.website}">
                    <i class="fa-solid fa-cloud mr-1"></i>
                    <span>Website</span>
                </a>
            </button>
            <button class="px-3 py-1 rounded-xl" style="background: rgba(var(--color-secondary-700)/1);">
                <a href="{randomGame.buy}">
                    <i class="fa-solid fa-earth-europe mr-1"></i>
                    <span>Kaufen</span>
                </a>
            </button>
        </div>
    </div>
</div>

<style lang="postcss">
    button:hover i { animation: jello; animation-duration: 1s; }
    button:hover {
        transition: box-shadow 0.15s ease-in-out;
        box-shadow: 0px 0px 8px 2px rgba(var(--color-secondary-400)/1);
    }
</style>
