import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';

function App() {
  const [user, setUser] = useState({});

  const saveUser = (currentUser) => {
    setUser({ ...currentUser });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RegisterPage saveUser={saveUser} />}
        />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
