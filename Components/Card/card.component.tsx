import React from 'react';
import {CardContent, Typography, Card as MaterialCard} from '@mui/material';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.mainContainer}>
      <MaterialCard
        className={styles.wholeCard}
        sx={{minWidth: 1000, mr: 5, ml: 3, background: 'lightgoldenrodyellow'}}>
        <CardContent>
          <Typography sx={{fontSize: 40}} gutterBottom>
            News Board
          </Typography>
          <Typography className={styles.cardInfo} sx={{mr: 5, display: 'flex'}}>
            <ol>
              <li>Scholarship 1</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
              <li>Scholarship 2</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
              <li>Scholarship 3</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
            </ol>
          </Typography>
        </CardContent>
      </MaterialCard>
      <MaterialCard
        className={styles.wholeCard}
        sx={{minWidth: 450, mr: 4, background: 'lightgoldenrodyellow'}}>
        <CardContent>
          <Typography sx={{fontSize: 40}} gutterBottom>
            Events
          </Typography>
          <Typography className={styles.cardInfo} sx={{mb: 1.5}}>
            <ol>
              <li>Event 1</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
              <li>Event 2</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
              <li>Event 3</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, officia.
              </p>
            </ol>
          </Typography>
        </CardContent>
      </MaterialCard>
    </div>
  );
};

export default Card;
