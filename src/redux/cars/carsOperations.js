import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get('/cars', { params: filters });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);