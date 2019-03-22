import React, { Component } from 'react';
import './NewBandForm.css';

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
    }
  }

  handleRadioChange = (event) => {
    let { name } = event.target

    this.setState({ stillActive: name })
  }

  handleClick = (event) => {
    let { name } = event.target
  }

  render() {
    let { stillActive } = this.state

    return (
      <div className='band-inputs-container'>
        <h1 className='band-form-title'>Enter a New Band in the Database</h1>
        <h3 className='band-input-title'>Band Name:</h3>
        <input
          type='text'
          name='band-name'
          className='band-input'
          onChange={this.handleChange}
        />
        <h3 className='band-input-title'>Current Members:</h3>
        <input
          type='text'
          name='current-members'
          className='band-input'
          onChange={this.handleChange}
        />
        <button 
          name='add-current-member'
          onClick={this.handleClick}
        >Add More</button>
        <h3 className='band-input-title'>Past Members:</h3>
        <input 
          type='text'
          name='past-members'
          className='band-input'
          onChange={this.handleChange}
        />
        <button
          name='add-past-member'
          onClick={this.handleClick}
        >Add More</button>
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
      </div>
    )
  }
}

export default NewBandForm;