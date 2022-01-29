<script lang="ts">
    import { sheets } from '@/data';

    export let id: string;
    export let name: string;
    export let time: number;

    let timing: boolean;
    let interval;

    let timeString: string;

    const updateTimeString = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        timeString = `${hours}:${minutes}:${seconds}`;
    };

    updateTimeString(time);

    function toggleTiming() {
        if (timing) {
            clearInterval(interval);
            $sheets[id] = { name, time };
        } else {
            interval = setInterval(() => {
                time = time + 1;
                updateTimeString(time);
            }, 1000);
        }

        timing = !timing;
    }
</script>

<card>
    <div class="col">
        <h2>{name}</h2>
        <p>{timeString}</p>
    </div>

    <button on:click={toggleTiming} class:red={timing} class:green={!timing}>
        {timing ? 'Stop' : 'Start'}
    </button>
</card>

<style>
    card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>
