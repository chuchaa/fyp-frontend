import React from 'react';
import McqCard from '../Components/McqCard/mcqscard.component';

const QuestionBank = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
      }}>
      <McqCard />
    </div>
  );
};

export default QuestionBank;
