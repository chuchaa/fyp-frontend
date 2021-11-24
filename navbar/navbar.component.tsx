import React from 'react';
import styles from './styles.navcomp.module.css';

const NavComp = () => {
  return (
    <header className={styles.nav_main}>
      <img className={styles.logo} src="/edu_thumb.png" alt="logo" />
      <nav>
        <ul className={styles.nav_options}>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Semester Card</a>
          </li>
          <li>
            <a href="#">Fees</a>
          </li>
          <li>
            <a href="#">Result Card</a>
          </li>
        </ul>
      </nav>
      <button className={styles.button}>Login</button>
    </header>
  );
};
export default NavComp;
