import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import showError from "../helpers/showError.js";

const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, _, callback) {
        const reversed = chunk.toString().trim().split("").reverse().join("");
        callback(null, reversed + "\n");
      },
    });

    await pipeline(process.stdin, reverseTransform, process.stdout);
  } catch (err) {
    showError(err.message);
  }
};

await transform();
