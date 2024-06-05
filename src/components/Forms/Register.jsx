//TODO: Incluir fecha de nacimiento, nacionalidad y lugar de residencia.

import { useState } from "react";
import Button from "../UI/Button"


const Register = ({ userHandler }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [nationality, setNationality] = useState('');
    const [city, setCity] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = {
            userName,
            email,
            birthDate,
            nationality,
            city
        }
        userHandler(currentUser)
    }

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
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="city">City</label>
          <input
              id="city"
              type="text"
              placeholder="Miami"
              onChange={(e) => changeHandler(e.target.value, 'city')}
              value={city}
              required
          />
          <Button type='submit' handlerFunction={() => console.log('Button clicked')} label='Submit'/>
    </form>
  )
}
export default Register