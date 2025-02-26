import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://car-rental-api.goit.global/api',
});

export default instance;