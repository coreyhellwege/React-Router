import React, { Component } from 'react';
import './Bikes.css';

class Bikes extends Component {
  state = {
    bikes: [
        {
            id: 1,
            name: "gold bike"
        },
        {
            id: 2,
            name: "red bike"
        },
        {
            id: 3,
            name: "blue bike"
        }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Bikes</h1>
        {/* Use .map to return a new element, not .each because .each doesn't return anything */}
        {this.state.bikes.map(bike => <a href="bikes/{bike.id}" key={bike.id}><p>{bike.name}</p></a>)}
      </div>
    );
  }
}

export default Bikes;



//      /bikes => Bikes.all
//      /bikes/3 => Bikes.find(3)