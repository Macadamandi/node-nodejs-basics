import { opendir } from "node:fs/promises";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const list = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const dirPathToOpen = getPath(currentDir, [".", "files"]);
    const filenamesArray = [];

    const dir = await opendir(dirPathToOpen);

    for await (const dirent of dir) {
      if (dirent.isFile()) {
        filenamesArray.push(dirent.name);
      }
    }

    console.log(`Array of all filenames from ${dirPathToOpen}: \n ${JSON.stringify(filenamesArray, null, 2)}`);
  } catch (err) {
    showError(err.message);
  }
};

await list();
