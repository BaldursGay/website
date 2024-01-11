import { persisted } from 'svelte-persisted-store';

export let theme = persisted('theme', 'dark');
