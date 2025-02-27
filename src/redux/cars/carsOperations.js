import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, getCarById } from '../../api/axiosConfig';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    try {
      const response = await getCars(params);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await getCarById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);