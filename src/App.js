import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  "you will look back and",
  "feel proud of yourself.",
  "Someday,",
  "when things are okay",
]

function App() {
  const [counter, setCounter] = useState(2)
  return (
    <div
      onClick={(event) => setCounter(counter + 1)}  
      className="App"
    >
      {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;
