import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/api';

export const fetchCars = async (filters) => {
  const response = await axios.get('/cars', { params: filters });
  return response.data;
};

export const fetchCarById = async (id) => {
  const response = await axios.get(`/cars/${id}`);
  return response.data;
};

// Додайте інші необхідні функції для взаємодії з API