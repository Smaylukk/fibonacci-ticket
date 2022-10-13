import { workerData } from "node:worker_threads";
import { createClient } from "redis";

const runWorker = () => {
  const list = workerData.list;
  list.forEach((element) => {
    const fibNumber = fibonacciNumber(element.number);
    console.log("Length", fibNumber.length);
    try {
      redis.set(element.ticket, fibNumber);
    } catch (error) {
      console.log("Error with index", element.number);
    }
  });

  list.length = 0;
};

const redis = createClient({
  url: `${process.env.REDIS_URL}`,
});
redis.connect().then((res) => {
  runWorker();
});

const fibonacciNumber = (number: number): string => {
  let a: bigint = 0n;
  let result: bigint = 1n;
  if (number <= 1) {
    return result.toString();
  }
  for (let i = 1; i < number; i++) {
    result = a + result;
    a = result - a;
  }
  return result.toString();
};
