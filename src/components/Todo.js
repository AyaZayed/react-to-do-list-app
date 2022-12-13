import React from "react";

export default function Todo({ todo, handleToggle }) {
  function handleTodoClick(e) {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }
  return (
    <div key={todo.id}>
      <button
        onClick={handleTodoClick}
        id={todo.id}
        value={todo.id}
        name={todo.task}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </button>
      <span className={`todo ${todo.complete ? "completed" : null}`}>
        {todo.task}
      </span>
    </div>
  );
}
