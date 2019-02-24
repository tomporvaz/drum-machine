import React, { Component } from 'react';
import bassDrum from './TR808_bass-drum.mp3';
import snare from './TR808_snare.mp3';
import lowTomTom from './TR808_low-tom-tom.mp3';
import lowConga from './TR808_low-conga.mp3';
import midConga from './TR808_mid-conga.mp3';
import highConga from './TR808_high-conga.mp3';
import cowBell from './TR808_cow-bell.mp3';
import clap from './TR808_clap.mp3';
import closedHH from './TR808_closedHH.mp3';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "clicked": ""
      //"output": this.myMarkdown(sampleText)
    };
    this.playBassDrum = this.playBassDrum.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);

  }



  playSound (letter) {
    console.log(letter);
    let audio = document.getElementById("Q");
    audio.play();
  }

  //use handle click to update state then us did update to play sound?

  handleClick (letter) {
    //this.setState({"clicked": letter});
    this.playSound(letter);
  }
  

  playBassDrum () {
    
    let audioQ = document.getElementById("Q");
    audioQ.play();
  }

  playCowBell () {
    let audioW = document.getElementById("W");
    audioW.play();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drum Machine</h1>
        </header>
        <div id="drum-machine">
          <div id="display">Test text</div>
          c
          
          <div className="drum-pad" id="bassDrum" onClick={this.handleClick}>Q<audio src={bassDrum} id="Q"></audio></div>
          <div className="drum-pad" id="cowBell" onClick={this.playCowBell}>W<audio src={cowBell} id="W"></audio></div>
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
