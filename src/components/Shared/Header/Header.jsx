import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={styles.link}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;