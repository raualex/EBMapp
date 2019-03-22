import React, { Component } from 'react';

class NewBandForm extends Component {
  constructor() {
    super();

    this.state = {
      band: {}
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          className='band-name'
        />
        <input
          type='text'
          className='current-members'
        />
        <input 
          type='text'
          className='past-members'
        />
        <input 
          type='text'
          className='still-active'        
        />
        <input 
          type='text'
          className='country-of-origin'        
        />
        <button>Post to Database</button>
      </div>
    )
  }
}

export default NewBandForm;