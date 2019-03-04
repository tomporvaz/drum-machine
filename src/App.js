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
    //clicked is not currently used, but it has been added in order to facilitate a styling updated based on which key is pressed.
    this.state = {
      "clicked": "Q",
      "display": ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  //update this to use handle click
  handleKeyPress(event) {
    switch (event.keyCode) {
      case 81:
        this.handleClick("Q", "Bass Drum");
        break;
      case 87:
        this.handleClick("W", "Low Tom Tom");
        break;
      case 69:
        this.handleClick("E", "Snare");
        break;
      case 65:
        this.handleClick("A", "Low Conga");
        break;  
      case 83:
        this.handleClick("S", "Mid Conga");
        break;
      case 68:
        this.handleClick("D", "High Conga");
        break;
      case 90:
        this.handleClick("Z", "Cow Bell");
        break;
      case 88:
        this.handleClick("X", "Clap");
        break;
      case 67:
        this.handleClick("C", " Closed High Hat");
        break;        
    }
  }
  
  //use handle click to update state and play sound.  
  
  handleClick (letter, soundName) {
    this.setState({
      "clicked": letter,
      "display": soundName
    });
    this.playSound(letter);
    //console.log("State: " + this.state.clicked);
  }  

  //playSound uses html media api to play the sound and sets currentTime to zero 0 in order to play sounds closer together.
  playSound (letter) {
    //console.log("play: " + letter);
    let audio = document.getElementById(letter);
    audio.currentTime = 0;
    audio.play();
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Drum Machine</h1>
      </header>

      <div id="drum-machine">
      <div id="display">{this.state.display}</div>
      
      
      <div className="drum-pad" id="bassDrum" onClick={() => this.handleClick("Q", "Bass Drum")}>Q<audio class="clip" src={bassDrum} id="Q"></audio></div>
      <div className="drum-pad" id="lowTomTom" onClick={() => this.handleClick("W", "Low Tom Tom")}>W<audio class="clip" src={lowTomTom} id="W"></audio></div>
      <div className="drum-pad" id="snare" onClick={() => this.handleClick("E", "Snare")}>E<audio class="clip" src={snare} id="E"></audio></div>
      
      <div className="drum-pad" id="lowConga" onClick={() => this.handleClick("A", "Low Conga")}>A<audio class="clip" src={lowConga} id="A"></audio></div>
      <div className="drum-pad" id="midConga" onClick={() => this.handleClick("S", "Mid Conga")}>S<audio class="clip" src={midConga} id="S"></audio></div>
      <div className="drum-pad" id="highConga" onClick={() => this.handleClick("D", "High Conga")}>D<audio class="clip" src={highConga} id="D"></audio></div>
      
      <div className="drum-pad" id="cowbell" onClick={() => this.handleClick("Z", "Cow Bell")}>Z<audio class="clip" src={cowBell} id="Z"></audio></div>
      <div className="drum-pad" id="clap" onClick={() => this.handleClick("X", "Clap")}>X<audio class="clip" src={clap} id="X"></audio></div>
      <div className="drum-pad" id="closedHH" onClick={() => this.handleClick("C", " Closed High Hat")}>C<audio class="clip" src={closedHH} id="C"></audio></div>
      </div>
      
      
      </div>
      );
    }
  }
  
  export default App;
