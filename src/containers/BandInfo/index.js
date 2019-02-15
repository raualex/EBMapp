import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BandInfo.css'
import Card from '../Card'
import { setSelectedBand } from '../../reducers/bands-reducers';
import { selectBand } from '../../actions/bands-actions';

class BandInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: ""
    }

    this.printCard = this.printCard.bind(this)
  }

  printCard(event) {
    let { bands, setSelectedBand } = this.props

    if (this.state.cardName !== event.target.innerHTML) {
      let foundBand = bands.find((band) => {
        return band.band_name === event.target.innerHTML
      })
      this.setState({
        cardName: event.target.innerHTML
      })
      setSelectedBand(foundBand)
    } else {
      this.setState({
        cardName: ''
      }) 
    }
  }

  render() {
    let { bands, selectedBand } = this.props
    
    return bands.map((band, index) => {
      if (this.state.cardName === band.band_name) {
        return(
          <div className="info-container" key={index}>
            <h3 className="bandLink" onClick={this.printCard}>{band.band_name}</h3>
            <Card />
          </div>
        )
      } else {
        return(
          <div className="info-container" key={index}>
            <h3 className="bandLink" onClick={this.printCard}>{band.band_name}</h3>
          </div>
        )
      }
    })
  }

}

export const mapStateToProps = (state) => ({
  bands: state.bandsList,
  selectedBand: state.selectedBand
})

export const mapDispatchToProps = (dispatch) => ({
  setSelectedBand: (bandInfo) => dispatch(selectBand(bandInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandInfo);