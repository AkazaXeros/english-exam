import { useState } from 'react';

import { questions } from '../data/exam.json';
import { texts } from '../data/texts.json';

import Question from '../components/Question/Question';
import Button from '../components/UI/Button';

import styles from './QuestionPage.module.css';

const data = questions;
const examTexts = texts;

const textBasedIndexes = [
  15, 16, 17, 18, 19, 35, 36, 37, 38, 39, 55, 56, 57, 58, 59, 75, 76, 77, 78,
  79, 95, 96, 97, 98, 99,
];

const mappedTexts = {
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  35: 1,
  36: 1,
  37: 1,
  38: 1,
  39: 1,
  55: 2,
  56: 2,
  57: 2,
  58: 2,
  59: 2,
  75: 3,
  76: 3,
  77: 3,
  78: 3,
  79: 3,
  95: 4,
  96: 4,
  97: 4,
  98: 4,
  99: 4,
};

const QuestionPage = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [mistakes, setMistakes] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const question = data[index];

  const buttonHandler = (identifier) => {
    if (identifier === 'next') {
      if (selectedOption !== question.correctAnswer) {
        setMistakes([
          ...mistakes,
          {
            questionId: question.id,
            userAnswer: selectedOption || 'empty',
            correctAnswer: question.correctAnswer,
          },
        ]);
      }
      if (index !== 99) {
        setIndex((prevValue) => prevValue + 1);
      } else if (index === 99) {
        setShowSubmit(true);
      }

      setSelectedOption(null);
    }
    // if (identifier === 'back') {
    //   if (index !== 0) {
    //     setIndex((prevValue) => prevValue - 1);
    //   }
    // }
  };

  let message = textBasedIndexes.includes(index)
    ? 'Read the text, then choose the best answer.'
    : 'Choose the best answer.';

  console.log(index);
  return (
    <section className={styles.section}>
      <h2>{message}</h2>
      <div className={styles.textWrapper}>
        <p>
          {examTexts[mappedTexts[index]]?.text
            ? examTexts[mappedTexts[index]]?.text
            : ''}
        </p>
      </div>
      <div className={styles.cardWrapper}>
        <Question
          data={question}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className={styles.buttonContainer}>
        {showSubmit && (
          <Button
            label={'Submit'}
            handlerFunction={() => console.log(mistakes)}
            className="register-button"
          />
        )}
        {!showSubmit && (
          <Button
            label={'Next'}
            handlerFunction={() => buttonHandler('next')}
            className="next-button"
          />
        )}
      </div>
    </section>
  );
};

export default QuestionPage;
