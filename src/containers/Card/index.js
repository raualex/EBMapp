import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css'

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.cardInfo.studioAlbums.map((albumName, index) => {
      return(
        <div key={index}>
          <ul className="albumList">
            <li className="albumTitle">{albumName}</li>
          </ul>
        </div>
      )
    })
  }
}

export const mapStateToProps = (state) => ({
  bands: state.bandsList
})

export default Card;