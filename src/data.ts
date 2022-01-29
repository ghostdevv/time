import { writable } from 'svelte-local-storage-store';

interface Sheet {
    name: string;
    time: number; // In seconds
}

export const sheets = writable<Record<string, Sheet>>('sheets', {});
