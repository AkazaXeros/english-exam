import { useState } from 'react';

import emailjs from '@emailjs/browser';
import styles from './ResultsPage.module.css';
import generateMistakeMessage from '../utils/messageGenerator';
import calculateLevel from '../utils/levelCalculator';

const ResultsPage = ({ score, user, mistakes }) => {
  const [isReportSent, setIsReportSent] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const emptyMistakes = mistakes
    .filter((mistake) => mistake.userAnswer === 'empty')
    .map((mistake) => mistake.questionId);

  const nonEmptyMistakes = mistakes.filter(
    (mistake) => mistake.userAnswer !== 'empty'
  );

  const sendEmail = () => {
    const message = generateMistakeMessage(nonEmptyMistakes);
    const userInfo =
      `Name: ${user.userName}\n` +
      `Email: ${user.email}\n` +
      `Birth date: ${user.birthDate}\n` +
      `Nationality: ${user.nationality}\n` +
      `City of Residence: ${user.city}\n` +
      `Unanswered questions: ${emptyMistakes}\n` +
      `Level: ${calculateLevel(score)}\n`;

    const templateParams = {
      userName: user.userName,
      score,
      userInfo,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsReportSent(true);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <div className={styles.container}>
      {isReportSent ? (
        <div>
          <h3>Reporte Enviado.</h3>
        </div>
      ) : (
        <>
          <h3 className={styles.heading}>Exam Finished</h3>
          <p className={styles.message}>Your score was: {score}/100</p>
          <p className={styles.teacherContact}>
            Your teacher will contact you soon.
          </p>
          <button className={styles.sendButton} onClick={sendEmail}>
            Enviar Reporte
          </button>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
