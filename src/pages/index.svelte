<script>
    import Sheet from '@/components/Sheet.svelte';
    import { sheets } from '@/data';
</script>

{#each Object.entries($sheets) as [id, sheet] (id)}
    <Sheet {id} {...sheet} />
{/each}
