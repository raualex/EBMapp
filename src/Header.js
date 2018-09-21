import React, { Component } from 'react';
import logo from './images/cogwheel.svg';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      isHovered: false,
      entered: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      entered: true
    })
    this.props.takeEnterInfo(this.state.entered)
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
        <h1 className="App-title">EBM DATABASE</h1>
        <img src={logo} className={imgClass} alt="logo" />
        <button className="Enter-btn" onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover} onClick={this.handleClick}>ENTER</button>
      </header>
    )
  }
}



export default Header;