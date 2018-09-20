import React, { Component } from 'react';
import logo from './images/cogwheel.svg';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      isHovered: false
    }

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render() {
    const imgClass = this.state.isHovered ? "Faster-spin" : "App-logo"

    return(
      <header className="App-header">
        <img src={logo} className={imgClass} alt="logo" />
        <button className="Enter-btn" onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover}>ENTER</button>
      </header>
    )
  }
}



export default Header;