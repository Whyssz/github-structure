import axios from 'axios';
import { Pizza } from '../redux/reducers/pizzaSlice';



export const useHttp = () => {
  const request = async (url: string) => {
    try {
      const { data } = await axios.get<Pizza[]>(url);

      return data;
    } catch (e) {
      throw e;
    }
  };

  const singleRequest = async (url: string) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request, singleRequest };
};
