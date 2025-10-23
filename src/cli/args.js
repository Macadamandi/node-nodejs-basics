const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  const prefix = "--";

  for (const [index, prop] of args.entries()) {
    if (prop.startsWith(prefix) && index + 1 < args.length && !args[index + 1].startsWith(prefix)) {
      result.push(`${prop.slice(2)} is ${args[index + 1]}`);
    }
  }

  console.log(result.join(", "));
};

parseArgs();
