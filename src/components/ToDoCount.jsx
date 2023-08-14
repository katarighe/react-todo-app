import React from "react";

function ToDoCount({ todos }) {
  return (
    <div className="todo-count">
      You have
      {!todos.length
        ? "no todo tasks"
        : todos.length === 1
        ? "1 todo task"
        : todos.length > 1
        ? ` ${todos.length} todos`
        : null}
    </div>
  );
}

export default ToDoCount;
