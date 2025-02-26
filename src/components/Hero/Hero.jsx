// import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to RentalCar</h1>
      <p>Find your perfect car for rent</p>
      <Link to="/catalog" className={styles.button}>
        View Catalog
      </Link>
    </div>
  );
};

export default Hero;