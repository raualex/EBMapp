import React, { Component } from 'react';
import './MemberCard.css';
import uuid from 'uuid';

class MemberCard extends Component {

  handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.parentNode.dataset.id)
  }

  render() {
    let { memberNames } = this.props
    let membersList = memberNames.map((name) => {
      return <li 
               key={uuid()} 
               className='member-name'
               data-id={name}
             >{name}
               <button 
                 key={uuid()}
                 onClick={this.handleClick}
               >X</button>
             </li>
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