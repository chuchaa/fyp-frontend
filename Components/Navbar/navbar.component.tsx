import React from 'react';
import styles from './navcomp.module.css';
import {Avatar} from '@mui/material';
import Link from "next/link"

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
              <a href="studentlogin">Student Login</a>
            </li>
            <li>
              <a href="facultylogin">Faculty Login</a>
            </li>
            <li>
              <Link href="/questionbank"><a href="#">Question Bank</a></Link>
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
