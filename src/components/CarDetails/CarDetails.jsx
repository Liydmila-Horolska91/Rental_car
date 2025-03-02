import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarById } from '../../redux/cars/carsOperations';
import RentalForm from './RentalForm/RentalForm';
import Loader from '../Shared/Loader/Loader';
import styles from './CarDetails.module.css';
import { formatMileage } from '../../utils';

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.cars.selectedCar);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const [isRentalSuccess, setIsRentalSuccess] = useState(false);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const handleRentalSuccess = () => {
    setIsRentalSuccess(true);
    setTimeout(() => setIsRentalSuccess(false), 3000); // Приховати повідомлення через 3 секунди
  };

  if (isLoading || !car) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <img src={car.photo} alt={car.model} className={styles.photo} />
      <h2 className={styles.model}>{car.make} {car.model}</h2>
      <p className={styles.mileage}>Пробіг: {formatMileage(car.mileage)}</p>
      <p className={styles.price}>Ціна: {car.rentalPrice}</p>
      <p className={styles.description}>{car.description}</p>
      <RentalForm carId={car.id} onRentalSuccess={handleRentalSuccess} />
      {isRentalSuccess && (
        <div className={styles.successMessage}>
          Автомобіль успішно орендовано!
        </div>
      )}
    </div>
  );
};

export default CarDetails;