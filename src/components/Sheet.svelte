<script lang="ts">
    import { createStopwatch, StopWatch } from '@/helpers/stopwatch';
    import { sheets } from '@/data';

    export let id: string;
    export let name: string;
    export let time: number;

    let timing: boolean;
    let timeString: string;

    let interval;
    let watch: StopWatch;

    updateTimeString(time);

    function updateTimeString(seconds: number) {
        const dd = (num: number): string => `${num < 10 ? '0' : ''}${num}`;

        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        timeString = `${dd(hours)}:${dd(minutes)}:${dd(seconds)}`;
    }

    function update() {
        updateTimeString(watch.getTime());
    }

    function toggleTiming() {
        if (timing) {
            clearInterval(interval);

            $sheets[id] = {
                name,
                time: watch.getTime(),
            };
        } else {
            watch = createStopwatch(time);

            update();
            interval = setInterval(update, 500);
        }

        timing = !timing;
    }

    function deleteSheet() {
        delete $sheets[id];
        $sheets = $sheets;
    }
</script>

<card>
    <div class="col">
        <h2>{name}</h2>
        <h5>{timeString}</h5>
    </div>

    <div class="buttons row">
        <button
            on:click={toggleTiming}
            class:red={timing}
            class:green={!timing}>
            {timing ? 'Stop' : 'Start'}
        </button>

        <button on:click={deleteSheet} class="red"> Delete </button>
    </div>
</card>

<style lang="scss">
    card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .buttons {
            width: fit-content;
        }
    }
</style>
