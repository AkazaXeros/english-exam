import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { questions } from '../data/exam.json';
import { texts } from '../data/texts.json';

import Question from '../components/Question/Question';
import Button from '../components/UI/Button';

import styles from './QuestionPage.module.css';
import getTextForIndex from '../utils/getText';

const textBasedIndexes = new Set([
  15, 16, 17, 18, 19, 35, 36, 37, 38, 39, 55, 56, 57, 58, 59, 75, 76, 77, 78,
  79, 95, 96, 97, 98, 99,
]);

const QuestionPage = ({ mistakes, setMistakes }) => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const question = questions[index];

  const navigate = useNavigate();

  const nextBtnHandler = () => {
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
    if (index < questions.length - 1) {
      setIndex((prevValue) => prevValue + 1);
    } else {
      navigate('/results');
    }
    setSelectedOption(null);
  };

  let message = textBasedIndexes.has(index)
    ? 'Read the text, then choose the best answer.'
    : 'Choose the best answer.';

  const textToShow = getTextForIndex(index, texts);

  return (
    <section className={styles.section}>
      <h2>{message}</h2>
      {textToShow && (
        <div className={styles.textWrapper}>
          <p className={styles.textLayout}>{textToShow}</p>
        </div>
      )}
      <div className={styles.cardWrapper}>
        <Question
          data={question}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          label={'Next'}
          handlerFunction={nextBtnHandler}
          className="next-button"
        />
      </div>
    </section>
  );
};

export default QuestionPage;
