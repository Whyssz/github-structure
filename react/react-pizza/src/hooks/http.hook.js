import axios from 'axios';

export const useHttp = () => {
  const request = async (url) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
