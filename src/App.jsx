import React, {useState} from 'react';
import SwitchInput from './SwitchInput';
import ToDoList from './ToDoList';

export default function App() {
  const [typing, setTyping] = useState(false);
  const [toDoList, setToDoList] = useState(["One", "Two"]);
  const [text, setText] = useState("");

  function toggleTyping () {
    setTyping(!typing);
  }

  function addItem (e) {
    if (e.key === "Enter") {
      setToDoList(prevState => [...toDoList, text]);
      setText("");
    }
  }

  function removeItem (e) {
    const toDoText = (e.target.previousSibling.innerText);
    setToDoList(toDoList.filter(item => {
      return(
        item !== toDoText
      )
    }))
  }
  
  function handleChange (e) {
    setText(e.target.value);
  }

  return (
    <div className="flex container">
      <ToDoList todos={toDoList} handleClick={removeItem} />
      { 
        toDoList.length === 0 && 
        <div className="tutorial-container">
          <span id="tutorial-text">To add an item to your list, click the circle below</span>
        </div>
      }
      <SwitchInput isTyping={typing} handleSubmit={addItem} changeInput={handleChange} handleClick={toggleTyping} text={text}/>
    </div>
  )
}