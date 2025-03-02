import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../../Catalog/CarCard/CarCard';
import styles from './Favorite.module.css';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className={styles.container}>
      <h1>Обрані автомобілі</h1>
      <div className={styles.carsGrid}>
        {favorites.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;