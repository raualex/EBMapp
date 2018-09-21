import React, { Component } from 'react';
import './CSS/BandInfo.css'


class BandInfo extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    let bandNames = Object.keys(this.props.bandData)
    console.log(bandNames)
    return bandNames.map((name, index) => {
      return(
        <div className="info-container" key={index}>
          <h3 className="bandLink">{this.props.bandData[name].bandName}</h3>
        </div>
      )
    })
  }

}


export default BandInfo;