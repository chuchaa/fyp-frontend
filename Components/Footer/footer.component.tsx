import React from 'react';
import styles from './footer.module.css';

const FooterComponent = () => {
  return (
    <footer className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.secAboutUs}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
            aperiam asperiores beatae cumque delectus deleniti, dolorum est ex,
            fugit inventore ipsa.
          </p>
        </div>
        <div className={styles.secFollowUs}>
          <h2>Follow Us</h2>
          <ul className={styles.linksList}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Reddit</a>
            </li>
          </ul>
        </div>

        <div className={styles.secNewsletter}>
          <h2>Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <input type="email" placeholder={'Type e-mail'} />
          <button>SEND</button>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.copyrightText}>
        <p>© 2021 SES, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
