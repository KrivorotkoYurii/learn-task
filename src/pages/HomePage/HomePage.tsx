import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import logoForHomePage from '../../components/Header/tomato.png';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Recipe Website!</h1>
      <img
        src={logoForHomePage}
        alt="logo with big tomato"
        className={styles.homePage__logo}
      />
      <p className={styles.homePage__text}>
        Find your favorite dishes in our catalog.
      </p>
      <Link to="/catalog">
        <button className={styles.button}>Go to Catalog</button>
      </Link>
    </div>
  );
};
