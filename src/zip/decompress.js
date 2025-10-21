import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { access, constants } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const decompress = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToDecompress = getPath(currentDir, [".", "files", "archive.gz"]);
    const decompressedFilePath = getPath(currentDir, [".", "files", "fileToCompress.txt"]);

    const source = createReadStream(filePathToDecompress);
    const destination = createWriteStream(decompressedFilePath);

    const gunzip = createGunzip();

    await access(filePathToDecompress, constants.F_OK);
    await pipeline(source, gunzip, destination);

    console.log(`Decompressed file: \n${decompressedFilePath}`);
  } catch (err) {
    showError(err.message);
  }
};

await decompress();
