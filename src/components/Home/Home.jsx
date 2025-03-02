import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Орендуйте автомобіль своєї мрії!</h1>
        <p>Широкий вибір автомобілів для будь-яких потреб.</p>
        <Link to="/catalog" className={styles.button}>
          Переглянути каталог
        </Link>
      </div>
    </div>
  );
};

export default Home;