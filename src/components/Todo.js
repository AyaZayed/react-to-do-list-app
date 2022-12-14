import React from "react";
import checkmark from "../images/icon-check.svg";

export default function Todo({ todo, handleToggle }) {
  function handleTodoClick(e) {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }
  return (
    <div key={todo.id} className="todo">
      <button
        onClick={handleTodoClick}
        id={todo.id}
        value={todo.id}
        name={todo.task}
        className={`check-button ${
          todo.complete ? "check-button-completed" : "null"
        }`}>
        <img src={checkmark} alt="checkmark" />
      </button>
      <span className={`${todo.complete ? "completed" : null}`}>
        {todo.task}
      </span>
    </div>
  );
}
