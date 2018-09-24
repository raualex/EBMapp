import React, { Component } from 'react';
import './CSS/BandInfo.css'
import Card from './Card.js'


class BandInfo extends Component {
  constructor() {
    super();

    this.state = {
      cardName: ""
    }

    this.printCard = this.printCard.bind(this)
  }

  printCard(event) {
    if (this.state.cardName !== event.target.innerHTML) {
      this.setState({
        cardName: event.target.innerHTML
      })
    } else {
      this.setState({
        cardName: ''
      }) 
    }
  }

  render() {
    let bandNames = Object.keys(this.props.bandData)
    
    return bandNames.map((name, index) => {
      if (this.state.cardName === this.props.bandData[name].bandName) {
        return(
          <div className="info-container" key={index}>
            <h3 className="bandLink" onClick={this.printCard}>{this.props.bandData[name].bandName}</h3>
            <Card cardInfo={this.props.bandData[name]}/>
          </div>
        )
      } else {
        return(
          <div className="info-container" key={index}>
            <h3 className="bandLink" onClick={this.printCard}>{this.props.bandData[name].bandName}</h3>
          </div>
        )
      }
    })
  }

}


export default BandInfo;