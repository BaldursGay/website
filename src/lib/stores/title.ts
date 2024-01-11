import { writable } from 'svelte/store';

function createTitle() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (value: string) => {
			set(`${value} | Baldur's Gay`);
		},
		clear: () => {
			set(`Baldur's Gay`);
		}
	};
}

export const title = createTitle();
