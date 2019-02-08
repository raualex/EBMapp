import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBands } from '../../thunks/fetchBands';
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

  componentDidMount = () => {
    let { fetchBands } = this.props
    fetchBands()
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

export const mapDispatchToProps = (dispatch) => ({
  fetchBands: () => dispatch(fetchBands())
});

export default connect(null, mapDispatchToProps)(App);