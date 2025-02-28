import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { brand: "", price: "", mileage: { min: "", max: "" } },
  reducers: {
    setBrand: (state, action) => { state.brand = action.payload; },
    setPrice: (state, action) => { state.price = action.payload; },
    setMileage: (state, action) => { state.mileage = action.payload; },
  },
});

export const { setBrand, setPrice, setMileage } = filtersSlice.actions;
export default filtersSlice.reducer;
