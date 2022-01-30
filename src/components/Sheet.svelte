<script lang="ts">
    import { sheets } from '@/data';

    export let id: string;
    export let name: string;
    export let time: number;

    let timing: boolean;
    let timeString: string;

    let interval;
    let timestamp: number;

    updateTimeString(time);

    function getTimestampDiff(): number {
        const now = Date.now();
        const diff = now - (timestamp || Date.now());

        return Math.ceil(diff / 1000);
    }

    function updateTimeString(seconds) {
        const dd = (num: number): string => `${num < 10 ? '0' : ''}${num}`;

        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        timeString = `${dd(hours)}:${dd(minutes)}:${dd(seconds)}`;
    }

    function toggleTiming() {
        if (timing) {
            clearInterval(interval);

            $sheets[id] = {
                name,
                time: getTimestampDiff() + time,
            };
        } else {
            timestamp = Date.now();

            interval = setInterval(() => {
                const diff = getTimestampDiff();
                updateTimeString(time + diff);
            }, 500);
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
