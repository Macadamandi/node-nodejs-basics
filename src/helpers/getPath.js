import { join } from "node:path";

const getPath = (baseDir, fileName) => {
  return join(baseDir, ...fileName);
};

export default getPath;
