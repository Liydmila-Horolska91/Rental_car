import { createSelector } from '@reduxjs/toolkit';

export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.car;
export const selectCarsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectCurrentPage = (state) => state.cars.currentPage;

export const selectFilteredCars = createSelector(
  [selectCars, (state) => state.filters],
  (cars, filters) => {
    if (!filters) {
      return cars;
    }

    return cars.filter((car) => {
      const brandMatch =
        !filters.brand || car.make.toLowerCase().includes(filters.brand.toLowerCase());
      const priceMatch = !filters.price || car.rentalPrice <= filters.price;
      const mileageFromMatch =
        !filters.mileageFrom || car.mileage >= filters.mileageFrom;
      const mileageToMatch = !filters.mileageTo || car.mileage <= filters.mileageTo;

      return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });
  }
);