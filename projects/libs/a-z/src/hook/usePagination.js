import { useMemo } from 'react';

export const usePagination = (count) => {
  const countPagination = useMemo(() => {
    let res = [];

    for (let i = 1; i <= count; i++) {
      res.push(i);
    }
    return res;
  }, [count]);
  return countPagination;
};
