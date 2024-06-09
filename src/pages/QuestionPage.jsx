import { useState } from 'react';
import { questions } from '../data/exam.json';

import Question from '../components/Question/Question';
import Button from '../components/UI/Button';

const data = questions;

const QuestionPage = () => {
  const [index, setIndex] = useState(0);

  const buttonHandler = (identifier) => {
    if (identifier === 'next') {
      setIndex((prevValue) => prevValue + 1);
    }
    if (identifier === 'back') {
      if (index !== 0) {
        setIndex((prevValue) => prevValue - 1);
      }
    }
  };
  return (
    <>
      <Question data={data[index]} />;
      <Button label={'Next'} handler={buttonHandler} />
      {index && <Button label={'Back'} handler={buttonHandler} />}
    </>
  );
};
export default QuestionPage;
