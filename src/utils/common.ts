import slugify from "slugify";
export const convertSlugToUrl = (str: string) => {
  if (!str) return "";

  return slugify(str, {
    lower: true,
    locale: "vi",
  });
};

export const getId = (str: string) => {
  if (!str) return "";

  const arr = str.split("-");
  return arr[arr.length - 1];
};
