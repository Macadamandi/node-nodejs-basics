import { writeFile } from "node:fs/promises";
import getPath from "../helpers/getPath.js";
import getDir from "../helpers/getDir.js";
import showError from "../helpers/showError.js";

const create = async () => {
  try {
    const data = "I am fresh and young";
    const currentDir = getDir(import.meta.url);
    const filePathToCreate = getPath(currentDir, [".", "files", "fresh.txt"]);

    await writeFile(filePathToCreate, data, { flag: "wx" });
  } catch (err) {
    showError(err.message);
  }
};

await create();
