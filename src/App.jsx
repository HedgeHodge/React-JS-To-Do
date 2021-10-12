import React, {useState} from 'react';
import SwitchInput from './SwitchInput';

function App() {
  const [typing, setTyping] = useState(false);

  return (
    <div className="flex container">
      <div>
        <ul id="to-dos"></ul>
      </div>
      <div className="tutorial-container">
        <span id="tutorial-text">To add an item to your list, click the circle below</span>
      </div>
      <SwitchInput isTyping={typing}/>
    </div>
  )
}
    
export default App;