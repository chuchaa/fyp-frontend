import React from 'react';
import styles from './studentlogin.module.css';
import {
  Card as MaterialCard,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
const StdLogin = () => {
  return (
    <div className={styles.mainContainer}>
      <MaterialCard className={styles.wholeCard}>
        <CardContent>
          <Typography sx={{fontSize: 30}} gutterBottom>
            Student Login
          </Typography>
          <hr className={styles.hr} />
        </CardContent>
        <TextField
          sx={{width: 320, ml: '85px'}}
          id="filled-basic"
          label="Reg no."
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

export default StdLogin;
