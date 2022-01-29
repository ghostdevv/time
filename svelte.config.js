import sveltePreprocess from 'svelte-preprocess';

export default {
    extensions: ['.svelte'],
    preprocess: [sveltePreprocess()],
};
