// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreCars } from '../../redux/cars/carsOperations';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const filters = useSelector((state) => state.filters);

  const handleLoadMore = () => {
    dispatch(loadMoreCars({ filters, page: cars.currentPage + 1 }));
  };

  if (cars.currentPage >= cars.totalPages) {
    return null;
  }

  return (
    <button onClick={handleLoadMore} className={styles.button}>
      Load More
    </button>
  );
};

export default LoadMoreButton;