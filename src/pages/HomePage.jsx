import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      <Button
        label="Next"
        type="button"
        handlerFunction={() => navigate('/register')}
      />
    </>
  );
};
export default HomePage;
