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
      <div>
        <ul>
          { membersList }
        </ul> 
      </div>
    )
  }
}

export default MemberCard