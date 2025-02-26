// import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;