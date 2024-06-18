import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  const [user, setUser] = useState({});
  const [mistakes, setMistakes] = useState([]);

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
        <Route
          path="/question"
          element={
            <QuestionPage mistakes={mistakes} setMistakes={setMistakes} />
          }
        />
        <Route
          path="/results"
          element={
            <ResultsPage
              score={100 - mistakes.length}
              user={user}
              mistakes={mistakes}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
