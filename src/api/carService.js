import axios from "./axiosConfig";

// Отримати список брендів
export const getBrands = async () => {
  const { data } = await axios.get("/cars/brands");
  return data;
};

// Отримати список авто за фільтрами
export const getCars = async (filters) => {
  const { data } = await axios.get("/cars", { params: filters });
  return data;
};

// Отримати деталі авто
export const getCarById = async (id) => {
  const { data } = await axios.get(`/cars/${id}`);
  return data;
};
