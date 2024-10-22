<script lang="ts">
	import { page } from "$app/stores";

    let pageHeaderDetails = {
        subText: 'error while loading website',
        title: 'error while loading website',
        markedText: 'error while loading website',
        link: '/',
        description: 'error while loading website',
        image: ''
    }

    // Update the store and active index on route change
    let activeRoute = '/';
    $: $page.url.pathname, activeRoute = $page.url.pathname, activePageHeader(activeRoute);

    // Update the store and handle the active route page header
    function activePageHeader (route: string) {
        if (route === '/') {
            pageHeaderDetails = {
                subText: 'The Ultimate Gaming Hub',
                title: 'Welcome to NoobHaven',
                markedText: 'First of all',
                link: '/',
                description: 'familiarize yourself with the rules and guidelines of the community and enjoy your stay.',
                image: ''
            }
        }
        if (route === '/libary/changelogs') {
            pageHeaderDetails = {
                subText: 'What\'s new? What\'s changed?',
                title: 'Changelogs',
                markedText: 'Here you can find',
                link: '/',
                description: 'all the changes and updates that have been made to the website.',
                image: ''
            }
        }
        if (route === '/information/impressum') {
            pageHeaderDetails = {
                subText: 'Legal Information',
                title: 'Impressum',
                markedText: 'Legal Information',
                link: '/',
                description: 'about the website and the people behind it.',
                image: ''
            }
        }
    }
</script>

<div class="pageHeader relative mt-5 overflow-visible ml-3 h-52 mr-6 px-10 pb-5 rounded-3xl bg-cover flex items-center justify-between" style="font-family: Sora;">
    <div class="content">
        <p class="text-xs italic text-gray-300 font-bold">{pageHeaderDetails.subText}</p>
        <h1 class="text-white mb-3 mt-1 uppercase font-bold tracking-widest" style="font-family: Oswald; font-size: clamp(40px, 4vw, 60px); line-height: 60px;">{pageHeaderDetails.title}</h1>
        <div class="text-sm flex items-center font-bold">
            <i class="fa-regular fa-square-caret-right text-[rgba(var(--color-success-500)/1)] text-4xl"></i>
            <p class="ml-2">
                <a href="{pageHeaderDetails.link}" class="text-[rgba(var(--color-success-500)/1)] font-bold mr-1">{pageHeaderDetails.markedText}</a> {pageHeaderDetails.description}
            </p>
        </div>
    </div>
    <img src="" alt="img">
</div>

<style lang="postcss">
    .pageHeader {
        @apply bg-cover bg-center bg-[url('$lib/assets/pictures/bg/customHeader.svg')];
    }
</style>
