import { writable } from 'svelte-local-storage-store';

interface Sheet {
    id: string;
    name: string;
    time: number; // In seconds
}

export const sheets = writable<Sheet[]>('sheets', []);
