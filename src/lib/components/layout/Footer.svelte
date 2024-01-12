<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	import { theme } from '$lib/stores/theme';
</script>

<div class="flex justify-between place-items-center">
	<p class="dark:text-zinc-400">
		<a
			class="text-pink-500 dark:text-pink-300 underline"
			href="https://github.com/BaldursGay/website/blob/main/LICENSE">MIT License</a
		>
		&copy; {new Date().getFullYear()}
	</p>

	<div class="flex place-items-center relative rounded-md overflow-hidden">
		<select
			class="relative py-2 pl-3 pr-7 appearance-none bg-zinc-200 dark:bg-zinc-800"
			bind:value={$theme}
		>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
		<ChevronDown
			size="18"
			class="absolute right-2 top-3 dark:text-gray-200 z-10 pointer-events-none"
		/>
	</div>
</div>
