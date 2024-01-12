<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import { title } from '$lib/stores/title';
	import { Github } from '$lib/components/icons';

	title.set('Coming Soon...');
</script>

<MetaTags
	title={$title}
	description="Baldur's Gate 3 modding resources."
	openGraph={{
		url: 'https://baldurs.gay',
		title: $title,
		description: "Baldur's Gate 3 modding resources.",
		siteName: "Baldur's Gay"
	}}
/>

<div class="flex place-items-center gap-2">
	<a
		class="p-2 transition-all scale-100 active:scale-95 hover:bg-gray-200 hover:dark:bg-zinc-800 rounded-full"
		href="https://github.com/BaldursGay/"
	>
		<Github class="w-10 transition-colors duration-500 text-zinc-900 dark:text-gray-100" />
	</a>
	<h1 class="text-4xl font-semibold">Coming soon...</h1>
</div>
