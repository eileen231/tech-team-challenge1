import React from 'react';
import './App.css';
import data from './members_details.json'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Welcome to F!rosh 2T5!</h1>
      </div>

      <div className='learn-about'>
        <h1 className='title'>Learn About the Orientation Committee!</h1>
      </div>

      <div className="info">
        <div className="section">
          <h1 className='position'>Co-Orientation Chairs</h1>
          <div className='members'>
            {data.filter(member => member.position === "Co-Orientation Chair").map((member) => (
              <div key={member.name} className='memberCard'>
                <div className = 'memberCard-inner'>
                  <div className='memberCard-front'>
                    <h2 className='memberName'>{member.name}</h2>
                    <img src={member.picture} alt={member.name} className='memberPhoto'>
                    </img>
                  </div>
                  <div className='memberCard-back'>
                    <h2>{member.position}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h1 className='position'>Vice Chairs</h1>
          <div className='members'>
            {data.filter(member => member.position.includes("VC")).map((member) => (
              <div key={member.name} className='memberCard'>
                <div className = 'memberCard-inner'>
                  <div className='memberCard-front'>
                    <h2 className='memberName'>{member.name}</h2>
                    <img src={member.picture} alt={member.name} className='memberPhoto'>
                    </img>
                  </div>
                  <div className='memberCard-back'>
                    <h2>{member.position}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <h3 className='footer-title'>Find us here!</h3>
        <ul>
          <li><a href="https://discord.gg/hJT44RcK" target = "_blank">Discord</a></li>
          <li><a href = "https://www.instagram.com/froshweek/" target = "_blank">Instagram</a></li>
          <li><a href = "https://linktr.ee/froshweek" target = "_blank">Linktree</a></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
