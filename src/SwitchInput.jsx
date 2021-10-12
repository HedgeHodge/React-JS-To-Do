import React from 'react';
import plusButton from './plus-button.svg';

function SwitchInput(props) {
  return(
    <div className="input-container">
      { props.isTyping ? 
      <img id="plus-button" src={plusButton} alt="Circle button with plus sign in the middle" /> : <input
          id="input-field"
          className="hidden"
          type="text"
          placeholder="Add something..."
        /> }
    </div>
  )
}

export default SwitchInput;