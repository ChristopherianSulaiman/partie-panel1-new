import React, { useState } from 'react';
import './App.css';
import gear from './gear.jpg';
import copas2 from './copas2.png';
import threedots from './threedots.png';

import testt from './testt.png';
function App() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="panel-container">
      <div className="purple-layer">
        <h1 className="text">partie with Me</h1>
        <div className="submessage">
          <p>
            <span className="white-text">Type </span>
            <span className="green-text">!partie</span>
            <span className="white-text"> in chat to join the Queue</span>
          </p>
        </div>
        <div className="logo">
          <img src={testt} alt ="logo" className="logo-image" />
        </div>
        <button className="setting">
          <img src={gear} alt="gear" className="gear-image" />
        </button>
        <div className="tooltip-container">
          <div
            className={`tooltip-icon ${showTooltip ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle">
              <span className="icon">i</span>
            </div>
            <span className={`tooltip ${showTooltip ? 'visible' : ''}`}>
              This is a tooltip
            </span>
          </div>
        </div>
      </div>
      <div class="container">
        <button class="Qbutton-container">
          <div class="Qtext">
            <p>Queue</p>
          </div>
        </button>
        <button class="Pbutton-container">
          <div class="Ptext">
            <p>Partie</p>
          </div>
        </button>
        <button class="Gbutton-container">
          <div class="Gtext">
            <p>Games</p>
          </div>
        </button>
        <div className='line-segment'>

        </div>
        <div className='noplayers'><p>No players have joined yet</p></div>
        <div className='botContainer'>
          <div className='copaspos'>
            <button className='copas'>
              <img src={copas2} alt ="logo" className="logo-image" />
            </button>
            <button className='tdots'>
              <img src={threedots} alt ="logo" className="logo-image" />
            </button>
          </div>
          <div className='bottom'><p>Partie with Viewers + Chat Bot</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;

