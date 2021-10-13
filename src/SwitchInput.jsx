import React from 'react';
import plusButton from '../public/plus-button.svg';

function SwitchInput(props) {
  return (
    <div className="input-container">
      { props.isTyping
        ? <input id="input-field"
                  autoFocus
                  type="text"
                  placeholder="Add something..."
                  value={props.text}
                  onChange={props.changeInput}
                  onKeyPress={(event) => { props.handleSubmit(event) }}
                  onBlur={props.handleClick} />
        : <img id="plus-button"
                onClick={props.handleClick}
                src={plusButton}
                alt="Circle button with plus sign in the middle" />}
    </div>
  )
}

export default SwitchInput;