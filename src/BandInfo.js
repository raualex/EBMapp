import React, { Component } from 'react';
import './CSS/BandInfo.css'


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
  }

  render() {
    let bandNames = Object.keys(this.props.bandData)

    return bandNames.map((name, index) => {
      return(
        <div className="info-container" key={index}>
          <ul className="bandLink" onClick={this.printCard}>{this.props.bandData[name].bandName}</ul>
        </div>
      )
    })
  }

}


export default BandInfo;