const getId = (urlPath: any) => {
  return urlPath.match(/([^\/]*)\/*$/)[0]
};

export { getId };
