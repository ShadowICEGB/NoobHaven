<script lang="ts">
	import '../app.postcss';
	import { AppShell, initializeStores } from '@skeletonlabs/skeleton';
	import PageFooter from '$lib/components/navigation/PageFooter.svelte';
	import PageHeader from '$lib/components/navigation/PageHeader.svelte';
	import SidebarLeft from '$lib/components/navigation/SidebarLeft.svelte';
	import SidebarRight from '$lib/components/navigation/SidebarRight.svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft"><SidebarLeft/></svelte:fragment>
	<svelte:fragment slot="sidebarRight"><SidebarRight/></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader/></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><PageFooter/></svelte:fragment>
</AppShell>
