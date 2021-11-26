import React from 'react';
import {Card as MaterialCard, CardContent, Typography} from '@mui/material';
import styles from '../footer/footer.module.css';

const FooterComponent = () => {
  return (
    <footer className={styles.footerContainer}>
      <hr className={styles.hr} />
      <div>
        <MaterialCard
          className={styles.footerCard}
          sx={{
            background: 'lightgoldenrodyellow',
          }}>
          <CardContent className={styles.footerData}>
            <Typography
              sx={{fontSize: 20, ml: 12, color: 'darkblue'}}
              gutterBottom>
              Social Links
            </Typography>
            <Typography sx={{ml: 8}}>
              <ul className={styles.footerCardInfo}>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </Typography>
            <Typography
              sx={{fontSize: 20, ml: 12, color: 'darkblue'}}
              gutterBottom>
              Social Links
            </Typography>
            <Typography sx={{ml: 8}}>
              <ul className={styles.footerCardInfo}>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </MaterialCard>
      </div>
    </footer>
  );
};

export default FooterComponent;
