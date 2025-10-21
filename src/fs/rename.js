import fs from "node:fs/promises";
import { constants } from "node:fs";
import showError from "../helpers/showError.js";
import getPath from "../helpers/getPath.js";
import getDir from "../helpers/getDir.js";

const rename = async () => {
  try {
    const currentDir = getDir(import.meta.url);
    const oldPath = getPath(currentDir, [".", "files", "wrongFilename.txt"]);
    const newPath = getPath(currentDir, [".", "files", "properFilename.md"]);

    const exists = await fs
      .access(newPath, constants.F_OK)
      .then(() => {
        return {
          message: `The path ${newPath} already exists`,
          flag: true,
        };
      })
      .catch(() => {
        return {
          flag: false,
        };
      });

    if (exists.flag) {
      showError(exists.message);
    }

    await fs.rename(oldPath, newPath);
  } catch (err) {
    showError(err.message);
  }
};

await rename();
