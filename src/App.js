import React from 'react';
import './App.css';
import data from './members_details.json'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Welcome to F!rosh 2T5!</h1>
      </div>
      
      <div className="section">
        <h1 className='position'>Co-Orientation Chairs</h1>
        <div className='members'>
          {data.filter(member => member.position === "Co-Orientation Chair").map((member) => (<div key={member.name} className='memberCard'><h2 className='memberName'>{member.name}</h2><img src={member.picture} alt={member.name} className='memberPhoto'></img></div>))}
        </div>
      </div>

      <div className="section">
        <h1 className='position'>VCs</h1>
        <div className='members'>
          {data.filter(member => member.position.includes("VC")).map((member) => (<div key={member.name} className='memberCard'><h2 className='memberName'>{member.name}</h2><img src={member.picture} alt={member.name} className='memberPhoto'></img></div>))}
        </div>
      </div>

    </div>
  );
}

export default App;
