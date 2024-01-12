<script lang="ts">
	import '../app.css';

	import { theme } from '$lib/stores/theme';
	import { title } from '$lib/stores/title';

	import { Footer } from '$lib/components/layout';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<div class={$theme}>
	<div
		class="flex flex-col justify-center place-items-center w-screen h-screen px-8 py-3 md:px-56 xl:px-72 transition-colors duration-500 text-zinc-900 dark:text-gray-100 bg-gray-100 dark:bg-zinc-900"
	>
		<div class="flex grow">
			<slot />
		</div>
		<div class="w-full">
			<Footer />
		</div>
	</div>
</div>
