import { useState } from 'react';
import { questions } from '../data/exam.json';
import Question from '../components/Question/Question';
import Button from '../components/UI/Button';
import styles from './QuestionPage.module.css';

const data = questions;

const QuestionPage = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

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

  if (index > 3) return <h2>End of mock up</h2>;

  return (
    <section className={styles.section}>
      <div className={styles.cardWrapper}>
        <Question
          data={data[index]}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className={styles.buttonContainer}>
        {index > 0 && (
          <Button
            label={'Back'}
            handlerFunction={() => buttonHandler('back')}
            className="back-button"
          />
        )}
        <Button
          label={'Next'}
          handlerFunction={() => buttonHandler('next')}
          className="next-button"
        />
      </div>
    </section>
  );
};

export default QuestionPage;
