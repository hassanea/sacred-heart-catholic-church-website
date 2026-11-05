const toKebabCase = (str: string) => {
  return str
    .split(" ")
    .map((el) => el.toLowerCase().replace(/\s/, "-"))
    .join("-");
};

export { toKebabCase };
