import React from "react";

function ToDoCount({ todos }) {
  return (
    <div className="to-do-count">
      You have
      {!todos.length
        ? "no todo tasks available"
        : todos.length === 1
        ? "1 todo task available"
        : todos.length > 1
        ? ` ${todos.length} todos available`
        : null}
    </div>
  );
}

export default ToDoCount;
