import { useState } from 'react';

export const useFetching = (cb) => {
  const [isPostLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isPostLoading, error];
};
