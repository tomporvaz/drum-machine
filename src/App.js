import React, { Component } from 'react';
import bassDrum from './TR808_bass-drum.WAV';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //"input": sampleText,
      //"output": this.myMarkdown(sampleText)
    };
    //this.playBassDrum = this.playBassDrum.bind(this);

  }

  

  playBassDrum () {
    let audioQ = document.getElementById("Q");
    audioQ.play();
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
          
          <div className="drum-pad" id="bassDrum" onClick={this.playBassDrum}>Q<audio src={bassDrum}id="Q"></audio></div>
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
