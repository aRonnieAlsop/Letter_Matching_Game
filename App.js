import React, { useState, useEffect } from 'react';
import './App.css';
import UppercaseBox from './components/UppercaseBox';
import LowercaseLetter from './components/LowercaseLetter';
import Confetti from 'react-confetti';


const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
return shuffledArray;
}

function App() {
  const [uppercaseLetters] = useState([...alphabet]);
  const [lowercaseLetters, setLowercaseLetters] = useState(shuffleArray([...alphabet.toLowerCase()]));
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
 

  const handleDrop = (uppercaseLetter, droppedLetter) => {
    setLowercaseLetters((prevLetters) => 
      prevLetters.filter((letter) => letter !== droppedLetter)
      );
      setMatchedLetters((prevMatched) => [...prevMatched, droppedLetter]);
  };

useEffect(() => {
  if (matchedLetters.length === alphabet.length) {
    setShowConfetti(true);
   

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }
}, [matchedLetters]);


return (
  <div className="App">
    <div className="uppercase-boxes">
      {uppercaseLetters.map((letter) => (
        <UppercaseBox 
          key={letter}
          uppercaseLetter={letter}
          onDrop={handleDrop}
          />
      ))}
    </div>
    <div className="lowercase-letters">
      {lowercaseLetters.map((letter) => (
        <LowercaseLetter key={letter} lowercaseLetter={letter} />
      ))}
    </div>
    {showConfetti && (
    <Confetti
      numberOfPieces={401}
      width={window.innerWidth}
      height={window.innerHeight}
      colors={['#f61491', '#FBA0B5', '#0000ff', '#C0C0C0', '#FFD700', '#4ADEDE']}
      gravity={0.2}
    />)}
    
  </div>
  
);
}

export default App;