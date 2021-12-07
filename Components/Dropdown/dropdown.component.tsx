import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{m: 1, minWidth: 150, ml: 30}}>
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
  );
}
