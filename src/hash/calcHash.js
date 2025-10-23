import { pipeline } from "node:stream/promises";
import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const calculateHash = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToCalculateHash = getPath(currentDir, [".", "files", "fileToCalculateHashFor.txt"]);
    const hash = createHash("sha256");

    await pipeline(createReadStream(filePathToCalculateHash), hash);

    console.log(`Hash 'SHA256' for ${filePathToCalculateHash}: \n${hash.digest("hex")}`);
  } catch (err) {
    showError(err);
  }
};

await calculateHash();
