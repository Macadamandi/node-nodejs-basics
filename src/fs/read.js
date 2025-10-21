import { open } from "node:fs/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const read = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToOpen = getPath(currentDir, [".", "files", "fileToRead.txt"]);

    const file = await open(filePathToOpen);

    console.log(`Contents of the file ${filePathToOpen}:`);
    for await (const line of file.readLines()) {
      console.log(line);
    }
  } catch (err) {
    showError(err.message);
  }
};

await read();
