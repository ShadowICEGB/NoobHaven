<script lang="ts">
    import logo from '$lib/assets/pictures/icons/Logo1PB.png';
    import SidebarGame from './popularGame/SidebarGame.svelte';
    import user from '$lib/assets/pictures/bg/user.png';
	import { goto } from '$app/navigation';

    type testing = {
        icon: string;
        name: string;
        link: string;
        not?: string;
        valueNot?: string;
    }[]

    const menuList = [
        {icon:'fa-regular fa-bell',name:'Homepage',link:'/',not:'',valueNot:''},
        {icon:'fa-regular fa-chess-rook',name:'Games',link:'/',not:'',valueNot:''},
        {icon:'fa-regular fa-chess-knight',name:'E-Sports',link:'/',not:'',valueNot:''},
        {icon:'fa-regular fa-bell',name:'Notification',link:'/',not:'',valueNot:'5'},
        {icon:'fa-regular fa-hourglass',name:'Changelogs',link:'/',not:'',valueNot:'2'},
    ];
    const productList = [
        {icon:'fa-solid fa-gear',name:'Settings',link:'/',not:'',valueNot:''},
        {icon:'fa-regular fa-comments',name:'Contact',link:'/',not:'',valueNot:'1'},
        {icon:'fa-regular fa-rectangle-list',name:'Impressum',link:'/',not:'',valueNot:''},
    ];
</script>

<div class="sidebarLeft w-80 h-full lg:block hidden">
    <div class="content py-5 flex justify-between items-center flex-col h-full">
        <div>
            <div class="logo flex items-center relative top-5">
                <div class="imgBx logoImgBx py-2 px-3 rounded-xl mr-4" style="background: rgba(var(--color-tertiary-500)/1);">
                    <img src="{logo}" alt="logo" class="w-12" draggable="false">
                </div>
                <div class="details">
                    <span class="text-xs">The Ultimate Gaming Hub</span>
                    <h1 class="font-bold text-2xl mt-1 mb-2">NOOB <span class="font-normal">Haven</span></h1>
                    <div class="tags flex items-center flex-wrap">
                        <span class="tag py-1 px-2 rounded-full text-xs" style="background: #388bfd1a;color: #4493f8;">ALPHA</span>
                        <span class="tag py-1 px-2 rounded-full ml-2 text-xs" style="background: #388bfd1a;color: #4493f8;">V0.0.0.1</span>
                    </div>
                </div>
            </div>
            <nav class="mt-16">
                <ul>
                    <span style="color: rgba(var(--color-tertiary-400)/1);line-height: 50px;">Menu</span>
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    {#each menuList as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li class="relative ml-3 mb-3 flex items-center cursor-pointer" on:click={() => goto(item.link)}>
                        <i class="{item.icon} w-8"></i>
                        <span>{item.name}</span>
                        {#if item.valueNot}
                            <span class="notification-circle absolute right-0 top-0 flex items-center justify-center text-white bg-red-500 rounded-full w-6 h-6">
                                {item.valueNot}
                            </span>
                        {/if}
                    </li>
                    {/each}
                </ul>
                <hr class="relative left-1/2 -translate-x-1/2 w-10/11 rounded-full mt-8 mb-5" style="background: rgba(var(--color-tertiary-500)/1);height: 2px;">
                <ul>
                    <span style="color: rgba(var(--color-tertiary-400)/1);line-height: 50px;">Support</span>
                    {#each productList as item}
                    <li class="relative ml-3 mb-3 flex items-center cursor-pointer">
                        <i class="{item.icon} w-8"></i>
                        <span>{item.name}</span>
                        {#if item.valueNot}
                            <span class="notification-circle absolute right-0 top-0 flex items-center justify-center text-white bg-red-500 rounded-full w-6 h-6">
                                {item.valueNot}
                            </span>
                        {/if}
                    </li>
                    {/each}
                </ul>
            </nav>
        </div>
        <div class="">
            <div class="news ml-5">
                <SidebarGame/>
            </div>
            <div class="user mt-12 flex items-center ml-12 mb-3">
                <div class="imgBx">
                    <img src="{user}" alt="user" class="w-12" draggable="false">
                </div>
                <div class="details ml-5">
                    <h1 class="font-bold text-base">ShadowICE</h1>
                    <span class="text-sm" style="color: rgba(var(--color-tertiary-300)/1);">Custom sup text</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .notification-circle {
        position: absolute;
        right: 30px;top: 0px;
        background: rgba(var(--color-warning-500)/1);
        color: black;
        border-radius: 50%;
        width: 20px;height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }
    li::before {
        content: '';
        position: absolute;
        top: -2px;left: -8px;
        width: 0%;height: 120%;
        border-radius: 10px;
        background-color: #e910c6;
        z-index: -1;
        transition: width 0.2s ease-in-out;
    }
    li:hover::before {
        width: 30%;
    }
    li:hover i { animation: jello; animation-duration: 1s; }
    img:hover { animation: tada; animation-duration: 1s; }
</style>
