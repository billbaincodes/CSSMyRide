
import React, { Component } from 'react';
import './App.css';
import paintCans from './PaintCans';



class Can extends Component {

  redPaint = () => {
    this.setState({carColor: "red"})
  }

  render() {
    return (

      
      <button onclick={this.redPaint}>
        {this.props.color}
      </button>
    );
  }
}

export default Can;