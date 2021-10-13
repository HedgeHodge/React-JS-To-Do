import React from "react";

export default function ToDo (props) {
  return(
    <li key={props.todo} className="to-do">
      <p>{props.todo}</p>
      <button onClick={props.handleClick}>x</button>
    </li>
  )
}