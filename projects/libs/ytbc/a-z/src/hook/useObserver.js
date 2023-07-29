import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, cb) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return; //first check
    if (observer.current) observer.current.disconnect(); // check current area visible
    const callback = function (entries) {
      if (entries[0].isIntersecting && canLoad) {
        cb();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
