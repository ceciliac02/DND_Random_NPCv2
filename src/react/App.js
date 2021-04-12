import React from 'react';
import '../App.css';
import MainBox from './MainBox.js';
import Button from './Button.js';

function App() {
  return (
    <div className="background">
      <div className="header">This is your NPC</div>
      <MainBox />
      <Button />
    </div>
  )
}


export default App;