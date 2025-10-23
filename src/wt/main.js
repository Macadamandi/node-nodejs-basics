import { Worker } from "node:worker_threads";
import { availableParallelism } from "node:os";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const performCalculations = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const workerFilePath = getPath(currentDir, [".", "worker.js"]);
    const numberOfWorkers = availableParallelism();
    const promises = [];
    const startNubmer = 10;

    const createWorkerPromise = (data) =>
      new Promise((resolve) => {
        const worker = new Worker(workerFilePath, { workerData: data });
        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      });

    for (let i = 0; i < numberOfWorkers; i++) {
      promises.push(createWorkerPromise(startNubmer + i + 1));
    }

    const workerResults = await Promise.all(promises);

    console.log(workerResults);
  } catch (err) {
    showError(err.message);
  }
};

await performCalculations();
