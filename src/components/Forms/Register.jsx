import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Register.module.css';

import Button from '../UI/Button';

const Register = ({ userHandler }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [nationality, setNationality] = useState('');
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = {
      userName,
      email,
      birthDate,
      nationality,
      city,
    };
    userHandler(currentUser);
    navigate('/question');
  };

  const changeHandler = (value, identifier) => {
    if (identifier === 'username') {
      setUserName(value);
    }
    if (identifier === 'email') {
      setEmail(value);
    }
    if (identifier === 'birthdate') {
      setBirthDate(value);
    }
    if (identifier === 'nationality') {
      setNationality(value);
    }
    if (identifier === 'city') {
      setCity(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="username">Full Name</label>
      <input
        id="username"
        type="text"
        placeholder="John Doe"
        onChange={(e) => changeHandler(e.target.value, 'username')}
        value={userName}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="user@email.com"
        onChange={(e) => changeHandler(e.target.value, 'email')}
        value={email}
        required
      />
      <label htmlFor="birthdate">Birth date</label>
      <input
        id="birthdate"
        type="date"
        onChange={(e) => changeHandler(e.target.value, 'birthdate')}
        value={birthDate}
        required
      />
      <label htmlFor="nationality">Nationality</label>
      <input
        id="nationality"
        type="text"
        placeholder="Cuban"
        onChange={(e) => changeHandler(e.target.value, 'nationality')}
        value={nationality}
        required
      />
      <label htmlFor="city">City of Residence</label>
      <input
        id="city"
        type="text"
        placeholder="Miami"
        onChange={(e) => changeHandler(e.target.value, 'city')}
        value={city}
        required
      />
      <div className={styles.buttonContainer}>
        <Button type="submit" label="Submit" className="register-button" />
      </div>
    </form>
  );
};
export default Register;
