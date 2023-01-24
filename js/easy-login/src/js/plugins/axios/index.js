import axios from 'axios';
import API_ENV from '../../services/api.config';
import interseptors from './interceptors';

const instance = axios.create({
  baseURL: API_ENV.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

interseptors(instance);

export default instance;