import React, { Component } from 'react';
import './MemberCard.css';
import uuid from 'uuid';

class MemberCard extends Component {

  render() {
    let { memberNames } = this.props
    let membersList = memberNames.map((name) => {
      return <li key={uuid()} className='member-name'>{name}</li>
    });

    return (
      <div className='member-list-container'>
        <ul className='member-list'>
          { membersList }
        </ul> 
      </div>
    )
  }
}

export default MemberCard