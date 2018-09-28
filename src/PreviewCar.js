import React, { Component } from 'react';

class PreviewCar extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <h4>Behold your ugly car!</h4>
        <div className={this.props.carColor}></div>
        <div className="Tires">
          <div className={this.props.carTires}></div>
          <div className={this.props.carTires}></div>
        </div>

      </div>
    );
  }
}

export default PreviewCar;