import { writable } from "svelte/store";

export const htmlEncode = writable(true);
export const urlDecode = writable(true);

export const focused = writable('');
export const value = writable({
	encode: '',
	decode: ''
});
