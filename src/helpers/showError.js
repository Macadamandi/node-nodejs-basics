const showError = (message) => {
  const coloredErrorMessage = "\x1b[35mFS operation failed" + (message ? "\n" + message : "") + "\x1b[0m";
  throw new Error(coloredErrorMessage);
};

export default showError;
