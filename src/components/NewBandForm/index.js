import React, { Component } from 'react';
import './NewBandForm.css';
import CurrentMembersForm from '../CurrentMembersForm';
import PastMembersForm from '../PastMembersForm';

class NewBandForm extends Component {
  constructor() {
    super();

    this.state = {
      bandName: '',
      currentMembers: [],
      pastMembers: [],
      stillActive: null,
      countryOfOrigin: ''
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target

    if (name === 'band-name') {
      this.setState({ bandName: value })
    } else if (name === 'country') {
      this.setState({ countryOfOrigin: value })
    }
  }

  handleRadioChange = (event) => {
    let { name } = event.target

    this.setState({ stillActive: name })
  }

  handleClick = (event, actionStateVal) => {
    let { name } = event.target
    event.preventDefault()

    if (actionStateVal) {
      console.log(actionStateVal)
    } else if (name === 'submit') {
      console.log('bitches')
    }
  }

  render() {
    let { stillActive } = this.state

    return (
      <form className='band-inputs-container'>
        <h1 className='band-form-title'>Enter a New Band in the Database</h1>
        <h3 className='band-input-title'>Band Name:</h3>
        <input
          type='text'
          name='band-name'
          className='band-input'
          onChange={this.handleChange}
        />
        <h3 className='band-input-title'>Current Members:</h3>
        <CurrentMembersForm clickFunc={this.handleClick} />
        <h3 className='band-input-title'>Past Members:</h3>
        <PastMembersForm clickFunc={this.handleClick} />
        <h3 className='band-input-title'>Still Active?:</h3>
        <div className='radio-container'>
          <input 
            type='radio'
            name='Yes'
            className='band-input radio-input'
            onChange={this.handleRadioChange}
            checked={stillActive === 'Yes'}       
          />
          <label className='band-input-title radio-input-label'>Yes</label>
        </div>
        <div className='radio-container'>
          <input 
            type='radio'
            name='No'
            className='band-input radio-input'
            onChange={this.handleRadioChange}
            checked={stillActive === 'No'}      
          />
          <label className='band-input-title radio-input-label'>No</label>
        </div>
        <h3 className='band-input-title'>Country of Origin:</h3>
        <input 
          type='text'
          name='country'
          className='band-input' 
          onChange={this.handleChange}       
        />
        <button
          name='submit'
          onClick={this.handleClick}
        >Post to Database</button>
      </form>
    )
  }
}

export default NewBandForm;