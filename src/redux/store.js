import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import filtersReducer from './filters/filtersSlice';
import favoritesReducer from './favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export default store;