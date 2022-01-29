<script>
    import Sheet from '@/components/Sheet.svelte';
    import { sheets } from '@/data';
</script>

{#each $sheets as sheet (sheet.id)}
    <Sheet {...sheet} />
{/each}
