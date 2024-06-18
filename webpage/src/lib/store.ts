import { writable, type Writable } from "svelte/store";



export const toastStateStore: Writable<string> = writable('hide');
export const setToastState = (value: string) => {toastStateStore.set(value)};
