import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header'
import BandInfo from '../BandInfo'

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
