import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { setFilters } from '../../redux/filters/filtersSlice';
import CarCard from './CarCard/CarCard';
import Filters from './Filters/Filters';
import Loader from '../Shared/Loader/Loader';
import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.items);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const filters = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars({ ...filters, page }));
  }, [dispatch, filters, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
    setPage(1); // Скидання сторінки при зміні фільтрів
  };

  return (
    <div className={styles.container}>
      <Filters onFilterChange={handleFilterChange} />
      {isLoading && <Loader />}
      <div className={styles.carsGrid}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      {cars.length > 0 && (
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
          Завантажити ще
        </button>
      )}
    </div>
  );
};

export default Catalog;