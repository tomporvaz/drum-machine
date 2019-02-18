import React, { Component } from 'react';
import bassDrum from './TR808_bass-drum.WAV';
import './App.css';

class App extends Component {

  /* function needs this binding to work.  This function is only a test to understand how audio works.
  playBassDrum () {
    return bassDrum.play();
  }
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drum Machine</h1>
        </header>
        <div id="drum-machine">
          <div id="display">Test text</div>
          <audio src={bassDrum} controls></audio>
          <img src="./logo.svg"></img>
          <div className="drum-pad" id="Q" >Q</div>
          <div className="drum-pad" id="W">W</div>
          <div className="drum-pad" id="E">E</div>

          <div className="drum-pad" id="A">A</div>
          <div className="drum-pad" id="S">S</div>
          <div className="drum-pad" id="D">D</div>

          <div className="drum-pad" id="Z">Z</div>
          <div className="drum-pad" id="X">X</div>
          <div className="drum-pad" id="C">C</div>
        </div>


      </div>
    );
  }
}

export default App;
