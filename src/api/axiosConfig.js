import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://car-rental-api.goit.global/api',
});

export const getCars = async (params) => {
  const { data } = await instance.get('/cars', { params });
  return data;
};

export const getCarById = async (id) => {
  const { data } = await instance.get(`/cars/${id}`);
  return data;
};

export const getBrands = async () => {
    const { data } = await instance.get('/cars/brands');
    return data;
};

export default instance;