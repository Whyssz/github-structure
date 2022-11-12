export const sortItems = (list, value) => {
  const items = list?.filter((obj) => {
    if (obj.title.toLowerCase().includes(value.toLocaleLowerCase())) {
      return true;
    }
    return false;
  });

  return items;
};
