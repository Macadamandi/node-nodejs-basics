import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const write = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToWrite = getPath(currentDir, [".", "files", "fileToWrite.txt"]);

    await pipeline(process.stdin, createWriteStream(filePathToWrite));
  } catch (err) {
    showError(err.message);
  }
};

await write();
