<script lang="ts">
	import zyra from '$lib/assets/pictures/bg/lolZyra.jpeg';
	import bgCyberpunk from '$lib/assets/pictures/bg/cyberpunkYellowV.jpeg';
	import rdr2 from '$lib/assets/pictures/bg/rdr2.jpeg';
	import avatar from '$lib/assets/pictures/bg/avatar.jpg';
	import mw3 from '$lib/assets/pictures/bg/mw3.jpg';
	import ow2 from '$lib/assets/pictures/bg/ow2.jpg';
	import gtav from '$lib/assets/pictures/bg/gtav.jpg';
	import manarlords from '$lib/assets/pictures/bg/manarlords.jpeg';
	import dyinglight2 from '$lib/assets/pictures/bg/dyinglight2.jpg';

	const sliderListGames = [
		{img:dyinglight2,title:'Dying Light 2',link:'',video:'',favIcon:'fa-solid fa-heart'},
		{img:zyra,title:'League of Legends',link:'',video:'',favIcon:'fa-regular fa-heart'},
		{img:bgCyberpunk,title:'Cyberpunk 2077',link:'',video:'',favIcon:'fa-regular fa-heart'},
		{img:rdr2,title:'Red Dead Redemption 2',link:'',video:'',favIcon:'fa-regular fa-heart'},
		{img:avatar,title:'Avatar: Frontiers of Pandora',link:'',video:'',favIcon:'fa-regular fa-heart'},
		{img:mw3,title:'Modern Warfare III',link:'',video:'',favIcon:'fa-solid fa-heart'},
		{img:ow2,title:'Overwatch II',link:'',video:'',favIcon:'fa-solid fa-heart'},
		{img:gtav,title:'GTA V',link:'',video:'',favIcon:'fa-solid fa-heart'},
		{img:manarlords,title:'Manar Lords',link:'',video:'',favIcon:'fa-regular fa-heart'}
	];
</script>

<main class="">
	<div>
		<p>Homepage Content</p>
		<swiper-container class="mySwiper" effect="coverflow" grab-cursor="true"
			slides-per-view="3" coverflow-effect-rotate="50" coverflow-effect-stretch="80" coverflow-effect-depth="100"
			coverflow-effect-modifier="1" loop="true" autoplay-delay="10000" autoplay-disable-on-interaction="true">
			{#each sliderListGames as slider}
			<swiper-slide>
				<img src="{slider.img}" alt="zyra">
				<div class="details absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5" style="background: #121e2b;width: 95%;border-radius: 25px;">
					<h1 class="uppercase font-bold">{slider.title}</h1>
					<div class="btnContainer flex items-center mt-5">
						<button class="bg-orange-400 py-3 px-8 uppercase font-bold rounded-xl" style="background: linear-gradient(90deg, rgba(var(--color-primary-700)/1), rgba(var(--color-secondary-500)/1) );"><a href="{slider.link}">Read More</a></button>
						<button class="ml-5"><i class="fa-solid fa-circle-play playIcon" style="font-size: 40px;"></i></button>
					</div>
				</div>
				<div class="fav absolute top-5 right-8 rounded-xl px-4 py-3 cursor-pointer" style="background-color: #121e2b;">
					<i class="{slider.favIcon} text-xl favicon" style="color: rgba(var(--color-error-500)/1);"></i>
				</div>
			</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</main>

<style lang="postcss">
	swiper-container {
		position: relative;
		width: 100%;height: 650px;
    }

    swiper-slide {
		position: relative;
		top: 10%;transform: translateY(-50%);
		width: 300px;
		height: 500px;
    }
	swiper-slide img {
		width: 100%;height: 100%;
		object-fit: cover;
		border-radius: 40px;
	}


	.favicon:hover,.playIcon:hover {
		animation: tada; animation-duration: 1s;
	}
	button:hover {
		animation: headShake; animation-duration: 1s;
	}
</style>
