import { useState } from "react";
import RegisterPage from "./pages/RegisterPage";

function App() {

  const [user, setUser] = useState({});

  const saveUser = (currentUser) => {
    setUser({...currentUser})
  }

  return (
    <>
      <RegisterPage saveUser={saveUser}/>
    </>
  );
}

export default App;
