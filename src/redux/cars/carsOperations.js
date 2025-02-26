import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosConfig';

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
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCars = createAsyncThunk(
  'cars/loadMore',
  async ({ filters, page }, thunkAPI) => {
    try {
      const response = await axios.get('/cars', { params: { ...filters, page } });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);