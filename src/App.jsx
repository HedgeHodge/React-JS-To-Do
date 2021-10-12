import React from 'react';
import './App.css';

function App() {
  return (
        <main>
          <div className="flex container">
            <div>
              <ul id="to-dos"></ul>
            </div>
            <div className="tutorial-container">
              <span id="tutorial-text">To add an item to your list, click the circle below</span>
            </div>
            <div className="input-container">
              <img id="plus-button" src="./plus-button.svg" alt="Circle button with plus sign in the middle" />
              <input
                id="input-field"
                className="hidden"
                type="text"
                placeholder="Add something..."
              />
            </div>
          </div>
        </main>
      );
    }
    
export default App;