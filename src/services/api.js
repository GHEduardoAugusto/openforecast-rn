import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'cdc7402e45bb096aea5cff8d4578f284',
    units: 'metric',
    mode: 'json',
  },
});

export default api;
