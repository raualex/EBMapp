import React, { Component } from 'react';
import './PastMembersForm.css'

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
      clickFunc(event, pastMember)
      this.setState({ pastMember: '' })
    } else {
      return
    }
  }

  render() {
    let { pastMember } = this.state

    return (
      <div className='past-members-container'>
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