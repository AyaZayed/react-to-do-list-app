import React from "react";
import checkmark from "../images/icon-check.svg";
import deleteIcon from "../images/icon-cross.svg";

export default function Todo({ todo, handleToggle, handleDelete }) {
  function handleTodoClick(e) {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    handleDelete(e.currentTarget.id);
  }

  return (
    <div key={todo.id} className="todo">
      <div>
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
      <button
        className="delete-button"
        id={todo.id}
        value={todo.id}
        onClick={handleDeleteClick}>
        <img alt="delete todo" src={deleteIcon} />
      </button>
    </div>
  );
}
