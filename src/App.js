import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js'
import PreviewCar from './PreviewCar';
import Header from './Header.js'

const copyrightYear = "Copyright 2018"
const copyrightName = "Bill Bain"
const siteName = "CSS My Ride"


class App extends Component {

  constructor(){
    super()
    this.state = {
      currentColor: undefined,
      currentTires: undefined
    }
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
  steelTires = () => {
    this.setState({currentTires: "steel"})
  }
  plasticTires = () => {
    this.setState({currentTires: "plastic"})
  }


  render() {
    return (
        <div className="container">
          <Header siteName={siteName}/>
          <h3>Your car is an ugly shade of {this.state.currentColor}</h3>
          <div>Fix it with these paints:
            <button onClick={this.pinkPaint}>pink</button>
            <button onClick={this.redPaint}>red</button>
            <button onClick={this.silverPaint}>silver</button>
          </div>
          <h3>Your tires are made of crappy {this.state.currentTires}</h3>
          <div>Fix it with these materials:
            <button onClick={this.steelTires}>steel</button>
            <button onClick={this.plasticTires}>plastic</button>
          </div>
          <PreviewCar carColor={this.state.currentColor} carTires={this.state.currentTires}/>
          <Footer copyrightYear={copyrightYear} copyrightName={copyrightName} />
        </div>
    );
  }
}

export default App;
