import { useState } from 'react';
import styles from './QuestionCard.module.css';

const Question = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  return (
    <section className={styles.card}>
      <h2>
        {data.id}. {data.question}
      </h2>
      <ul>
        {data.options.map((option) => (
          <li
            key={option.id}
            className={selectedOption === option.id ? styles.selected : ''}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.id}) {option.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Question;
