import React from "react";
import Todo from "./Todo";

export default function List({ todos, handleToggle, handleFilter }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo handleToggle={handleToggle} todo={todo} />;
      })}
      <button onClick={handleFilter}>Clear Completed</button>
    </div>
  );
}
