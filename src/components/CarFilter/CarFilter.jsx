import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} from '../../redux/filters/filtersSlice';
import { fetchCars, fetchBrands } from '../../redux/cars/carsOperations';
import styles from './CarFilter.module.css';
import Loader from '../Loader/Loader';

const CarFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const brands = useSelector((state) => state.filters.brands);
  const brandsLoading = useSelector((state) => state.filters.brandsLoading);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleBrandChange = (e) => {
    dispatch(setBrand(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(setPrice(e.target.value));
  };

  const handleMileageFromChange = (e) => {
    dispatch(setMileageFrom(e.target.value));
  };

  const handleMileageToChange = (e) => {
    dispatch(setMileageTo(e.target.value));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCars(filters));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(fetchCars({}));
  };

  return (
    <form onSubmit={handleFilterSubmit} className={styles.filterForm}>
      <select value={filters.brand} onChange={handleBrandChange}>
        <option value="">All Brands</option>
        {brandsLoading ? (
          <option disabled>Loading...</option>
        ) : (
          brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))
        )}
      </select>
      <input
        type="number"
        placeholder="Price"
        value={filters.price}
        onChange={handlePriceChange}
      />
      <input
        type="number"
        placeholder="Mileage from"
        value={filters.mileageFrom}
        onChange={handleMileageFromChange}
      />
      <input
        type="number"
        placeholder="Mileage to"
        value={filters.mileageTo}
        onChange={handleMileageToChange}
      />
      <button type="submit">Filter</button>
      <button type="button" onClick={handleResetFilters}>
        Reset
      </button>
      {brandsLoading && <Loader />}
    </form>
  );
};

export default CarFilter;