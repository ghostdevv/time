<script>
    import { sheets } from '@/data';
    import { nanoid } from 'nanoid';

    let input;

    function create() {
        if (input.trim() == '') return;

        const id = nanoid();
        const name = input;

        input = undefined;

        $sheets[id] = {
            name,
            time: 0,
        };
    }
</script>

<nav class="row">
    <input bind:value={input} type="text" placeholder="Name" />
    <button on:click={create}> Create </button>
</nav>

<main class="col">
    <slot />
</main>

<style lang="scss">
    nav {
        position: sticky;
        top: 0;
        left: 0;

        width: 100%;

        padding: 32px;

        border-bottom: 2px solid var(--primary);
    }

    main {
        padding: 32px;
    }
</style>
