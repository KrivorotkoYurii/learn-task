import React from 'react';
import styles from './Header.module.scss';
import mainLogo from './tomato.png';
import { Navigation } from './components/Navigation';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logolink}>
        <img className={styles.header__logo} src={mainLogo} alt="logo" />
      </Link>
      <nav className={styles['nav-bar']}>
        <Navigation />
      </nav>
    </header>
  );
};
