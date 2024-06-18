import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <p>¿Listo para tu nivelación?</p>
        <p>
          A continuación vas a leer 100 preguntas en las que debes seleccionar
          la respuesta más acertada.
        </p>
        <p>
          No podrás volver hacia atrás una vez que des click en NEXT. Si no
          sabes la respuesta de alguna pregunta, puedes dar siguiente y al
          dejarla en blanco se contará como un error. Es mejor no adivinar para
          tener una mejor idea de tu nivel real 😉
        </p>
        <p>
          <strong>Let’s begin!</strong>
        </p>
      </div>
      <Button
        label="Next"
        type="button"
        handlerFunction={() => navigate('/register')}
        className="next-button"
      />
    </div>
  );
};

export default HomePage;
