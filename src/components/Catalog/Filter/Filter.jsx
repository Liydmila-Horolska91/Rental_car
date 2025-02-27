import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBrandFilter,
  setPriceFilter,
  setMileageFromFilter,
  setMileageToFilter,
} from '../../../redux/filter/filterSlice';
import { getBrands } from '../../../api/axiosConfig';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const brandsData = await getBrands();
      setBrands(brandsData);
    };
    fetchBrands();
  }, []);

  const handleBrandChange = (e) => {
    dispatch(setBrandFilter(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };

  const handleMileageFromChange = (e) => {
    dispatch(setMileageFromFilter(e.target.value));
  };

  const handleMileageToChange = (e) => {
    dispatch(setMileageToFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <select onChange={handleBrandChange} className={styles.filterSelect}>
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Price"
        onChange={handlePriceChange}
        className={styles.filterInput}
      />
      <input
        type="number"
        placeholder="Mileage From"
        onChange={handleMileageFromChange}
        className={styles.filterInput}
      />
      <input
        type="number"
        placeholder="Mileage To"
        onChange={handleMileageToChange}
        className={styles.filterInput}
      />
    </div>
  );
};

export default Filter;