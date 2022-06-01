import axios from 'axios';
import { API_URL_PATH, AUTH_TOKEN } from '../utils.ts/constants';

export default axios.create({
  baseURL: API_URL_PATH,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

axios.defaults.baseURL = API_URL_PATH;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
