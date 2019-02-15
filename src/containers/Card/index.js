import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { current_members } = this.props.selectedBand

    return current_members.map((name, index) => {
      return(
        <div key={2}>
          <ul className="albumList">
            <li className="albumTitle">{name}</li>
          </ul>
        </div>
      )
    })
  }
}

export const mapStateToProps = (state) => ({
  selectedBand: state.selectedBand
})

export default connect(mapStateToProps)(Card);