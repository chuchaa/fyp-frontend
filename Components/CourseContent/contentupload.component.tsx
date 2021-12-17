import React from 'react';
import {Card as MaterialCard, Button, Divider} from '@mui/material';
import styles from './coursecontent.module.css';

const ContentUpload = () => {
  return (
    <div className={styles.mainCon}>
      <MaterialCard sx={{width: '90%', height: '200px'}}>
        <h2>Lecture Contents</h2>
        <Button variant="contained" sx={{ml: '20px'}}>
          Add Content
        </Button>
        <Divider />
      </MaterialCard>
    </div>
  );
};

export default ContentUpload;
