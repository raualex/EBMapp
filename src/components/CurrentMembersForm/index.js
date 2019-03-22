import React, { Component } from 'react';
import './CurrentMembersForm.css'

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
      clickFunc(event, currentMember)
      this.setState({ currentMember: '' })
    } else {
      return
    }
  }

  render() {
    let { currentMember } = this.state

    return (
      <div className='current-members-container'>
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