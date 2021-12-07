import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {
  Card as MaterialCard,
  CardContent,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import styles from './mcqscard.module.css';

export default function BasicSelect() {
  const [age, setAge] = React.useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <MaterialCard
        className={styles.wholeCard}
        sx={{
          minWidth: 10,
          mr: 70,
          ml: 25,
          background: 'lightgoldenrodyellow',
        }}>
        <Box>
          <FormControl sx={{m: 1, minWidth: 150, ml: 70}}>
            <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Question Type"
              onChange={handleChange}>
              <MenuItem value={'10'}>Objective(MCQs)</MenuItem>
              <MenuItem value={'20'}>Objective(Fill)</MenuItem>
              <MenuItem value={'30'}>Subjective</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <CardContent className={styles.content}>
          <Typography sx={{fontSize: 25, mb: 0}} gutterBottom>
            <TextField
              sx={{width: 700}}
              id="standard-basic"
              multiline
              maxRows={15}
              label="Question Statement"
              variant="standard"
            />
          </Typography>
          <Typography className={styles.cardInfo}>
            <TextField
              sx={{width: 700}}
              id="filled-basic"
              multiline
              maxRows={15}
              label="Option"
              variant="filled"
            />
            <TextField
              sx={{width: 700}}
              id="filled-basic"
              multiline
              maxRows={15}
              label="Detailed Answer"
              variant="filled"
            />
          </Typography>
        </CardContent>
        <TextField
          sx={{m: 1, width: 100, ml: 77}}
          id="filled-basic"
          label="Marks"
          variant="filled"
        />
        <TextField
          sx={{m: 1, width: 700, ml: 2}}
          id="filled-basic"
          label="Correct Answer (option/detailed)"
          variant="filled"
        />
      </MaterialCard>
    </div>
  );
}
