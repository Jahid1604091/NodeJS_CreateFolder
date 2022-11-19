import { url } from './constants';
import axios from 'axios';
// Create an instance of axios
const http = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});


http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      console.log(err)
    }
    return Promise.reject(err);
  }
);

export default http;