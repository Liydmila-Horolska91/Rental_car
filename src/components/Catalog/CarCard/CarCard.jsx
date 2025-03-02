import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../redux/favorites/favoritesSlice';
import styles from './CarCard.module.css';
import { formatMileage } from '../../../utils';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((favCar) => favCar.id === car.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div className={styles.card}>
      <img src={car.photo} alt={car.model} className={styles.photo} />
      <h2 className={styles.model}>{car.make} {car.model}</h2>
      <p className={styles.mileage}>Пробіг: {formatMileage(car.mileage)}</p>
      <p className={styles.price}>Ціна: {car.rentalPrice}</p>
      <button className={styles.favoriteButton} onClick={handleToggleFavorite}>
        {isFavorite ? 'Видалити з обраного' : 'Додати до обраного'}
      </button>
      <Link to={`/catalog/${car.id}`} className={styles.detailsButton}>
        Детальніше
      </Link>
    </div>
  );
};

export default CarCard;