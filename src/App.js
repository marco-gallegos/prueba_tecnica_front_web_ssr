import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { ContextPrueba } from './context/context'

function App() {
  const { name, setName } = React.useContext(ContextPrueba);

  const loadName = () => {
    axios.post('http://localhost:4000/').then(res => {
      console.log(res.data);
      setName(res.data);
    })
  }

  React.useEffect(loadName, [loadName]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
