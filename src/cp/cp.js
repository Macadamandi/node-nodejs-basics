import { spawn } from "node:child_process";
import showError from "../helpers/showError.js";
import getDir from "../helpers/getDir.js";
import getPath from "../helpers/getPath.js";

const spawnChildProcess = async (args) => {
  try {
    const currentDir = getDir(import.meta.url);
    const childPath = getPath(currentDir, [".", "files", "script.js"]);

    const childProcess = spawn("node", [childPath, ...args], {
      stdio: ["pipe", "pipe", "inherit"],
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
  } catch (err) {
    showError(err.message);
  }
};

spawnChildProcess(["node.js", "v24.10.0"]);
