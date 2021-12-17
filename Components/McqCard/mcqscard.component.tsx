import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {
  Button,
  Card as MaterialCard,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './mcqscard.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicSelect() {
  const [questionType, setQuestionType] = React.useState('mcq');
  const [options, setOptions] = React.useState([]);
  const [isModalOpen, setModalVisibility] = React.useState(false);
  const [optionModalText, setOptionModalText] = React.useState('');
  const [questionsArray, setQuestionsArray] = React.useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value);
  };

  const handleClose = () => {
    setModalVisibility(false);
  };

  return (
    <MaterialCard className={styles.materialCard}>
      <h3>QuestionComponent Bank</h3>
      <Divider />
      <div className={styles.mainCardContent}>
        <div className={styles.dropdown}>
          <div>
            <FormControl>
              <InputLabel id="questionLabel">QuestionCompnent Type</InputLabel>
              <Select
                labelId="questionLabel"
                className={styles.select}
                style={{width: '200px', height: '60px'}}
                id="questionType"
                value={questionType}
                label="Select QuestionCompnent Type"
                onChange={handleChange}>
                <MenuItem value="mcq">MCQ's</MenuItem>
                {/*<MenuItem value="fib">Fill in the Blanks</MenuItem>*/}
                <MenuItem value="detailedQuestions">
                  Detailed Questions
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={() => {
                setQuestionsArray(prevState =>
                  prevState.concat({question: ''}),
                );
              }}
              variant="contained"
              style={{marginLeft: '20px', height: '60px'}}>
              Add Question Component
            </Button>
          </div>
          <h3>Total Marks: 20</h3>
        </div>
        <div className={styles.mcqContainer}>
          {questionsArray.map((value, index) => {
            return (
              <div key={index}>
                <div className={styles.question}>
                  <TextField
                    style={{width: '70%'}}
                    label="Question Statement"
                    variant="outlined"
                    minRows={3}
                    maxRows={3}
                    multiline
                  />
                  <Button
                    variant="contained"
                    onClick={() => {
                      setModalVisibility(true);
                    }}>
                    Add Option
                  </Button>
                </div>
                <div>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group">
                        {options.map(value => {
                          return (
                            <FormControlLabel
                              value={value.value}
                              control={<Radio />}
                              label={value.value
                                .replaceAll('\\s', '')
                                .toLowerCase()}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modalOptionText" variant="h6" component="h2">
            Add Option
          </Typography>
          <TextField
            onChange={event => {
              setOptionModalText(event.target.value);
            }}
            value={optionModalText}
            label="Type Option Text"
          />
          <Button
            onClick={() => {
              setOptions(prevState =>
                prevState.concat({value: optionModalText}),
              );
              setModalVisibility(false);
              setOptionModalText('');
            }}>
            Save Option
          </Button>
        </Box>
      </Modal>
    </MaterialCard>
  );
}
