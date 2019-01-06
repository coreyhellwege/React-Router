import React, { Component } from 'react';
import './App.css';
import Bikes from './Bikes';
import { BrowserRouter } from 'react-router-dom'

// React router is used to swap out different components to the view for users to see

class App extends Component {

  render() {
    const { pathname } = window.location;
    const params = pathname.substr(1);
    if(params === 'bikes' || params === '') {
      // render bikes component
      return <Bikes />
    } else if (params === 'about') {
      // render about component
      return <About />
    } else {
      return <p>Unknown Path</p>;
    }
  }
}

export default App;
