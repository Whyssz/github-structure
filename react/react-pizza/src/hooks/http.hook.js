import axios from 'axios';
import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  
  const request = useCallback(async (url) => {
    setLoading(true);
    return await axios.get(url);
  }, []);

  return { request, loading, setLoading };
};
