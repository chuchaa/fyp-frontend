import React from 'react';

const QUESTIONS_ARRAY = [
  {
    questionStatement:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tenetur?',
    options: [
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
    ],
    correctAnswer: 2,
    totalMars: 5,
    uploadedBy: 'Ali Mujahid',
  },
  {
    questionStatement:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tenetur?',
    options: [
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
    ],
    correctAnswer: 1,
    totalMars: 5,
    uploadedBy: 'Muhammad Waleed',
  },
  {
    questionStatement:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tenetur?',
    options: [
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
    ],
    correctAnswer: 4,
    totalMars: 5,
    uploadedBy: 'Ali Mujahid',
  },
  {
    questionStatement:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tenetur?',
    options: [
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
      {statement: 'Lorem ipsum dolor sit amet'},
    ],
    correctAnswer: 3,
    totalMars: 5,
    uploadedBy: 'Ali Mujahid',
  },
];

const Questions = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'black',
      }}>
      {QUESTIONS_ARRAY.map((value, index) => {
        return (
          <div key={index} style={{marginBottom: '50px'}}>
            <h2>Question Number: {index + 1}</h2>
            <h3>{value.questionStatement}</h3>
            <h2>Options</h2>
            <ul>
              {value.options.map((option, index) => {
                return (
                  <li key={index}>
                    <h5>{option.statement}</h5>
                  </li>
                );
              })}
            </ul>
            <h3>Correct Option: {value.correctAnswer + 1}</h3>
            <h3>Total Marks: {value.totalMars}</h3>
            <h3>Uploaded By: {value.uploadedBy}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
