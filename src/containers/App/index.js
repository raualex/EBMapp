import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import { fetchBands } from '../../thunks/fetchBands';
import Header from '../../components/Header'
import BandInfo from '../BandInfo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      entered: false
    }

    // this.takeEnterInfo = this.takeEnterInfo.bind(this)
  }

  componentDidMount = () => {
    let { fetchBands } = this.props
    fetchBands()
  }

  // takeEnterInfo() {
  //   this.setState({
  //     entered: true
  //   })
  // }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/band-database' component={BandInfo} />
        </Switch>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchBands: () => dispatch(fetchBands())
});

export default withRouter(connect(null, mapDispatchToProps)(App));