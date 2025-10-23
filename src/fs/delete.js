import { rm } from "node:fs/promises";
import showError from "../helpers/showError.js";
import getPath from "../helpers/getPath.js";
import getDir from "../helpers/getDir.js";

const remove = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const filePathToRemove = getPath(currentDir, [".", "files", "fileToRemove.txt"]);

    await rm(filePathToRemove);
  } catch (err) {
    showError(err.message);
  }
};

await remove();
