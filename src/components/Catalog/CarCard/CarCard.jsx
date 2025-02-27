import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../redux/favorites/favoritesSlice';
import { selectFavorites } from '../../../redux/favorites/favoritesSelectors';
import styles from './CarCard.module.css';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  return (
    <div className={styles.card}>
      <img src={car.img} alt={car.make} className={styles.carImage} />
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: {car.rentalPrice}</p>
      <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Link to={`/catalog/${car.id}`}>
        <button className={styles.detailsButton}>Read More</button>
      </Link>
    </div>
  );
};

export default CarCard;