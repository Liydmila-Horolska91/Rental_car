import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../api/carService";

export const fetchCars = createAsyncThunk("cars/fetchCars", async (filters) => {
  return await getCars(filters);
});

const carsSlice = createSlice({
  name: "cars",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
