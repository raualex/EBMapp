import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import { fetchBands } from '../../thunks/fetchBands';
import { fetchAlbums } from '../../thunks/fetchAlbums';
import Header from '../../components/Header';
import BandInfo from '../BandInfo';
import NewBandForm from '../../components/NewBandForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      entered: false
    }

  }

  componentDidMount = () => {
    let { fetchBands, fetchAlbums } = this.props
    fetchBands()
    fetchAlbums()
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/band-database' component={BandInfo} />
          <Route exact path='/new-band' component={NewBandForm} />
        </Switch>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchBands: () => dispatch(fetchBands()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default withRouter(connect(null, mapDispatchToProps)(App));