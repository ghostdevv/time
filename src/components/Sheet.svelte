<script lang="ts">
    export let id: string;
    export let name: string;
    export let time: number;
</script>

<card>
    <div class="col">
        <h2>{name}</h2>
        <p>{time}</p>
    </div>
</card>
