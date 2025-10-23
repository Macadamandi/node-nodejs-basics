import { cp } from "node:fs/promises";
import showError from "../helpers/showError.js";
import getPath from "../helpers/getPath.js";
import getDir from "../helpers/getDir.js";

const copy = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const soursePath = getPath(currentDir, [".", "files"]);
    const destinationPath = getPath(currentDir, [".", "files_copy"]);

    await cp(soursePath, destinationPath, { recursive: true, errorOnExist: true, force: false });
  } catch (err) {
    showError(err.message);
  }
};

await copy();
