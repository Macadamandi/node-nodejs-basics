import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const compress = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToCompress = getPath(currentDir, [".", "files", "fileToCompress.txt"]);
    const compressedFilePath = getPath(currentDir, [".", "files", "archive.gz"]);

    const source = createReadStream(filePathToCompress);
    const destination = createWriteStream(compressedFilePath);

    const gzip = createGzip();

    await pipeline(source, gzip, destination);

    console.log(`Compressed file: \n${compressedFilePath}`);
  } catch (err) {
    showError(err.message);
  }
};

await compress();
