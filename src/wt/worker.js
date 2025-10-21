import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

if (Math.random() > 0.5) throw new Error("Oops!");

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
