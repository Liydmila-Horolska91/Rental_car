import { createSelector } from '@reduxjs/toolkit';

export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.price;
export const selectMileageFrom = (state) => state.filters.mileageFrom;
export const selectMileageTo = (state) => state.filters.mileageTo;

export const selectFilters = (state) => state.filters;

export const selectFilteredCars = createSelector(
  [
    (state) => state.cars.items,
    selectBrand,
    selectPrice,
    selectMileageFrom,
    selectMileageTo,
  ],
  (cars, brand, price, mileageFrom, mileageTo) => {
    return cars.filter((car) => {
      const brandMatch =
        !brand || car.make.toLowerCase().includes(brand.toLowerCase());
      const priceMatch = !price || car.rentalPrice <= price;
      const mileageFromMatch =
        !mileageFrom || car.mileage >= mileageFrom;
      const mileageToMatch = !mileageTo || car.mileage <= mileageTo;

      return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });
  }
);