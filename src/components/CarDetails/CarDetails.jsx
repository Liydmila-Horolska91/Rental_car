// import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CarDetails.module.css';
import RentForm from '../RentForm/RentForm';
import { formatMileage } from '../../utils/helpers';

const CarDetails = () => {
  const car = useSelector((state) => state.cars.car);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.details}>
      <img src={car.img} alt={car.make} className={styles.image} />
      <h2 className={styles.title}>{car.make}</h2>
      <p className={styles.description}>{car.description}</p>
      <p className={styles.mileage}>Mileage: {formatMileage(car.mileage)} km</p>
      <p className={styles.price}>Price: {car.rentalPrice}</p>
      <RentForm carId={car.id} />
    </div>
  );
};

export default CarDetails;