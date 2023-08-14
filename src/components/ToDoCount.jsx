import React from "react";

function ToDoCount({ todos }) {
  return (
    <div className="to-do-count">
      There is
      {!todos.length
        ? "no todo tasks that you need to complete"
        : todos.length === 1
        ? "1 todo task that you need to complete"
        : todos.length > 1
        ? ` ${todos.length} todos that you need to complete`
        : null}
    </div>
  );
}

export default ToDoCount;
