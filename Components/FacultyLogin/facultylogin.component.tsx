import React from 'react';
import styles from '../StudentLogin/studentlogin.module.css';

import {
  Card as MaterialCard,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
const FcltLogin = () => {
  return (
    <div className={styles.mainContainer}>
      <MaterialCard className={styles.wholeCard}>
        <CardContent>
          <Typography sx={{fontSize: 30}} gutterBottom>
            Faculty Login
          </Typography>
          <hr className={styles.hr} />
        </CardContent>
        <TextField
          sx={{width: 320, ml: '85px'}}
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          sx={{width: 320, ml: '85px'}}
          id="filled-basic"
          label="Password"
          variant="filled"
        />
        <button className={styles.button}>Login</button>
        <p className={styles.pP}>
          Forgot Password?
          <a href="#"> Click Here!</a>
        </p>
      </MaterialCard>
    </div>
  );
};

export default FcltLogin;
