// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/favoritesSlice';
import styles from './FavoriteButton.module.css';
import PropTypes from 'prop-types';

const FavoriteButton = ({ car }) => {
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
    <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};

FavoriteButton.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteButton;