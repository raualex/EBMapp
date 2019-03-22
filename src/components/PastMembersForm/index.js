import React, { Component } from 'react';
import './PastMembersForm.css'
import MemberCard from '../MemberCard';

class PastMembersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pastMember: ''
    }
  }

  handleChange = (event) => {
    let { value } = event.target

    this.setState({ pastMember: value })
  }

  handleClick = (event) => {
    let { clickFunc } = this.props
    let { pastMember } = this.state
    event.preventDefault()
    
    if (pastMember !== '') {
      clickFunc(event, pastMember, 'past')
      this.setState({ pastMember: '' })
    } else {
      return
    }
  }

  render() {
    let { pastMember } = this.state
    let { members } = this.props
    let membersList;

    if (members.length) {
      membersList = <MemberCard memberNames={members} />
    }

    return (
      <div className='past-members-container'>
      { membersList }
        <input
          type='text'
          name='past-members'
          className='past-members-input'
          onChange={this.handleChange}
          value={pastMember}
        />
        <button 
          name='add-past-member'
          onClick={this.handleClick}
        >Add More</button>
      </div>
    )
  }
}

export default PastMembersForm;