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
    this.setState({
      cardName: event.target.innerHTML
    })
    this.renderCard()
  }

  renderCard() {
    if(this.state.cardName === document.querySelector('.bandLink').innerHTML) {
      return(<Card />)
    }
  }

  render() {
    let bandNames = Object.keys(this.props.bandData)

    return bandNames.map((name, index) => {
      return(
        <div className="info-container" key={index}>
          <h3 className="bandLink" onClick={this.printCard}>{this.props.bandData[name].bandName}</h3>
        </div>
      )
    })
  }

}


export default BandInfo;