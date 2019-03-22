import React, { Component } from 'react';
import './CurrentMembersForm.css'
import MemberCard from '../MemberCard';

class CurrentMembersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMember: ''
    }
  }

  handleChange = (event) => {
    let { value } = event.target

    this.setState({ currentMember: value })
  }

  handleClick = (event) => {
    let { clickFunc } = this.props
    let { currentMember } = this.state
    event.preventDefault()

    if (currentMember !== '') {
      clickFunc(event, currentMember, 'current')
      this.setState({ currentMember: '' })
    } else {
      return
    }
  }

  render() {
    let { currentMember } = this.state
    let { members } = this.props
    let membersList;

    if (members.length) {
      membersList = <MemberCard memberNames={members} />
    }

    return (
      <div className='current-members-container'>
        { membersList }
        <input
          type='text'
          name='current-members'
          className='current-members-input'
          onChange={this.handleChange}
          value={currentMember}
        />
        <button 
          name='add-current-member'
          onClick={this.handleClick}
        >Add More</button>
      </div>
    )
  }
}

export default CurrentMembersForm;