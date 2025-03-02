import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ brand, price, mileageFrom, mileageTo });
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Бренд"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ціна"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Пробіг від"
        value={mileageFrom}
        onChange={(e) => setMileageFrom(e.target.value)}
      />
      <input
        type="number"
        placeholder="Пробіг до"
        value={mileageTo}
        onChange={(e) => setMileageTo(e.target.value)}
      />
      <button type="submit">Фільтрувати</button>
    </form>
  );
};

export default Filters;