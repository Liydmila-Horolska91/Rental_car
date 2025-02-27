import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import {
  selectCars,
  selectCarsLoading,
  selectCarsError,
} from '../../redux/cars/carsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { resetFilters } from '../../redux/filter/filterSlice';
import CarCard from './CarCard/CarCard';
import Filter from './Filter/Filter';
import Loader from '../Shared/Loader/Loader';
import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);
  const filter = useSelector(selectFilter);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(fetchCars({ ...filter, page }));
  }, [dispatch, filter, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.carsGrid}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <button className={styles.loadMoreButton} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default Catalog;