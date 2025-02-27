import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to RentalCar</h1>
      <p>Find your perfect car for rent.</p>
      <Link to="/catalog">
        <button className={styles.button}>View Catalog</button>
      </Link>
    </div>
  );
};

export default Home;