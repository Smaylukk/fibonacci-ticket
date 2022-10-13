"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_worker_threads_1 = require("node:worker_threads");
const redis_1 = require("redis");
const runWorker = () => {
    const list = node_worker_threads_1.workerData.list;
    list.forEach((element) => {
        const fibNumber = fibonacciNumber(element.number);
        console.log("Length", fibNumber.length);
        try {
            redis.set(element.ticket, fibNumber);
        }
        catch (error) {
            console.log("Error with index", element.number);
        }
    });
    list.length = 0;
};
const redis = (0, redis_1.createClient)({
    url: `${process.env.REDIS_URL}`,
});
redis.connect().then((res) => {
    runWorker();
});
const fibonacciNumber = (number) => {
    let a = 0n;
    let result = 1n;
    if (number <= 1) {
        return result.toString();
    }
    for (let i = 1; i < number; i++) {
        result = a + result;
        a = result - a;
    }
    return result.toString();
};
