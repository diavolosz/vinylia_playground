import logo from './logo.svg';
import './App.css';


import Fetch from './components/Fetch';
import Authenticaton from './components/Authentication.js/Authenticaton';

function App() {
  return (
    <div className="App">
      <Fetch />
      <Authenticaton />
    </div>
  );
}

export default App;
