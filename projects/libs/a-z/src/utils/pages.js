export const getPageCount = (totalCount, limit) => {
  return Math.floor(totalCount / limit);
};
