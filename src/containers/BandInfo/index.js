import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BandInfo.css'
import Card from '../Card'


class BandInfo extends Component {
  constructor() {
    super();

    this.state = {
      cardName: ""
    }

    this.printCard = this.printCard.bind(this)
  }

  printCard(event) {
    console.log(event.target.innerHTML)
    // if (this.state.cardName !== event.target.innerHTML) {
    //   this.setState({
    //     cardName: event.target.innerHTML
    //   })
    // } else {
    //   this.setState({
    //     cardName: ''
    //   }) 
    // }
  }

  render() {
    let { bands } = this.props
    
    return bands.map((band, index) => {
      if (this.state.cardName === band.band_name) {
        return(
          <div className="info-container" key={index}>
            <h3 className="bandLink" onClick={this.printCard}>{band.band_name}</h3>
            <Card cardInfo={band}/>
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
  bands: state.bandsList
})

export default connect(mapStateToProps)(BandInfo);