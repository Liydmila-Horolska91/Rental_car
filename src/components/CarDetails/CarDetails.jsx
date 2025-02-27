import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/carsOperations';
import {
  selectCar,
  selectCarsLoading,
  selectCarsError,
} from '../../redux/cars/carsSelectors';
import RentalForm from './RentalForm/RentalForm';
import Loader from '../Shared/Loader/Loader';
import styles from './CarDetails.module.css';

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const loading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className={styles.container}>
      <img src={car.img} alt={car.make} className={styles.carImage} />
      <h2>
        {car.make} {car.model}
      </h2>
      <p>Year: {car.year}</p>
      <p>Price: {car.rentalPrice}</p>
      <p>Description: {car.description}</p>
      <RentalForm carId={id} />
    </div>
  );
};

export default CarDetails;