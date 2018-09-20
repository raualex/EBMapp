import React, { Component } from 'react';
import logo from './images/cogwheel.svg';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="Enter-btn">ENTER</button>
      </header>
    )
  }
}



export default Header;