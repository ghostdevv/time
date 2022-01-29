import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    return {
        server: {
            port: 5000,
        },

        plugins: [
            svelte({
                disableDependencyReinclusion: ['@roxi/routify'],
            }),
        ],

        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, './src'),
                },
            ],
        },

        build: {
            minify: isProduction,
        },
    };
});
