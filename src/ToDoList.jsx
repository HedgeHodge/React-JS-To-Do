import React from "react";
import ToDo from './ToDo';

export default function ToDoList (props) {
  return(
    <>
      <ul id="to-dos">
        { props.todos.map(todo => {
          return(
            <ToDo todo={todo} handleClick={props.handleClick} />
          )
        })}
      </ul>
    </>
  )
}