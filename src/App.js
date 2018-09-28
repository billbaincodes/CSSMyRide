import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js'
import PreviewCar from './PreviewCar';

const copyrightYear = "Copyright 2018"
const copyrightName = "Bill Bain"


class App extends Component {

  constructor(props){
    super(props)
    this.state = {currentColor: "pink"}
  }

  pinkPaint = () => {
    this.setState({currentColor: "pink"})
  }
  redPaint = () => {
    this.setState({currentColor: "red"})
  }
  silverPaint = () => {
    this.setState({currentColor: "silver"})
  }

  render() {
    return (
      <div>
        <h3>Your car is an ugly shade of {this.state.currentColor}</h3>
        <ul>Fix it with these paints:
          <button onClick={this.pinkPaint}>pink</button>
          <button onClick={this.redPaint}>red</button>
          <button onClick={this.silverPaint}>silver</button>
        </ul>

        <PreviewCar carColor={this.state.currentColor}/>

        <Footer copyrightYear={copyrightYear} copyrightName={copyrightName} />
      </div>
    );
  }
}

export default App;
