import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { selectedBand, albumsList } = this.props

    let filteredAlbums = albumsList[selectedBand.id]
    
    return filteredAlbums.map((album, index) => {
      return(
        <div key={index}>
          <ul className="albumList">
            <li className="albumTitle">{album.album_title}</li>
          </ul>
        </div>
      )
    })
  }
}

export const mapStateToProps = (state) => ({
  selectedBand: state.selectedBand,
  albumsList: state.albumsList
})

export default connect(mapStateToProps)(Card);