import React, {useState} from 'react';
import Clicker from './Clicker';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [clicks, setClicks] = useState(0);
  return (
      <div>
        <div onClick={() => {setClicks(clicks + 1)}}>This div has been clicked {clicks} times</div>
        <Clicker handleClick={(letter) => {console.log(`${letter} clicked`)}} />
      </div>
  );
}

export default App;
