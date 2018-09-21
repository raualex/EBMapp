import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header.js'
import BandInfo from './BandInfo.js'
import { ebmBands } from './ebmDatabase.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      entered: false
    }

    this.takeEnterInfo = this.takeEnterInfo.bind(this)
  }

  takeEnterInfo(enterInfo) {
    this.setState({
      entered: true
    })
  }

  render() {
    if (this.state.entered === false) {
      return (
        <div className="App">
          <Header takeEnterInfo={this.takeEnterInfo}/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <BandInfo />
        </div>
      );      
    }
  }
}

export default App;
