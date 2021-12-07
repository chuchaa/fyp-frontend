import React from 'react';
import styles from './navcomp.module.css';
import {Avatar} from '@mui/material';

const NavComp = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.nav_main}>
        <img className={styles.logo} src="/edu_thumb.png" alt="logo" />
        <h1 className={styles.logo_name}>Smart Education System (SES)</h1>
        <nav>
          <ul className={styles.nav_options}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Student Login</a>
            </li>
            <li>
              <a href="#">Faculty Login</a>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>Login</button>
        <Avatar src="/profile_logo.jpg" />
      </div>
      <hr className={styles.hr} />
    </header>
  );
};
export default NavComp;
