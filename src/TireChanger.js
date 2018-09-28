// import React, { Component } from 'react';

// class TireChanger extends Component {

//   constructor(props){
//     super(props)
//     this.state = {tires: "offroad"}
//     this.offroadTires = this.offroadTires.bind(this)
//     this.rubberTires = this.rubberTires.bind(this)
//   }

//   offroadTires = () => {
//     this.setState({tires: "offroad"})
//   }
//   rubberTires = () => {
//     this.setState({tires: "rubber"})
//   }

//   render() {
//     return (
//       <div>
//         <h3>Your cars tires are crappy {this.state.tires}</h3>
//         <ul>Fix it with these styles: 
//           <button onClick={this.offroadTires}>offroad</button>
//           <button onClick={this.rubberTires}>rubber</button>
//         </ul>
//       </div>
//     );
//   }
// }

// export default TireChanger;