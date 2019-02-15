import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../utils/assets/cogwheel.svg';
import './Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      isHovered: false,
      entered: false
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
        <h1 className="App-title">EBM DATABASE</h1>
        <img src={logo} className={imgClass} alt="logo" />
        <NavLink 
          to='/band-database'
          className='Enter-btn'
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          ENTER
        </NavLink>
      </header>
    )
  }
}



export default Header;