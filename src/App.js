import logo from './logo.svg';
import './App.css';


import Fetch from './components/Fetch';
import Authenticaton from './components/Authentication.js/Authenticaton';
import { useState } from 'react';

function App() {

  const [logInState, setLogInState] = useState("")


  return (
    <div className="App">
      <Fetch />
      <Authenticaton 
      logInState={logInState}
      setLogInState={setLogInState}
      />
    </div>
  );
}

export default App;
