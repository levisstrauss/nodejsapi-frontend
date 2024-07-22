import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.85.1.97:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;