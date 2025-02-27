import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  reducers: {
    setBrandFilter: (state, action) => {
      state.brand = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setMileageFromFilter: (state, action) => {
      state.mileageFrom = action.payload;
    },
    setMileageToFilter: (state, action) => {
      state.mileageTo = action.payload;
    },
    resetFilters: (state) => {
      state.brand = '';
      state.price = '';
      state.mileageFrom = '';
      state.mileageTo = '';
    },
  },
});

export const {
  setBrandFilter,
  setPriceFilter,
  setMileageFromFilter,
  setMileageToFilter,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;