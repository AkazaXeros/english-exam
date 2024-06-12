import styles from './QuestionCard.module.css';

const Question = ({ data, setSelectedOption, selectedOption }) => {
  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  // Split question text based on newline and handle A: B: parts
  const splitQuestionText = data.question.split('\n');

  return (
    <div className={styles.card}>
      <h3>
        {data.id}.{' '}
        {splitQuestionText.map((part, index) => (
          <span key={index}>
            {part}
            <br />
          </span>
        ))}
      </h3>
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
    </div>
  );
};

export default Question;
