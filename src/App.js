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





  //use handle click to update state then us did update to play sound?

  handleClick (letter) {
    //this.setState({"clicked": letter});
    this.playSound(letter);
    //console.log("State: " + this.state.clicked);
  }  
  playSound (letter) {
    //console.log("play: " + letter);
    let audio = document.getElementById(letter);
    audio.play();
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
          
          <div className="drum-pad" id="bassDrum" onClick={() => this.handleClick("Q")}>Q<audio src={bassDrum} id="Q"></audio></div>
          <div className="drum-pad" id="lowTomTom" onClick={() => this.handleClick("W")}>W<audio src={lowTomTom} id="W"></audio></div>
          <div className="drum-pad" id="snare" onClick={() => this.handleClick("E")}>E<audio src={snare} id="E"></audio></div>

          <div className="drum-pad" id="lowConga" onClick={() => this.handleClick("A")}>A<audio src={lowConga} id="A"></audio></div>
          <div className="drum-pad" id="midConga" onClick={() => this.handleClick("S")}>S<audio src={midConga} id="S"></audio></div>
          <div className="drum-pad" id="highConga" onClick={() => this.handleClick("D")}>D<audio src={highConga} id="D"></audio></div>

          <div className="drum-pad" id="cowbell" onClick={() => this.handleClick("Z")}>Z<audio src={cowBell} id="Z"></audio></div>
          <div className="drum-pad" id="clap" onClick={() => this.handleClick("X")}>X<audio src={clap} id="X"></audio></div>
          <div className="drum-pad" id="closedHH" onClick={() => this.handleClick("C")}>C<audio src={closedHH} id="C"></audio></div>
        </div>


      </div>
    );
  }
}

export default App;
