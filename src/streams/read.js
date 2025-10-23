import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const read = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToRead = getPath(currentDir, [".", "files", "fileToRead.txt"]);

    await pipeline(createReadStream(filePathToRead), process.stdout);
  } catch (err) {
    showError(err.message);
  }
};

await read();
