import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import data from './members_details.json'
import Footer from './footer'
import AllMembers from './displayMember'
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Welcome to F!rosh 2T5!</h1>
      </div>

      <div className='learn-about'>
        <h1 className='title'>Learn About the Orientation Committee!</h1>
      </div>
      <AllMembers />
      <button onClick={() => {setShowConfetti(true); setTimeout(() => setShowConfetti(false), 5000);}} id = 'btn-confetti'>HYPE!!! HYPE!!! HYPE!!!</button>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: 'fixed', top:0, left: 0, zIndex:1000 }}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
