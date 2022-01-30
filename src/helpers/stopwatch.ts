export interface StopWatch {
    getTime(): number;
}

export const createStopwatch = (initialSeconds: number): StopWatch => {
    const start = Date.now();

    const getInternalTime = () => {
        const now = Date.now();
        return Math.ceil((now - start) / 1000);
    };

    return {
        getTime: () => getInternalTime() + initialSeconds,
    };
};
