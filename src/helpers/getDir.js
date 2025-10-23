import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const getDir = (metaURL) => {
  return dirname(fileURLToPath(metaURL));
};

export default getDir;
