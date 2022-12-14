import React from "react";
import Todo from "./Todo";

export default function List({
  todos,
  handleToggle,
  handleClear,
  handleFilter,
  handleDelete,
}) {
  return (
    <div className="list">
      <div className="todos">
        {todos.map((todo) => {
          return (
            <Todo
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              todo={todo}
            />
          );
        })}
      </div>
      <div className="list-bottom">
        <span className="items-left">
          {todos.filter((t) => t.complete === false).length} items left
        </span>
        <div className="filters">
          <button onClick={() => handleFilter("all")}>All</button>
          <button onClick={() => handleFilter("active")}>Active</button>
          <button onClick={() => handleFilter("completed")}>Completed</button>
        </div>
        <button className="clear-button" onClick={handleClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
