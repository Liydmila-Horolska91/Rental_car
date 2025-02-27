import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import filterReducer from './filter/filterSlice';
import favoritesReducer from './favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
});