export const selectCars = (state) => state.cars.items;
export const selectCar = (state) => state.cars.car;
export const selectCarsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;