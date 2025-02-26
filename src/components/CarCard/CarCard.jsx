// import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/favoritesSlice';
import { formatMileage } from '../../utils/helpers';
import styles from './CarCard.module.css';
import PropTypes from 'prop-types';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === car.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className={styles.card}>
      <img src={car.img} alt={car.make} className={styles.image} />
      <h3 className={styles.title}>{car.make}</h3>
      <p className={styles.mileage}>Mileage: {formatMileage(car.mileage)} km</p>
      <p className={styles.price}>Price: {car.rentalPrice}</p>
      <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <Link to={`/catalog/${car.id}`} className={styles.detailsLink}>
        Read more
      </Link>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarCard;