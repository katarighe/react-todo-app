import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function ToDo({ todos, completeToDo, removeToDo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>
      <RiCloseCircleLine
        onClick={() => removeToDo(todo.id)}
        className="delete-icon"
      />
    </div>
  ));
}

export default ToDo;
