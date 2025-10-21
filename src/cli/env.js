const parseEnv = () => {
  const envObj = process.env;
  const prefix = "RSS_";

  const result = Object.entries(envObj)
    .filter(([key]) => key.includes(prefix))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(result);
};

parseEnv();
