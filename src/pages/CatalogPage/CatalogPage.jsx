import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import CarCard from '../../components/CarCard/CarCard';
import CarFilter from '../../components/CarFilter/CarFilter';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Loader from '../../components/Loader/Loader';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const isLoading = useSelector((state) => state.cars.isLoading);

  useEffect(() => {
    dispatch(fetchCars({}));
  }, [dispatch]);

  return (
    <div className={styles.catalog}>
      <CarFilter />
      {isLoading && <Loader />}
      <div className={styles.carsList}>
        {cars.items.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <LoadMoreButton />
    </div>
  );
};

export default CatalogPage;