export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const sortByAlphabetical = (array) => {
  return array.sort((a, b) =>
    a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase())
  );
};
